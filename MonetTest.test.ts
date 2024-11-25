import { Dollar } from "./Dollar";

describe("Dollar", () => {
    it("should multiply correctly", () => {
        const five = new Dollar(5);
        five.times(2);
        expect(five.amount).toEqual(10);
    });
});