import { fillArrays, returnSmallestOfBothArrays } from "./LoopData";
const total = 100;
const baseLimit = 5;

test("Loop Test 1", () => {
    const limit = baseLimit;
    const [array1, array2] = fillArrays(total);
    const results = returnSmallestOfBothArrays(array1, array2, limit)
    expect(results).toHaveLength(limit);

})

