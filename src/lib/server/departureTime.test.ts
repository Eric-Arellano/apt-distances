import { describe, it, expect } from 'vitest';
import { getNextDayTime, DayOfWeek } from './departureTime';

describe('getNextDayTime', () => {
	interface DateParts {
		year: number;
		month: number;
		date: number;
		hours: number;
		minutes: number;
	}

	interface TestCase {
		description: string;
		now: Date;
		targetDay: DayOfWeek;
		targetTime: { hours: number; minutes: number };
		expected: DateParts;
	}

	const JAN = 0;
	const FEB = 1;
	const DEC = 11;
	const STANDARD_TIME = { hours: 14, minutes: 30 };
	const EARLY_TIME = { hours: 9, minutes: 0 };
	const MIDNIGHT = { hours: 0, minutes: 0 };

	const testCases: TestCase[] = [
		{
			description: 'should return today when target is same day and time has not passed',
			now: new Date(2023, JAN, 9, 10, 0), // Monday
			targetDay: DayOfWeek.Monday,
			targetTime: STANDARD_TIME,
			expected: {
				year: 2023,
				month: JAN,
				date: 9,
				...STANDARD_TIME
			}
		},
		{
			description: 'should return next week when target is same day but time has passed',
			now: new Date(2023, JAN, 9, 15, 0), // Monday
			targetDay: DayOfWeek.Monday,
			targetTime: STANDARD_TIME,
			expected: {
				year: 2023,
				month: JAN,
				date: 16, // Next Monday
				...STANDARD_TIME
			}
		},
		{
			description: 'should return now when current time is exactly target time',
			now: new Date(2023, JAN, 9, STANDARD_TIME.hours, STANDARD_TIME.minutes), // Monday
			targetDay: DayOfWeek.Monday,
			targetTime: STANDARD_TIME,
			expected: {
				year: 2023,
				month: JAN,
				date: 9,
				...STANDARD_TIME
			}
		},
		{
			description: 'should return later this week when target day is later in the week',
			now: new Date(2023, JAN, 9, 10, 0), // Monday
			targetDay: DayOfWeek.Wednesday,
			targetTime: EARLY_TIME,
			expected: {
				year: 2023,
				month: JAN,
				date: 11, // Wednesday
				...EARLY_TIME
			}
		},
		{
			description: 'should return next week when target day is earlier in the week',
			now: new Date(2023, JAN, 11, 10, 0), // Wednesday
			targetDay: DayOfWeek.Monday,
			targetTime: EARLY_TIME,
			expected: {
				year: 2023,
				month: JAN,
				date: 16, // Next Monday
				...EARLY_TIME
			}
		},
		{
			description: 'should handle time close to midnight correctly',
			now: new Date(2023, JAN, 9, 23, 59), // Monday
			targetDay: DayOfWeek.Tuesday,
			targetTime: { hours: 0, minutes: 1 },
			expected: {
				year: 2023,
				month: JAN,
				date: 10, // Next day (Tuesday)
				hours: 0,
				minutes: 1
			}
		},
		{
			description: 'should handle time just after midnight correctly',
			now: new Date(2023, JAN, 10, 0, 1), // Tuesday
			targetDay: DayOfWeek.Tuesday,
			targetTime: MIDNIGHT,
			expected: {
				year: 2023,
				month: JAN,
				date: 17, // Next Tuesday (time has passed)
				...MIDNIGHT
			}
		},
		{
			description: 'should handle month boundaries correctly',
			now: new Date(2023, JAN, 30, 12, 0), // Monday
			targetDay: DayOfWeek.Wednesday,
			targetTime: STANDARD_TIME,
			expected: {
				year: 2023,
				month: FEB,
				date: 1, // Wednesday
				...STANDARD_TIME
			}
		},
		{
			description: 'should handle year boundaries correctly',
			now: new Date(2023, DEC, 31, 12, 0), // Sunday
			targetDay: DayOfWeek.Monday,
			targetTime: { hours: 10, minutes: 0 },
			expected: {
				year: 2024,
				month: JAN,
				date: 1, // Monday
				hours: 10,
				minutes: 0
			}
		},
		{
			description: 'should handle leap year date calculations correctly',
			now: new Date(2024, FEB, 28, 10, 0), // Feb 28, 2024 (leap year) is a Wednesday
			targetDay: DayOfWeek.Thursday,
			targetTime: STANDARD_TIME,
			expected: {
				year: 2024,
				month: FEB,
				date: 29, // Feb 29 (leap day)
				...STANDARD_TIME
			}
		}
	];

	testCases.forEach(({ description, now, targetDay, targetTime, expected }) => {
		it(description, () => {
			const result = getNextDayTime({ day: targetDay, ...targetTime }, now);
			expect(result.getFullYear()).toBe(expected.year);
			expect(result.getMonth()).toBe(expected.month);
			expect(result.getDate()).toBe(expected.date);
			expect(result.getHours()).toBe(expected.hours);
			expect(result.getMinutes()).toBe(expected.minutes);
			expect(result.getSeconds()).toBe(0);
			expect(result.getMilliseconds()).toBe(0);
		});
	});
});
