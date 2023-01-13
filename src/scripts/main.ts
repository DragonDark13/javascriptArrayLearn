function removeAllBefore(values: number[], b: number): number[] {
    // your code her
    debugger

    function checkNumber(element) {
        if (element === b) return
    }

    let position = values.findIndex(checkNumber);
    if (position > -1) return values.slice(position);
    else return values;

}

removeAllBefore([1, 2, 3, 4, 5], 3)


function isAllUpper(text: string): boolean {
    let isUppercase = true;

    var i = 0;
    var character: any = '';

    debugger;

    while (i < text.length) {
        character = text.charAt(i);

        if (character === " ") {
            isUppercase = true
            return isUppercase;
        } else {

            if (character !== character.toUpperCase()) {
                isUppercase = false
                return isUppercase;
            }
        }

        i++;
    }

    return isUppercase;

}

function maxDigit(value: number): number {
    value = 0 | value;
    var max = -1, remainder = -1;
    do {
        remainder = value % 10;
        max = (max > remainder) ? max : remainder;
        value = (value - remainder) * 1e-1;
    } while (value != 0);
    ``
    return max;
}

// output is 9

function replaceFirst(values: number[]): number[] {
    // your code here
    if (values.length > 1) {
        values.push(values.shift());
    }
    return values;
}

function splitPairs(text: string): string[] {
    let arrayText = []

    if (text !== "") {
        arrayText = text.match(/.{1,2}/g)

        arrayText.forEach(function (element, index) {
            if (element.length < 2) {
                arrayText.splice(index, 1, `${element}_`)
            }
        });
    }

    return arrayText;
}

function nearestValue(values: number[], s: number): number {


    let closest:number=values[0];

    values.reduce((previousValue, currentValue) => {

        let diffCurrent = Math.abs(currentValue - s),
            differentPrev = Math.abs(previousValue - s);
        if (diffCurrent === differentPrev)
        {
            closest = Math.min(currentValue,previousValue);
        } else if (diffCurrent < differentPrev) {
           closest= currentValue
        } else closest = previousValue;
        return closest
    })

    return closest
}

function assert(result,value){
    if (result===value) console.log("true"+"="+ result);
    else console.log("false"+"="+ result);
}


// console.log(!isAllUpper("ALL UPPER") ? "false" : "true");
// console.log(!isAllUpper("all lower") ? "false" : "true");
// console.log(!isAllUpper("mixed UPPER and lower") ? "false" : "true");
//
// console.log(maxDigit(0));
// console.log(maxDigit(52));
// console.log(maxDigit(64));
// console.log(maxDigit(10000));
//
// console.log(replaceFirst([1, 2, 3, 4]));
// console.log(replaceFirst([1]));
// console.log(replaceFirst([]));
// console.log(splitPairs("abcd"));
// console.log(splitPairs("abc"));
// console.log(splitPairs("abcdf"));
// console.log(splitPairs("a"));
// console.log(splitPairs(""));

console.log(nearestValue([4, 7, 10, 11, 12, 17], 9));
console.log(nearestValue([4, 7, 10, 11, 12, 17], 8) ===7 ? "true" : "false");
console.log(nearestValue([4, 8, 10, 11, 12, 17], 9) ? "true" : "false");
console.log(nearestValue([4, 9, 10, 11, 12, 17], 9) ? "true" : "false");
console.log(nearestValue([5], 5) ? "true" : "false");
assert(nearestValue([5], 5), 5);
assert(nearestValue([5], 7), 5);

assert(nearestValue([0,-2], -1), -2);
