import type { DateInterval, DateOptions, SelectedDateRange } from "$lib/types/date";
import * as d from "date-fns";
import ms from "date-fns/locale/ms/index.js";

export const defaultFormat = "yyyy-MM-dd h:mm a";
export const shortFormat = "yyyy-MM-dd";

export class DateSelection {
	date: Date = new Date();

	today(): DateInterval {
		return { label: "Today", startDate: d.startOfToday(), endDate: d.endOfToday() };
	}

	yesterday(): DateInterval {
		return { label: "Yesterday", startDate: d.startOfYesterday(), endDate: d.endOfYesterday() };
	}

	last7Days(): DateInterval {
		return {
			label: "Last 7 Days",
			startDate: d.startOfDay(d.subDays(this.date, 7)),
			endDate: d.endOfToday(),
		};
	}

	last30Days(): DateInterval {
		return {
			label: "Last 30 Days",
			startDate: d.startOfDay(d.subDays(this.date, 30)),
			endDate: d.endOfToday(),
		};
	}

	thisMonth(): DateInterval {
		return {
			label: "This Month",
			startDate: d.startOfMonth(this.date),
			endDate: d.endOfMonth(this.date),
		};
	}

	lastMonth(): DateInterval {
		return {
			label: "Last Month",
			startDate: d.startOfMonth(d.subMonths(this.date, 1)),
			endDate: d.endOfMonth(d.subMonths(this.date, 1)),
		};
	}

	intervals: DateInterval[] = [
		this.today(),
		this.yesterday(),
		this.last7Days(),
		this.last30Days(),
		this.thisMonth(),
		this.lastMonth(),
	];
}

export function formatLocalDate(date: Date | number, format?: string, options: DateOptions = {}) {
	if (!options.locale) options.locale = ms;
	return d.format(date, format ?? defaultFormat, options);
}

export function formatLocalInterval(selectedDate?: SelectedDateRange, format?: string): string {
	if (!selectedDate) return "";
	if (selectedDate.startDate && selectedDate.endDate) {
		return (
			formatLocalDate(selectedDate.startDate, format) +
			" - " +
			formatLocalDate(selectedDate.endDate, format)
		);
	} else if (selectedDate.startDate) {
		return formatLocalDate(selectedDate.startDate, format);
	} else return "";
}

export function getTimeDifference(
	startDate: Date,
	endDate: Date,
	option: { showHours: boolean; showMinutes: boolean; showSeconds: boolean } = {
		showHours: true,
		showMinutes: true,
		showSeconds: true,
	}
) {
	const diffTime = Math.abs(endDate.valueOf() - startDate.valueOf());
	const days = diffTime / (24 * 60 * 60 * 1000);
	const hours = (days % 1) * 24;
	const minutes = (hours % 1) * 60;
	const secs = (minutes % 1) * 60;

	const hoursString = Math.floor(hours).toString().padStart(2, "0");
	const minutesString = Math.floor(minutes).toString().padStart(2, "0");
	const secondsString = Math.floor(secs).toString().padStart(2, "0");

	const arrString: Array<string> = [];

	if (option.showHours) arrString.push(hoursString);
	if (option.showMinutes) arrString.push(minutesString);
	if (option.showSeconds) arrString.push(minutesString);

	return {
		str: arrString.join(" : "),
		hours: hoursString,
		minutes: minutesString,
		seconds: secondsString,
	};
}
