import { sum } from "../src/functions";

describe('functions', () => {
    it('sum', async () => {
        expect(sum(1, 2)).toBe(3);
    });
});