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
      </div>
    `;
  }
}

customElements.define('test-component', TestComponent);
