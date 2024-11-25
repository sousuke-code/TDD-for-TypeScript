import { Dollar } from "./Dollar";
import { Franc } from "./Franc";
import { Money } from "./Money";

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
        const five = new Franc(5);
        expect(five.times(2)).toEqual(new Franc(10));
        expect(five.times(3)).toEqual(new Franc(15));
        expect(new Franc(5)).toEqual(new Dollar(5));
    })
})


describe("Franc", () => {
    it("test equaliyt", () => {
        const five = new Franc(5);
        expect(new Franc(10)).toEqual(five.times(2));
        expect(new Franc(15)).toEqual(five.times(3));
    })
})