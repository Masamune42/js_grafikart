function multiply(a, b) {
    return a * b;
}

const items = [
    1, 3, 6, 12
]

function curry(fn) {
    return function (a) {
        return function (b) {
            return fn(a, b)
        }
    }
}

console.log(items.map(curry(multiply)(2)));

let testcurry = function (a) {
    return function (b) {
        return a + ' ' + b;
    }
}

console.log(testcurry('yo')('cest moi'));