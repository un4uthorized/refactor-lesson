import FareCalculatorHandler from "./FareCalculatorHandler";
import Segment from "./Segment";

export class SundayFareCalculator implements FareCalculatorHandler {
    SUNDAY_FARE = 2.9;

    constructor(readonly next?: FareCalculatorHandler) {
    }

    calculate(segment: Segment): number {
        if (!segment.isOvernight() && segment.isSunday()) {
            return segment.distance * this.SUNDAY_FARE;
        }
        if (!this.next) {
            throw new Error("No fare calculator found for this segment");
        }
        return this.next.calculate(segment);
    }
}