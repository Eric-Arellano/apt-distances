interface Walk {
	timeMinutes: number;
	distanceMiles: number;
}

interface Bike {
	timeMinutes: number;
	distanceMiles: number;
}

interface Transit {
	timeMinutes: number;
	summary: string;
}

export interface DistancesResult {
	work: {
		walk: Walk;
		bike: Bike;
	};
	partner: {
		transit: Transit;
	};
	subwayStop: {
		closest: {
			name: string;
			lines: string[];
		};
		walk: Walk;
	};
	park: {
		closest: {
			name: string;
		};
		walk: Walk;
	};
	farmersMarket: {
		closest: {
			name: string;
		};
		walk: Walk;
	};
	fractal: {
		transit: Transit;
	};
	church: {
		transit: Transit;
	};
}

export type GoalStatus = 'met' | 'partial' | 'unmet';
