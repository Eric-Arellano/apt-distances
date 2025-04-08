export interface WalkRoute {
	timeMinutes: number;
	distanceMiles: number;
}

export interface BikeRoute {
	timeMinutes: number;
	distanceMiles: number;
}

export interface TransitRoute {
	timeMinutes: number;
	summary: string;
}

export interface TravelTimes {
	work: {
		walk: WalkRoute;
		bike: BikeRoute;
	};
	partner: {
		transit: TransitRoute;
	};
	subwayStop: {
		closest: {
			name: string;
			lines: string[];
		};
		walk: WalkRoute;
	};
	park: {
		closest: {
			name: string;
		};
		walk: WalkRoute;
	};
	farmersMarket: {
		closest: {
			name: string;
		};
		walk: WalkRoute;
	};
	fractal: {
		transit: TransitRoute;
	};
	church: {
		transit: TransitRoute;
	};
}

export type TravelTimesRequest = { task: Promise<TravelTimes> | null };

export type GoalStatus = 'met' | 'partial' | 'unmet';
