import { calc } from "../src/1/main"

test("Should calculate a run at normal time", () => {
    const fare = calc([{ dist: 10, ds: new Date("2021-03-10T10:00:00") }])
    expect(fare).toBe(21)
})

test("Should calculate a run at night time", () => {
    const fare = calc([{ dist: 10, ds: new Date("2021-03-10T22:00:00") }])
    expect(fare).toBe(39)
})

