// @ts-nocheck
// calculate ride
export function calc(segments) {
    let fare = 0;
    for (const segment of segments) {
        if (segment.distance != null && segment.distance != undefined && typeof segment.distance === "number" && segment.distance > 0) {
            if (segment.date != null && segment.date != undefined && segment.date instanceof Date && segment.date.toString() !== "Invalid Date") {
                if (segment.date.getHours() >= 22 || segment.date.getHours() <= 6) {
                    if (segment.date.getDay() !== 0) {
                        fare += segment.distance * 3.90;
                    } else {
                        fare += segment.distance * 5;
                    }
                } else {
                    if (segment.date.getDay() === 0) {
                        fare += segment.distance * 2.9;
                    } else {
                        fare += segment.distance * 2.10;
                    }
                }
            } else {
                return -2;
            }
        } else {
            return -1;
        }
    }
    if (fare < 10) {
        return 10;
    } else {
        return fare;
    }
}