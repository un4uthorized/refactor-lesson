import Segment from "./Segment";

export default interface FareCalculatorHandler {
    next?: FareCalculatorHandler;
    calculate(segments: Segment): number;
}