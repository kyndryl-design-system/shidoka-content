import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import stylesheet from './spacerLine.scss';

@customElement(`kd-spacer-line`)
export class SpacerLine extends LitElement {
	static override styles = [stylesheet];

	override render() {
		return html`<div class="kd-spacer-line" />`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'kd-spacer-line': SpacerLine;
	}
}
