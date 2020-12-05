export type State = Object;

export abstract class Component extends HTMLElement {
    state: State;
    template: Template;
    shadowRoot: ShadowRoot;
    get styles(): CSSStyleSheet[] {
        return []
    }
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        //@ts-ignore
        this.shadowRoot.adoptedStyleSheets = this.styles;
    }
    proxy(){
        return new Proxy(this, {
            set(target, prop, value) {
                if(prop in target){
                    target[prop] = value;
                    return true;
                }else if(target.state.hasOwnProperty(prop)){
                    target.state[prop] = value;
                    target._update(target.state);
                    return true;
                }
                return false;
            }
        });
    }
    connectedCallback(){
        this.state = this.init();
        try{
            const {temp, args} = this.render(this.state);
            this.template = temp();
        }catch(e){
            console.error('Component.render() must return result of html()');
        }
        this.shadowRoot.appendChild(this.template.fragment);
        this._update(this.state);
    }
    dispatch(action, ...args: any[]) {
        this.state = this[action](this.state, args);
        this._update(this.state);
    }
    init(...arg: any[]): State {
        return {};
    };
    _update(state: State) {
        const {args} = this.render(state);
        this.template.update(...args);
    }
    abstract render(state: State): TemplateArgSet;
}

function isComponent(value: unknown): value is Component {
    return typeof (value as Component).proxy === 'function';
}

interface NodeType {
    kind: 'text';
    node: Node;
}

interface AttrType {
    kind: 'attr';
    element: Element;
    attr: string;
}

interface TemplateRange {
    fullstring: string;
    temp: Template;
    start: Element;
    end: Element;
}

interface TemplateType {
    kind: 'temp';
    node: TemplateRange;
}

interface TemplateArrayType {
    kind: 'tempArr';
    node: TemplateRange[];
}

type Placeholder = NodeType | AttrType | TemplateType;

interface TemplateArgSet {
    fullstring: string,
    temp: Function,
    args: unknown[]
}

function isTemplateArgSet(v: unknown): v is TemplateArgSet {
    return typeof v === 'object'
        && typeof (v as TemplateArgSet).temp === 'function'
        && typeof (v as TemplateArgSet).fullstring === 'string';
}

function isTemplateArgSetArray(v: unknown): v is TemplateArgSet[] {
    return Array.isArray(v)
        && v.some(v_ => isTemplateArgSet(v_));
}

interface TemplateSlot {
    kind: 'temp',
    value: TemplateArgSet
}

interface TemplateArraySlot {
    kind: 'tempArr',
    value: TemplateArgSet[]
}

interface PrimitiveSlot {
    kind: string,
    value: unknown
}

type ArgSet = TemplateSlot | PrimitiveSlot;

export class Template{
    fragment: DocumentFragment;
    placeholder: Placeholder[];
    fullstring: string;
    constructor(strings: TemplateStringsArray) {
        this.fullstring = strings.join('');
        let html = '';
        this.placeholder = [];
        for(let i = 0; i<strings.length; i++) {
            const s = strings[i];
            html += s;
            const s_ = s.trim();
            if(s_[s_.length-1]=='=' || s_[s_.length-2]=='='){
                let attr = '';
                if (s_[s_.length-1] == '\'' || s_[s_.length-1] == '\"' || s_[s_.length-1] == '\`') {
                    html += s_[s_.length];
                    for(let j = s_.length-3; j>=0; j--) {
                        if (s_[j] == ' ') break;
                        attr = s_[j] + attr;
                    }
                }else{
                    html += '\"\"';
                    for(let j = s_.length-2; j>=0; j--) {
                        if (s_[j] == ' ') break;
                        attr = s_[j] + attr;
                    }
                }
                html += (' data-dummy-attr'+i+'='+attr);
                this.placeholder.push({
                    kind: 'attr',
                    element: null,
                    attr: attr
                });
            }else if (i != strings.length - 1){
                html += ('<span data-id="'+i+'"></span>');
                this.placeholder.push({
                    kind: 'text',
                    node: null,
                });
            }
        }
        let tmp: HTMLTemplateElement = document.createElement('template');
        tmp.innerHTML = html;
        for(let i = 0; i<strings.length - 1; i++) {
            const p = this.placeholder[i];
            switch(p.kind) {
                case "attr":
                    const dummy_elem_attr: Element = tmp.content.querySelector('[data-dummy-attr'+i+']');
                    p.element = dummy_elem_attr;
                    dummy_elem_attr.removeAttribute('data-dummy-attr'+i);
                    break;
                case "text":
                    const dummy_elem = tmp.content.querySelector('[data-id="'+i+'"]');
                    const t = document.createTextNode('');
                    dummy_elem.parentNode.replaceChild(t, dummy_elem);
                    p.node = t;
                    break;
            }
        }
        this.fragment = tmp.content;
    }
    update(...values: unknown[]){
        const values_: ArgSet[] = [];
        for(let i = 0; i<values.length; i++) {
            if(isTemplateArgSetArray(values[i])){
                const temp: TemplateArraySlot = {
                    kind: 'tempArr',
                    value: values[i] as TemplateArgSet[]
                };
                values_.push(temp);
            }else if(isTemplateArgSet(values[i])) {
                const temp: TemplateSlot = {
                    kind: 'temp',
                    value: values[i] as TemplateArgSet
                };
                values_.push(temp);
            }else{
                values_.push({
                    kind: typeof values[i],
                    value: values[i]
                })
            }
        }
        for(let i = 0; i<this.placeholder.length; i++) {
            const p = this.placeholder[i];
            const v = values_[i];
            if (p.kind == "attr") {
                const a: Attr = p.element.getAttributeNode(p.attr);
                switch(p.attr[0]) {
                    case "@":
                        p.element['on'+a.name.slice(1)] = v.value;
                        break;
                    case ".":
                        p.element[a.name.slice(1)] = v.value;
                        break;
                    case "?":
                        let attr = a.name.slice(1);
                        if(v.value){
                            p.element.setAttribute(attr, '');
                        }else if(p.element.hasAttribute(attr)){
                            p.element.removeAttribute(attr);
                        }
                        break;
                    default:
                        a.value = String(v.value);
                        break;
                }
            }else{
                if(v.kind == 'temp' && p.kind == 'temp'){
                    let v_: TemplateArgSet = v.value as TemplateArgSet;
                    if (v_.fullstring == p.node.fullstring) {
                        p.node.temp.update(v_.args);
                    }else{
                        let t: Template = v_.temp();
                        t.update(v_.args);
                        let range = document.createRange();
                        range.setStart(
                            p.node.start.parentNode,
                            [].slice.call(p.node.start.parentNode.childNodes).indexOf(p.node.start)
                        );
                        range.setEnd(
                            p.node.end.parentNode,
                            [].slice.call(p.node.end.parentNode.childNodes).indexOf(p.node.end)
                        );
                        range.deleteContents();
                        range.insertNode(t.fragment);
                        let start = range.startContainer.childNodes.item(range.startOffset);
                        let end = range.endContainer.childNodes.item(range.endOffset);
                        this.placeholder[i] = {
                            kind: 'temp',
                            node: {
                                start: start as Element,
                                end: end as Element,
                                temp: t,
                                fullstring: v_.fullstring
                            },
                        }
                    }
                }else if(v.kind == 'temp' && p.kind != 'temp') {
                    let v_: TemplateArgSet = v.value as TemplateArgSet;
                    let t: Template = v_.temp();
                    t.update(v_.args);
                    let range = document.createRange();
                    range.selectNode(p.node);
                    range.deleteContents();
                    range.insertNode(t.fragment);
                    let start = range.startContainer.childNodes.item(range.startOffset);
                    let end = range.endContainer.childNodes.item(range.endOffset);
                    this.placeholder[i] = {
                        kind: 'temp',
                        node: {
                            start: start as Element,
                            end: end as Element,
                            temp: t,
                            fullstring: v_.fullstring
                        }
                    }
                }else if(v.kind != 'temp' && p.kind == 'temp'){
                    let t = document.createTextNode(String(v.value));
                    let range = document.createRange();
                    range.setStart(
                        p.node.start.parentNode,
                        [].slice.call(p.node.start.childNodes).indexOf(p.node.start)
                    );
                    range.setEnd(
                        p.node.end.parentNode,
                        [].slice.call(p.node.end.childNodes).indexOf(p.node.end)
                    );
                    range.deleteContents();
                    range.insertNode(t);
                    this.placeholder[i] = {
                        kind: 'text',
                        node: t,
                    }
                }else if(p.kind == 'text'){
                    let t = document.createTextNode(String(v.value));
                    p.node.parentNode.replaceChild(t, p.node);
                    this.placeholder[i] = {
                        kind: 'text',
                        node: t,
                    }
                }
            }
        }
    }
}

export function html(strings: TemplateStringsArray, ...values: unknown[]): TemplateArgSet {
    return {
        fullstring: strings.join(''),
        temp: () => new Template(strings),
        args: values
    };
}
