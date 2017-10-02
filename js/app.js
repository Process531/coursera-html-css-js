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


// Function factory

// function makeMultiplier(multiplier) {
//     let myFunc = function (x) {
//         return multiplier * x;
//     };
//     return myFunc;
// }


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

// let a = 7;
// let b = a;
// console.log('a: ' + a);
// console.log('b: ' + b);
//
// b = 5;
// console.log('after b update: ');
// console.log('a: ' + a);
// console.log('b: ' + b);
//

// let a = {x: 7};
// let b = a;
// console.log(a);
// console.log(b);
//
// b.x = 5;
// console.log('after b.x update;');
// console.log(a);
// console.log(b);

// Pass by reference vs by value
// function changePrimitive(primValue) {
//     console.log('in chargePrimitive');
//     console.log('before:');
//     console.log(primValue);
//
//     primValue = 5;
//     console.log('after:');
//     console.log(primValue);
// }
//
// let value = 7;
// changePrimitive(value);
// console.log('after changePrimitive, orig value:');
// console.log(value);

// function changeObject(objValue) {
//     console.log('in changeObject...');
//     console.log('before:');
//     console.log(objValue);
//
//     objValue.x = 5;
//     console.log('after:');
//     console.log(objValue);
// }

// value = {x: 7};
// changeObject(value);
// console.log('after changeObject, orig value:');
// console.log(value);
// console.log(value);

// Function constructor
function Circle(radius) {
    this.radius = radius;

}

Circle.prototype.getArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
};

// let myCircle = new Circle(10);
// console.log(myCircle);
//
// let myOtherCircle = new Circle(20);
// console.log(myOtherCircle);

// Object literals and 'this'

let literalCircle = {
    radius: 10,
    getArea: function () {
        let self = this;
        console.log(this);

        let increaseRadius = function () {
            self.radius = 20;
        };
        increaseRadius();
        console.log(this.radius);
        return Math.PI * Math.pow(this.radius, 2);
    }
}


let names = ['Yaakov', 'Jonh', 'Joe'];
let myObj = {
    name: 'Yaakov',
    course: 'HTML/CSS/JS',
    platform: 'Cousera'
}

// names.greeting = 'Hi';

// for(let prop in myObj) {
//     console.log(prop + ': ' + myObj[prop]);
// }

// for(let name of names) {
//     console.log('Hello ' + name);
// }
// console.log(names);

// for(let name in names) {
//     console.log('Hello ' + names[name]);
// }

// Closures

function makeMultiplier(multiplier) {

    function b() {
        console.log('Multiplier is: ' + multiplier);
    }
    b();
    return (
        function (x) {
            return multiplier * x;
        }
    );
}

let doubleAll = makeMultiplier(2);
console.log(doubleAll(10));











