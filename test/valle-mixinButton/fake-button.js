import { valleMixinButton } from '../../valle-mixinButton.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

class fakeButton extends valleMixinButton(PolymerElement) {
  static get template() {
    return html`
      <template>
        <slot></slot>
      </template>
    `
  }
};

window.customElements.define('fake-button', fakeButton);
