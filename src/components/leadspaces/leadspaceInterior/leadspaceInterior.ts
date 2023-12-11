import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { COLOR_PALETTE_VALUES } from '../../../common/defs/colorPalettes';
import '@kyndryl-design-system/shidoka-foundation/components/button';
import '@kyndryl-design-system/shidoka-foundation/components/icon';
import '@kyndryl-design-system/shidoka-foundation/components/link';
import chevronRightIcon from '@carbon/icons/es/chevron--right/16';
import playIcon from '@carbon/icons/es/play/16';
import '../../common/eyebrow/eyebrow';
import '../../common/spacerLine/spacerLine';
import { LEADSPACE_INTERIOR_MEDIA_POSITIONS } from './defs';
import stylesheet from './leadspaceInterior.scss';

@customElement('kd-leadspace-interior')
export class LeadspaceInterior extends LitElement {
	static override styles = stylesheet;

	/** Global Color Palette */
	@property({ type: String })
	colorPalette = '';

	/** Media on the left or right. */
	@property({ type: String })
	mediaPosition: string = LEADSPACE_INTERIOR_MEDIA_POSITIONS.LEFT;

	/** Eyebrow text. */
	@property({ type: String })
	eyebrowText = '';

	/** Component title. */
	@property({ type: String })
	headlineText = '';

	/** Primary CTA text. */
	@property({ type: String })
	primaryCtaText = '';

	/** Primary CTA link. */
	@property({ type: String })
	primaryCtaLink = '';

	/** Secondary Video CTA text. */
	@property({ type: String })
	secondaryCtaText = '';

	/**
	 * Render eyebrow component
	 * @ignore
	 */
	get renderEyebrow() {
		if (this.eyebrowText) {
			return html`
				<kd-eyebrow>${this.eyebrowText}</kd-eyebrow>
				<kd-spacer-line></kd-spacer-line>
			`;
		} else {
			return null;
		}
	}

	/**
	 * Render Primary CTA
	 * @ignore
	 */
	get renderPrimaryCta() {
		if (this.primaryCtaLink) {
			return html`
				<kd-link
					href="${this.primaryCtaLink}"
					target="_self"
					kind="secondary"
					standalone
				>
					${this.primaryCtaText}
					<kd-icon slot="icon" .icon=${chevronRightIcon}></kd-icon>
				</kd-link>
			`;
		} else {
			return null;
		}
	}

	/**
	 * Render Secondary Video CTA
	 * @ignore
	 */
	get renderSecondaryCta() {
		if (this.secondaryCtaText) {
			return html`
				<div class="kd-leadspace-interior-media-cta ${COLOR_PALETTE_VALUES.DARK_STONE}">
					<kd-button
						kind="secondary"
						iconposition="right"
					>
						${this.secondaryCtaText}
						<kd-icon slot="icon" .icon=${playIcon}></kd-icon>
					</kd-button>
				</div>
			`;
		} else {
			return null;
		}
	}

	override render() {
		const classLayout = this.mediaPosition === LEADSPACE_INTERIOR_MEDIA_POSITIONS.LEFT ? '' : 'layout-option-2';
		return html`
			<div class="kd-leadspace-interior ${this.colorPalette}">
				<div class="kd-leadspace-interior-grid kd-grid kd-grid--no-gap ${classLayout}">
					<div class="kd-leadspace-interior-media-col kd-grid__col kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-6">
						<div class="kd-leadspace-interior-media-container">
							<slot name="media"></slot>
						</div>
						${this.renderSecondaryCta}
					</div>
					<div class="kd-leadspace-interior-content-col kd-grid__col kd-grid__col--sm-4 kd-grid__col--md-8 kd-grid__col--lg-6">
						${this.renderEyebrow}
						<h1 class="kd-leadspace-interior-title kd-type--headline-06">${this.headlineText}</h1>
						<slot name="description"></slot>
						${this.renderPrimaryCta}
					</div>
				</div>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'kd-leadspace-interior': LeadspaceInterior;
	}
}
