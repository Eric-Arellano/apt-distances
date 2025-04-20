import type { AuthState } from '$lib/types';

const authState: AuthState = $state({ isAuthenticated: false, token: null });

export default authState;
