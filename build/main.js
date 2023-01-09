function removeAllBefore(values, b) {
    // your code her
    function checkNumber(element) {
        if (element === b) return true;
    }
    let position = values.findIndex(checkNumber);
    if (position > -1)
        return values.slice(position);
    else
        return values;
}
console.log(removeAllBefore([7, 7, 7, 7, 7, 7, 7, 7, 7], 7));
console.log(removeAllBefore([1, 2, 3, 4, 5], 3));
