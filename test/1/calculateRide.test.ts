import { calc } from "../../src/1/calculateRide"

test("Should calculate a run at normal time", () => {
    const fare = calc([{ dist: 10, ds: new Date("2021-03-10T10:00:00") }])
    expect(fare).toBe(21)
})

test("Should calculate a run at night time", () => {
    const fare = calc([{ dist: 10, ds: new Date("2021-03-10T22:00:00") }])
    expect(fare).toBe(39)
})

test("Should calculate a run on Sunday", () => {
    const fare = calc([{ dist: 10, ds: new Date("2021-03-07T10:00:00") }])
    expect(fare).toBe(29)
})

test("Should calculate a run on Sunday night", () => {
    const fare = calc([{ dist: 10, ds: new Date("2021-03-07T22:00:00") }])
    expect(fare).toBe(50)
})

test("Should not calculate a race with an invalid distance", () => {
    const fare = calc([{ dist: -10, ds: new Date("2021-03-07T22:00:00") }])
    expect(fare).toBe(-1)
})

test("Should not calculate a race with an invalid date", () => {
    const fare = calc([{ dist: 10, ds: new Date("any") }])
    expect(fare).toBe(-2)
})

test("Should calculate a race in normal time with minimum value", () => {
    const fare = calc([{ dist: 3, ds: new Date("2021-03-10T10:00:00") }])
    expect(fare).toBe(10)
})
