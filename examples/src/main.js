import {Component, html} from '../../dist/onigiri.js';

class TestComponent extends Component {
  init() {
    return {
      attr: 'hello',
      content: 'control'
    }
  }
  update(state) {
    return {
      attr: state.attr + 'e',
      content: state.content + 'c'
    }
  }
  render(state) {
    return html`
      <div id=${state.attr} @click=${e => this.dispatch('update')}>
        ${state.content}
        <test-test-component></test-test-component>
        <input type='text' .value=${state.content} />
      </div>
    `;
  }
}

class TestTestComponent extends Component {
  init(){
    return {
      value: this.value
    }
  }
  render(state) {
    return html`
    `;
  }
}

customElements.define('test-component', TestComponent);
customElements.define('test-test-component', TestTestComponent);
