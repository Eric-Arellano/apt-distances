export const GOOGLE_MAPS_TOKEN = process.env['GOOGLE_MAPS_TOKEN'];
if (!GOOGLE_MAPS_TOKEN) {
	throw new Error('GOOGLE_MAPS_TOKEN must be set as an env var.');
}

export const USE_MOCK_DATA = !!process.env['MOCK'];
