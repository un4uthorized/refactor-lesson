import { calc } from "../../src/2/calculateRide"

test("Should calculate a run at normal time", () => {
    const fare = calc([{ distance: 10, date: new Date("2021-03-10T10:00:00") }])
    expect(fare).toBe(21)
})

test("Should calculate a run at night time", () => {
    const fare = calc([{ distance: 10, date: new Date("2021-03-10T22:00:00") }])
    expect(fare).toBe(39)
})

test("Should calculate a run on Sunday", () => {
    const fare = calc([{ distance: 10, date: new Date("2021-03-07T10:00:00") }])
    expect(fare).toBe(29)
})

test("Should calculate a run on Sunday night", () => {
    const fare = calc([{ distance: 10, date: new Date("2021-03-07T22:00:00") }])
    expect(fare).toBe(50)
})

test("Should not calculate a race with an invalid distance", () => {
    expect(() => calc([
        { distance: -10, date: new Date("2021-03-07T22:00:00") }
    ])).toThrow("Invalid distance")
})

test("Should not calculate a race with an invalid date", () => {
    expect(() => calc([
        { distance: 10, date: new Date("any") }]
    )).toThrow("Invalid date")
})

test("Should calculate a race in normal time with minimum value", () => {
    const fare = calc([{ distance: 3, date: new Date("2021-03-10T10:00:00") }])
    expect(fare).toBe(10)
})
