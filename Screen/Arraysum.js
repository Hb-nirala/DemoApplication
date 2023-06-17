//print sum of array 
export const sumofArray = (arr) => {
    var sum = 0;
    for (let elem of arr) {
        sum += elem
    }
    return sum;
}

export default sumofArray;