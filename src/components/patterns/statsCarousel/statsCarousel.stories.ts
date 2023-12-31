import { html } from 'lit';
import { createOptionsArray } from '@kyndryl-design-system/shidoka-foundation/common/helpers/storybook';
import { createColorPaletteLabels } from '../../../common/helpers/helpers';
import { COLOR_PALETTE_LABELS, COLOR_PALETTE_VALUES } from '../../../common/defs/colorPalettes';
import './index';
import { STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS } from './defs';

export default {
	title: 'Patterns/Stats Carousel',
	component: 'kd-stats-carousel',
	argTypes: {
		carouselTitle: {
			control: { type: 'text' },
		},
		colorPalette: {
			description: 'Color palette',
			options: createOptionsArray(COLOR_PALETTE_VALUES),
			control: {
				type: 'select',
				labels: createColorPaletteLabels(COLOR_PALETTE_LABELS, COLOR_PALETTE_VALUES),
			},
		},
	},
};

const args = {
	carouselTitle: 'Dicimus non negare adipiscing vacuitatem accesseris in isto hoc aegyptum ei inquit animus cum.',
	colorPalette: '',
}

export const StatsCarousel = {
	args,
	render: ({...args}) => {
		return html`
			<kd-stats-carousel
				carouselTitle="${args.carouselTitle}"
				colorPalette="${args.colorPalette}"
			>
				<kd-stats-carousel-slide
					stat="$100"
					symbol="M"
					symbolPlacement="${STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS.AFTER}"
				>
					<p>Fregellanum quae quis optimis id traditur pertinacior viros dici et. Vos quam etiam quidem restatis mecum inquam redargueret quidem me nihil dedocendi homines et. In nihil autem se homines est lorem eo.</p>
				</kd-stats-carousel-slide>
				<kd-stats-carousel-slide
					stat="50"
					symbol="%"
					symbolPlacement="${STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS.AFTER}"
				>
					<p>Sironem flagitiosum eo est esse eo odit locus lustravit atqui. Nisi eius est habentuae an inquit arcesilas ratio quod eo autem avia an noster est.</p>
				</kd-stats-carousel-slide>
				<kd-stats-carousel-slide
					stat="$60,000"
					symbol=""
					symbolPlacement="${STAT_CAROUSEL_SLIDE_SYMBOL_POSITIONS.AFTER}"
				>
					<p>In nihil autem se homines est lorem eocomitetur est inquam est tamen dolor aliud adiunxit quis dicis ad.</p>
				</kd-stats-carousel-slide>
			</kd-stats-carousel>
		`;
	}
}
