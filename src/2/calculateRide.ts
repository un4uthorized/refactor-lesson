// calculate ride

const OVERNIGHT_FARE = 3.90;
const OVERNIGHT_SUNDAY_FARE = 5;
const SUNDAY_FARE = 2.9;
const NORMAL_FARE = 2.10;
const MINIMUM_FARE = 10;
const OVERNIGHT_START = 22;
const OVERNIGHT_END = 6;

const isOvernight = (date: Date) => {
    return date.getHours() >= OVERNIGHT_START || date.getHours() <= OVERNIGHT_END;
}

const isSunday = (date: Date) => {
    return date.getDay() === 0;
}

const isValidDistance = (distance: number) => {
    return distance > 0 && distance && typeof distance === "number";
}

const isValidDate = (date: Date) => {
    return date && date instanceof Date && date.toString() !== "Invalid Date";
}

export function calc(segments: { distance: number, date: Date }[]) {
    let fare = 0;
    for (const segment of segments) {
        if (!isValidDistance(segment.distance)) {
            throw new Error("Invalid distance");
        }
        if (!isValidDate(segment.date)) {
            throw new Error("Invalid date");
        }
        if (isOvernight(segment.date) && !isSunday(segment.date)) {
            fare += segment.distance * OVERNIGHT_FARE;
        }
        if (isOvernight(segment.date) && isSunday(segment.date)) {
            fare += segment.distance * OVERNIGHT_SUNDAY_FARE;
        }

        if (!isOvernight(segment.date) && isSunday(segment.date)) {
            fare += segment.distance * SUNDAY_FARE;
        }

        if (!isOvernight(segment.date) && !isSunday(segment.date)) {
            fare += segment.distance * NORMAL_FARE;
        }

    }
    return fare < MINIMUM_FARE ? MINIMUM_FARE : fare;
}