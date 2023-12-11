/**
 * Copyright Kyndryl, Inc. 2023
 */

import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import stylesheet from './eyebrow.scss';

@customElement(`kd-eyebrow`)
export class Eyebrow extends LitElement {
  static override styles = [stylesheet];

  override render() {
    return html`
      <div class="kd-eyebrow">
        <p class="kd-type--ui-03">
          <slot></slot>
        </p>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kd-eyebrow': Eyebrow;
  }
}
