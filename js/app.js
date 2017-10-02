// let company = new Object();
// company.name = 'Facebook';
// company.ceo = new Object();
// company.ceo.firstName = 'Mark';
// company.ceo.favColor = 'blue';
// console.log(company);
//
// console.log('Company CEO name is: ' + company.ceo.firstName);
// console.log(company['name']);

// let facebook = {
//     name: 'Facebook',
//     ceo: {
//         firstName: 'Makrk',
//         favColor: 'blue'
//     },
//     'stock of company': 110
// };
//
// console.log(facebook);

function multiply(x, y) {
    return x * y;
}

multiply.version = 'v.1.0.0';
console.log(multiply);

// Function factory

function makeMultiplier(multiplier) {
    let myFunc = function (x) {
        return multiplier * x;
    };
    return myFunc;
}


// console.log(makeMultiplier(3));
// let multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(10));
// let doubleAll = makeMultiplier(2);
// console.log(doubleAll(100));

// Passing functions as arguments
function doOperationOn(x, operation) {
    return operation(x);
}
// let result = doOperationOn(5, multiplyBy3);
// console.log(result);
// result = doOperationOn(100, doubleAll);
// console.log(result);



