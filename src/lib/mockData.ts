import type { TravelTimes } from './types';

export const MOCK_DATA: TravelTimes = {
	work: {
		walk: {
			timeMinutes: 18,
			distanceMiles: 1.5
		},
		bike: {
			timeMinutes: 4,
			distanceMiles: 1.5
		}
	},
	partner: {
		transit: {
			timeMinutes: 21,
			summary: 'E -> Q'
		}
	},
	subwayStop: {
		closest: {
			name: '14th St',
			lines: ['E', 'Q', 'R']
		},
		walk: {
			timeMinutes: 6,
			distanceMiles: 0.3
		}
	},
	park: {
		closest: {
			name: 'Union Square'
		},
		walk: {
			timeMinutes: 12,
			distanceMiles: 0.8
		}
	},
	fractal: {
		transit: {
			timeMinutes: 42,
			summary: 'L'
		}
	},
	church: {
		transit: {
			timeMinutes: 18,
			summary: '2'
		}
	}
};
