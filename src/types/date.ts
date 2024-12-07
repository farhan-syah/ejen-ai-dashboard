import * as d from "date-fns";

export interface DateInterval {
	label: string;
	startDate: Date;
	endDate: Date;
}

export interface SelectedDate {
	selectedDate?: Date;
}

export interface DateRange {
	startDate?: Date;
	endDate?: Date;
}

export class SelectedDateRange {
	static getInterval(selectedDate?: DateRange): string | undefined {
		if (!selectedDate) return undefined;
		else {
			if (selectedDate.startDate) {
				if (selectedDate.endDate) {
					if (d.isToday(selectedDate.startDate) && d.isToday(selectedDate.endDate)) {
						return "Today";
					}
					if (d.isYesterday(selectedDate.startDate) && d.isYesterday(selectedDate.endDate)) {
						return "Yesterday";
					}
					if (d.isToday(selectedDate.endDate)) {
						if (d.differenceInDays(selectedDate.startDate, selectedDate.endDate) == -7) {
							return "Last 7 Days";
						}
						if (d.differenceInDays(selectedDate.startDate, selectedDate.endDate) == -30) {
							return "Last 30 Days";
						}
					}

					if (
						d.isThisMonth(selectedDate.startDate) &&
						d.isFirstDayOfMonth(selectedDate.startDate) &&
						d.lastDayOfMonth(selectedDate.endDate)
					)
						return "This Month";
					if (
						d.isSameMonth(selectedDate.startDate, d.subMonths(new Date(), 1)) &&
						d.isFirstDayOfMonth(selectedDate.startDate) &&
						d.lastDayOfMonth(selectedDate.endDate)
					)
						return "Last Month";
					if (d.isSameDay(selectedDate.startDate, selectedDate.endDate)) return undefined;
					return "Custom Range";
				}
				if (d.isToday(selectedDate.startDate)) return "Today";
				if (d.isYesterday(selectedDate.startDate)) return "Yesterday";
			}
		}
		return undefined;
	}
}
