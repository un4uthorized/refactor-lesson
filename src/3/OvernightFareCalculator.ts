import FareCalculatorHandler from "./FareCalculatorHandler";
import Segment from "./Segment";

export default class OvernightFareCalculator implements FareCalculatorHandler {
    OVERNIGHT_FARE = 3.9;

    constructor(readonly next?: FareCalculatorHandler) {
    }

    calculate(segment: Segment): number {
        if (segment.isOvernight() && !segment.isSunday()) {
            return segment.distance * this.OVERNIGHT_FARE;
        }
        if (!this.next) {
            throw new Error("No fare calculator found for this segment");
        }
        return this.next.calculate(segment);
    }
}