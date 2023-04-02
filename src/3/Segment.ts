export default class Segment {
    OVERNIGHT_START = 22;
    OVERNIGHT_END = 6;

    constructor(readonly distance: number, readonly date: Date) {
        if (!this.isValidDistance()) throw new Error("Invalid distance");
        if (!this.isValidDate()) throw new Error("Invalid date");
    }


    isValidDistance = () => {
        return this.distance > 0 && this.distance
    }

    isValidDate = () => {
        return this.date && this.date instanceof Date && this.date.toString() !== "Invalid Date";
    }

    isOvernight = () => {
        return this.date.getHours() >= this.OVERNIGHT_START || this.date.getHours() <= this.OVERNIGHT_END;
    }

    isSunday = () => {
        return this.date.getDay() === 0;
    }

}