import FareCalculatorHandler from "./FareCalculatorHandler";
import Segment from "./Segment";

export default class NormalFareCalculator implements FareCalculatorHandler {
    NORMAL_FARE = 2.1;

    constructor(readonly next?: FareCalculatorHandler) {
    }

    calculate(segment: Segment): number {
        if (!segment.isOvernight() && !segment.isSunday()) {
            return segment.distance * this.NORMAL_FARE;
        }
        if (!this.next) {
            throw new Error("No fare calculator found for this segment");
        }
        return this.next.calculate(segment);
    }
}