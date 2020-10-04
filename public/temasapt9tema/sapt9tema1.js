// acum se printeaza in consola '1' '2' '3' '4' '5' .
// Vrem sa fie ordinea '3' '5' '2' '1' '4'
//hint setTimeout
const func1 = () => {
    console.log('1')
}

const func2 = () => {
    console.log('2')
}

const func3 = () => {
    console.log('3')
}

const func4 = () => {
    console.log('4')
}

const func5 = () => {
    console.log('5')
}


func1();
func2();
func3();
func4();
func5();

const func1 = () => {
    setTimeout(function () {
        console.log('1')
    }, 400)
}

const func2 = () => {
    setTimeout(function () {
        console.log('2')
    }, 300)
}

const func3 = () => {
    console.log('3')
}

const func4 = () => {
    setTimeout(function () {
        console.log('4')
    }, 500)
}
const func5 = () => {
    setTimeout(function () {
        console.log('5')
    }, 200)
}


func1();
func2();
func3();
func4();
func5();

//function customMap(array, callback) {
var arr = [];
for (var index in array) {
    arr.push(callback(array[index]));
}
return arr;

//
var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(myMap(randomArray, increment));  // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console
console.log(myMap(randomArray, double));  // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
console.log(myMap(randomArray, square));  // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

function myMap(array, callback) {
    var arr = [];
    for (var index in array) {
        arr.push(callback(array[index]));
    }
    return arr;
}

//modificarea facuta de mine cu fiecare functie ce sa facut callback :)
const increment = (varToIncrement) => {
    return varToIncrement + 1;
};
const double = (varToDouble) => {
    return varToDouble * 2;
};
const square = (varToSquare) => {
    return varToSquare * varToSquare;
};

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(myMap(randomArray, increment)); // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console
console.log(myMap(randomArray, double)); // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
console.log(myMap(randomArray, square)); // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

// 2

/*
// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.
var filter = function(____, ____) {
  var filteredArray = [];
  for (var ____ = ____; ____ < ____.____; ____++) {
    var ____ = ____[____];
    if (____(____)) {
      filteredArray.push(____);
    }
  }
  return filteredArray;
};

Call the filter function in 5 different cases ( 5 different filtering functions - example: filters the odd items, filter the items which are divisible by 3, etc... )
*/

var filter = function (arrayToFilter, callback) {
    var filteredArray = [];
    for (var i = 0; i < arrayToFilter.length; i++) {
        var eachElement = arrayToFilter[i];
        if (callback(eachElement)) {
            filteredArray.push(eachElement);
        }
    }
    return filteredArray;
};

// Call the filter function in 5 different cases ( 5 different filtering functions - example: filters the odd items, filter the items which are divisible by 3, etc... )
const dividedBy3 = (toCheck) => {
    if (toCheck % 3 === 0) {
        return toCheck;
    }
}

const oddNumbers = (toCheckOdd) => {
    if (toCheckOdd % 2 !== 0) {
        return toCheckOdd;
    }
}
const divizibleAt = (toCheckDivizible) => {
    if (toCheckDivizible % 5 === 0) {
        return toCheckDivizible;
    }
}

const moduloFourFromFive = (toCheckModul) => {
    if (toCheckModul % 5 === 4) {
        return toCheckModul;
    }
}
arrayForFiltering = [5, 1, 325, 657, 4345, 8, 4, 978, 32, 64, 989, 244, 673];
console.log(filter(arrayForFiltering, dividedBy3));
console.log(filter(arrayForFiltering, oddNumbers));
console.log(filter(arrayForFiltering, divizibleAt));
console.log(filter(arrayForFiltering, moduloFourFromFive));

// 3 

/*
Write a function named multipleCallbacks that accepts 3 arguments:
	- an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error
*/

const multipleCallBacks=(objectWithStatus,callback1,callback2)=>{
    let keyStatus=objectWithStatus.status;
    if(keyStatus.toLowerCase()==="success"){
          callback1();
    }
    else if (keyStatus.toLowerCase()==="error"){
       callback2();
    }
    else{
        console.log( "Try again");
    };
}

const firstCallback=()=>{
    console.log( "You succeded it");
}
const secondCallback=()=>{
    console.log ("Error1")   ;
}
multipleCallBacks({status:"success"},firstCallback,secondCallback);
multipleCallBacks({status:"error"},firstCallback,secondCallback);
multipleCallBacks({status:"waiting"},firstCallback,secondCallback);

