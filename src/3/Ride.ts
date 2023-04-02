import FareCalculatorHandler from "./FareCalculatorHandler";
import Segment from "./Segment";

export default class Ride {
    MINIMUM_FARE = 10;

    segments: Segment[];

    constructor(readonly fareCalculatorHandler: FareCalculatorHandler) {
        this.segments = [];
    }

    addSegment(distance: number, date: Date) {
        this.segments.push(new Segment(distance, date));
    }

    calculateFare() {
        let fare = 0;
        for (const segment of this.segments) {
            fare += this.fareCalculatorHandler.calculate(segment);
        }
        return fare < this.MINIMUM_FARE ? this.MINIMUM_FARE : fare;
    }
}