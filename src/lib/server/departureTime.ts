export enum DayOfWeek {
	Sunday = 0,
	Monday = 1,
	Tuesday = 2,
	Wednesday = 3,
	Thursday = 4,
	Friday = 5,
	Saturday = 6
}

export function getNextDayTime(
	targetDay: DayOfWeek,
	targetHours: number,
	targetMinutes: number,
	fromDate: Date = new Date()
): Date {
	const daysToAdd = computeDaysToAdd({
		currentDay: fromDate.getDay(),
		currentHours: fromDate.getHours(),
		currentMinutes: fromDate.getMinutes(),
		targetDay,
		targetHours,
		targetMinutes
	});
	const result = new Date(fromDate);
	result.setDate(fromDate.getDate() + daysToAdd);
	result.setHours(targetHours, targetMinutes, 0, 0);
	return result;
}

function computeDaysToAdd(options: {
	currentDay: number;
	currentHours: number;
	currentMinutes: number;
	targetDay: number;
	targetHours: number;
	targetMinutes: number;
}): number {
	const { currentDay, currentHours, currentMinutes, targetDay, targetHours, targetMinutes } =
		options;

	if (currentDay === targetDay) {
		const timeHasPassed =
			currentHours > targetHours ||
			(currentHours === targetHours && currentMinutes > targetMinutes);
		return timeHasPassed ? 7 : 0;
	}

	// Target day is later in this week.
	if (currentDay < targetDay) {
		return targetDay - currentDay;
	}

	// Else, target day was earlier in this week. So,
	// use the following week.
	return 7 - (currentDay - targetDay);
}
