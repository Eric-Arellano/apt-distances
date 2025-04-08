import { describe, it, expect } from 'vitest';
import { getNextDayTime, DayOfWeek } from './departureTime.js';

describe('getNextDayTime', () => {
	it('should return today when target is same day and time has not passed', () => {
		const now = new Date(2023, 0, 9, 10, 0); // Monday, Jan 9, 2023, 10:00
		const targetDay = DayOfWeek.Monday;
		const targetHours = 14;
		const targetMinutes = 30;

		const result = getNextDayTime(targetDay, targetHours, targetMinutes, now);

		expect(result.getFullYear()).toBe(now.getFullYear());
		expect(result.getMonth()).toBe(now.getMonth());
		expect(result.getDate()).toBe(now.getDate());
		expect(result.getHours()).toBe(targetHours);
		expect(result.getMinutes()).toBe(targetMinutes);
		expect(result.getSeconds()).toBe(0);
		expect(result.getMilliseconds()).toBe(0);
	});

	it('should return next week when target is same day but time has passed', () => {
		const now = new Date(2023, 0, 9, 15, 0); // Monday, Jan 9, 2023, 15:00
		const targetDay = DayOfWeek.Monday;
		const targetHours = 14;
		const targetMinutes = 30;

		const result = getNextDayTime(targetDay, targetHours, targetMinutes, now);

		expect(result.getFullYear()).toBe(2023);
		expect(result.getMonth()).toBe(0);
		expect(result.getDate()).toBe(16); // Next Monday
		expect(result.getHours()).toBe(14);
		expect(result.getMinutes()).toBe(30);
		expect(result.getSeconds()).toBe(0);
		expect(result.getMilliseconds()).toBe(0);
	});

	it('should return later this week when target day is later in the week', () => {
		const now = new Date(2023, 0, 9, 10, 0); // Monday, Jan 9, 2023, 10:00
		const targetDay = DayOfWeek.Wednesday;
		const targetHours = 9;
		const targetMinutes = 0;

		const result = getNextDayTime(targetDay, targetHours, targetMinutes, now);

		expect(result.getFullYear()).toBe(2023);
		expect(result.getMonth()).toBe(0);
		expect(result.getDate()).toBe(11); // Wednesday
		expect(result.getHours()).toBe(9);
		expect(result.getMinutes()).toBe(0);
		expect(result.getSeconds()).toBe(0);
		expect(result.getMilliseconds()).toBe(0);
	});

	it('should return next week when target day is earlier in the week', () => {
		const now = new Date(2023, 0, 11, 10, 0); // Wednesday, Jan 11, 2023, 10:00
		const targetDay = DayOfWeek.Monday;
		const targetHours = 9;
		const targetMinutes = 0;

		const result = getNextDayTime(targetDay, targetHours, targetMinutes, now);

		expect(result.getFullYear()).toBe(2023);
		expect(result.getMonth()).toBe(0);
		expect(result.getDate()).toBe(16); // Next Monday
		expect(result.getHours()).toBe(9);
		expect(result.getMinutes()).toBe(0);
		expect(result.getSeconds()).toBe(0);
		expect(result.getMilliseconds()).toBe(0);
	});

	it('should return now when current time is exactly target time', () => {
		const now = new Date(2023, 0, 9, 14, 30); // Monday, Jan 9, 2023, 14:30
		const targetDay = DayOfWeek.Monday;
		const targetHours = 14;
		const targetMinutes = 30;

		const result = getNextDayTime(targetDay, targetHours, targetMinutes, now);

		expect(result.getFullYear()).toBe(2023);
		expect(result.getMonth()).toBe(0);
		expect(result.getDate()).toBe(9); // This Monday
		expect(result.getHours()).toBe(14);
		expect(result.getMinutes()).toBe(30);
		expect(result.getSeconds()).toBe(0);
		expect(result.getMilliseconds()).toBe(0);
	});

	it('should handle time close to midnight correctly', () => {
		const now = new Date(2023, 0, 9, 23, 59); // Monday, Jan 9, 2023, 23:59
		const targetDay = DayOfWeek.Tuesday;
		const targetHours = 0;
		const targetMinutes = 1;

		const result = getNextDayTime(targetDay, targetHours, targetMinutes, now);

		expect(result.getFullYear()).toBe(2023);
		expect(result.getMonth()).toBe(0);
		expect(result.getDate()).toBe(10); // Next day (Tuesday)
		expect(result.getHours()).toBe(0);
		expect(result.getMinutes()).toBe(1);
		expect(result.getSeconds()).toBe(0);
		expect(result.getMilliseconds()).toBe(0);
	});

	it('should handle time just after midnight correctly', () => {
		const now = new Date(2023, 0, 10, 0, 1); // Tuesday, Jan 10, 2023, 00:01
		const targetDay = DayOfWeek.Tuesday;
		const targetHours = 0;
		const targetMinutes = 0;

		const result = getNextDayTime(targetDay, targetHours, targetMinutes, now);

		expect(result.getFullYear()).toBe(2023);
		expect(result.getMonth()).toBe(0);
		expect(result.getDate()).toBe(17); // Next Tuesday (time has passed)
		expect(result.getHours()).toBe(0);
		expect(result.getMinutes()).toBe(0);
		expect(result.getSeconds()).toBe(0);
		expect(result.getMilliseconds()).toBe(0);
	});

	it('should handle month boundaries correctly', () => {
		const now = new Date(2023, 0, 30, 12, 0); // Monday, Jan 30, 2023, 12:00
		const targetDay = DayOfWeek.Wednesday;
		const targetHours = 14;
		const targetMinutes = 30;

		const result = getNextDayTime(targetDay, targetHours, targetMinutes, now);

		expect(result.getFullYear()).toBe(2023);
		expect(result.getMonth()).toBe(1); // February
		expect(result.getDate()).toBe(1); // Wednesday, Feb 1
		expect(result.getHours()).toBe(14);
		expect(result.getMinutes()).toBe(30);
		expect(result.getSeconds()).toBe(0);
		expect(result.getMilliseconds()).toBe(0);
	});

	it('should handle year boundaries correctly', () => {
		const now = new Date(2023, 11, 31, 12, 0); // Sunday, Dec 31, 2023, 12:00
		const targetDay = DayOfWeek.Monday;
		const targetHours = 10;
		const targetMinutes = 0;

		const result = getNextDayTime(targetDay, targetHours, targetMinutes, now);

		expect(result.getFullYear()).toBe(2024);
		expect(result.getMonth()).toBe(0); // January
		expect(result.getDate()).toBe(1); // Monday, Jan 1, 2024
		expect(result.getHours()).toBe(10);
		expect(result.getMinutes()).toBe(0);
		expect(result.getSeconds()).toBe(0);
		expect(result.getMilliseconds()).toBe(0);
	});

	// 11. Test with all days of the week
	it('should work correctly for all days of the week', () => {
		const now = new Date(2023, 0, 9, 12, 0); // Monday, Jan 9, 2023, 12:00
		const targetHours = 15;
		const targetMinutes = 30;

		// Expected dates for each day of the week
		const expectedDates = [
			15, // Sunday (Jan 15)
			9, // Monday (Jan 9 - today, time not passed yet)
			10, // Tuesday (Jan 10)
			11, // Wednesday (Jan 11)
			12, // Thursday (Jan 12)
			13, // Friday (Jan 13)
			14 // Saturday (Jan 14)
		];

		// Test each day of the week
		for (let day = 0; day < 7; day++) {
			// Act
			const result = getNextDayTime(day, targetHours, targetMinutes, now);

			// Assert
			expect(result.getFullYear()).toBe(2023);
			expect(result.getMonth()).toBe(0);
			expect(result.getDate()).toBe(expectedDates[day]);
			expect(result.getHours()).toBe(targetHours);
			expect(result.getMinutes()).toBe(targetMinutes);
			expect(result.getSeconds()).toBe(0);
			expect(result.getMilliseconds()).toBe(0);
		}
	});

	it('should handle leap year date calculations correctly', () => {
		// Feb 28, 2024 (leap year) is a Wednesday
		const now = new Date(2024, 1, 28, 10, 0);
		const targetDay = DayOfWeek.Thursday;
		const targetHours = 14;
		const targetMinutes = 30;

		const result = getNextDayTime(targetDay, targetHours, targetMinutes, now);

		expect(result.getFullYear()).toBe(2024);
		expect(result.getMonth()).toBe(1); // February
		expect(result.getDate()).toBe(29); // Feb 29 (leap day)
		expect(result.getHours()).toBe(14);
		expect(result.getMinutes()).toBe(30);
	});
});
