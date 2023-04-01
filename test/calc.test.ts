import { calc } from "../src/1/main"

test("Should calculate a run at normal time", () => {
    const fare = calc([{ dist: 10, ds: new Date("2021-01-01T10:00:00.000Z") }])
    expect(fare).toBe(21)
})