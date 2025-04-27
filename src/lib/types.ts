export interface ActiveTransportRoute {
	timeMinutes: number;
	distanceMiles: number;
}

export type TransitRoute =
	| {
			timeMinutes: number;
			type: 'walking';
	  }
	| {
			timeMinutes: number;
			type: 'transit';
			summary: string;
	  };

export interface TravelTimes {
	work: {
		walk: ActiveTransportRoute;
		bike: ActiveTransportRoute;
		transit: TransitRoute;
	};
	subwayStop: {
		closest: {
			name: string;
			lines: string[];
		};
		walk: ActiveTransportRoute;
	};
	park: {
		closest: {
			name: string;
		};
		walk: ActiveTransportRoute;
	};
	farmersMarket: {
		closest: {
			name: string;
		};
		walk: ActiveTransportRoute;
	};
	church: {
		transit: TransitRoute;
	};
}

export interface TravelTimesRequest {
	task: Promise<TravelTimes> | null;
}

export type GoalStatus = 'met' | 'partial' | 'unmet';

export interface AuthState {
	isAuthenticated: boolean;
	token: string | null;
}
