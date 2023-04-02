import NormalFareCalculator from "../../src/3/NormalFareCalculator";
import OvernightFareCalculator from "../../src/3/OvernightFareCalculator";
import { OvernightSundayFareCalculator } from "../../src/3/OvernightSundayFareCalculator";
import Ride from "../../src/3/Ride";
import { SundayFareCalculator } from "../../src/3/SundayFareCalculator";

let ride: Ride;

beforeEach(() => {
    const normal = new NormalFareCalculator();
    const sunday = new SundayFareCalculator(normal);
    const overnight = new OvernightFareCalculator(sunday);
    const overnightSunday = new OvernightSundayFareCalculator(overnight);
    ride = new Ride(overnightSunday);
});

test("Should calculate a run at normal time", () => {
    ride.addSegment(10, new Date("2021-03-10T10:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(21);
})

test("Should calculate a run at night time", () => {
    ride.addSegment(10, new Date("2021-03-10T22:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(39);
});

test("Should calculate a run on Sunday", () => {
    ride.addSegment(10, new Date("2021-03-07T10:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(29);
});

test("Should calculate a run on Sunday night", () => {
    ride.addSegment(10, new Date("2021-03-07T22:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(50);
});

test('Should calculate a minimum run', () => {
    ride.addSegment(3, new Date("2021-03-07T10:00:00"));
    const fare = ride.calculateFare();
    expect(fare).toBe(10);
})

test('Should not calculate a race with invalid distance', () => {
    expect(() => ride.addSegment(-10, new Date("2021-03-10T10:00:00"))).toThrow(new Error("Invalid distance"));
})

test('Should not calculate a race with invalid date', () => {
    expect(() => ride.addSegment(10, new Date("any"))).toThrow(new Error("Invalid date"));
}) 