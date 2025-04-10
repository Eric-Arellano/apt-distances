let gmapsToken: string | undefined;

export function googleMapsToken(): string {
	if (gmapsToken) return gmapsToken;
	gmapsToken = process.env['GOOGLE_MAPS_TOKEN'];
	if (!gmapsToken) {
		throw new Error('GOOGLE_MAPS_TOKEN must be set as an env var.');
	}
	return gmapsToken;
}

export const USE_MOCK_DATA = !!process.env['MOCK'];
