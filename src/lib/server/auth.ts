import jwt from 'jsonwebtoken';
import { JWT_SECRET, SITE_PASSWORD } from './env';

export function createSession(): string {
	return jwt.sign({}, JWT_SECRET, { expiresIn: '30d' });
}

export function isValidSession(token: string): boolean {
	try {
		jwt.verify(token, JWT_SECRET);
		return true;
	} catch (e) {
		return false;
	}
}

type AuthResult = { success: true; token: string } | { success: false };

export function login(password: string): AuthResult {
	if (password !== SITE_PASSWORD) return { success: false };
	return { success: true, token: createSession() };
}
