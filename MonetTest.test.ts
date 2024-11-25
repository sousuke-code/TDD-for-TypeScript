import { Dollar } from "./Dollar";

describe("Dollar", () => {
    it("should multiply correctly", () => {
        const five = new Dollar(5);
        expect(new Dollar(10)).toEqual(five.times(2));
        expect(new Dollar(15)).toEqual(five.times(3));
    });
});

describe("Dollar", () => {
    it("test equality", () => {
        expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
        expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
    })
})