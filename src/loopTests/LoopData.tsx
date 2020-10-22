import _ from "lodash";

function fillArray(numberOf: number) {
    const fill = [];
    for (let i = 0; i < numberOf; i++) {
        fill.push(Math.floor(Math.random() * (100 * (Math.random() + i))));
    }
    return _.orderBy(fill);
}

function fillArrays(numberOf: number) {
    return [fillArray(numberOf), fillArray(numberOf)];
}

function returnSmallestOfBothArrays(array1: number[], array2: number[], limit: number) {
    const newArr = _.uniq([...array1, ...array2]);
    const sortArr = _.orderBy(newArr);
    return _.take(sortArr, limit);
}

function returnSmallestOfBothArrays2(array1: number[], array2: number[], limit: number) {
    //assume the arrays are already sorted
    const newArr: number[] = [];
    for (let i: number = 0; i < array1.length; i++) {
        for (let a: number = 0; a < array2.length; a++) {
            const current = array1[i] > array2[a] ? array2[a] : array1[i];
            if (!newArr.includes(current)) {
                newArr.push(current);
            }
        }
        if (newArr.length === limit) {
            break;
        }
    }
    return newArr;
}

function getMin(arr) {
    let len = arr.length;
    let min = -Infinity;

    while (len++) {
        min = arr[len] < min ? arr[len] : min;
    }
    return min;
}


function returnSmallestOfBothArrays3(array1: number[], array2: number[], limit: number) {
    const newArr = _.uniq([...array1, ...array2]);
    const tempArray = [];
    for (let i = 0; i < limit; i++) {
        const smallest = getMin(newArr);
        tempArray.push(smallest);
        const idx = newArr.indexOf(smallest);
        newArr.splice(idx, 1);
    }
    return tempArray;
};

export { fillArrays, returnSmallestOfBothArrays, returnSmallestOfBothArrays2, returnSmallestOfBothArrays3 };