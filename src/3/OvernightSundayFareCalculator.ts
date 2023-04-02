import FareCalculatorHandler from "./FareCalculatorHandler";
import Segment from "./Segment";

export class OvernightSundayFareCalculator implements FareCalculatorHandler {
    OVERNIGHT_SUNDAY_FARE = 5;

    constructor(readonly next?: FareCalculatorHandler) {
    }

    calculate(segment: Segment): number {
        if (segment.isOvernight() && segment.isSunday()) {
            return segment.distance * this.OVERNIGHT_SUNDAY_FARE;
        }
        if (!this.next) {
            throw new Error("No fare calculator found for this segment");
        }
        return this.next.calculate(segment);
    }
}