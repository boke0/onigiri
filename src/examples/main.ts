import {Component, html} from '../index.ts';

class TestComponent extends Component{
    init() {
        return {
            attr: 'heheh',
            greet: 'hello'
        }
    }
    update(state, mes) {
        return {
            attr: state.attr,
            greet: state.greet + 'o'
        }
    }
    render(state) {
        return html`
            <div
                id=${state.attr}
                @click=${e => this.dispatch('update', state.greet + 'hhhh')}
            >
                ${
                    state.greet.length < 20
                    ? html`<h1>success!</h1>`
                    : html`<div>${state.greet}</div>`
                }
            </div>
        `;
    }
}

customElements.define('test-component', TestComponent);
