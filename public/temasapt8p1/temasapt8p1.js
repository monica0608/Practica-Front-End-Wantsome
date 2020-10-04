//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

function multiplyNumbers(a, b) {
    //definire variabile a,b pentru cele 2 numere si sum pentru suma
    let nr1 = a;
    let nr2 = b;
    let sum = a + b;
    //comparare

    if (a === b) {
        sum *= 5;
    }
    return sum;
}
console.log(multiplyNumbers(3, 2));

//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false

function testDivizion(a, b) {
    //crearea sumei
    let sum = a + b;
    //compararea pe rand a cifrelor si a sumei cu 30
    if (a === 30 && b === 30) {
        return true;
    } else if (sum === 30) {
        return true;
    } else {
        return false;
    }
}
console.log(testDivizion(30, 15));

//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

function jsFinder(jstring) {
    let compare = jstring.slice(0, 2);
    const compareValue = "JS";
    if (compare.toUpperCase() == compareValue) {
        return jstring;
    } else {
        return compareValue.concat(jstring);
    }
}
console.log(jsFinder("nothing"));

//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

function removeDuplicate(sentenceToRemove) {
    let fullSentenceAfterRemove = [];
    let sentenceArray = sentenceToRemove.toString().split("");
    console.log(sentenceArray);
    for (let i = 0; i < sentenceArray.length; i++) {
        if (sentenceArray[i] != sentenceArray[i + 1]) {
            fullSentenceAfterRemove = fullSentenceAfterRemove.concat(sentenceArray[i]);

            //Ex5
            // Gasiti cel mai lung string intr-o fraza
            //findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

            function findLongestString(stringToFind) {

                let stringToSeek = stringToFind.split(" ");
                let longestString = stringToSeek[0];
                for (let i = 0; i < stringToSeek.length; i++) {
                    if (longestString.length < stringToSeek[i].length) {
                        longestString = stringToSeek[i];
                    }
                }
                return longestString;
            }
            console.log(findLongestString("Wantsome is Awsomeeee today"));

            //ex7
            const negativeNumbers = [];

            function extractNegativeNumbers(numbers) {
                // append any negative numbers found in the numbers array 
                // into the negativeNumbers array constant variable above

            }
            extractNegativeNumbers([1, 2, -5, 4, -6])

            //
            function extractNegativeNumbers(numbers) {
                const negativeNumbers = [];
                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i] < 0) {
                        negativeNumbers.push(numbers[i]);
                        numbers.splice(i, 1);
                    }
                }
                return [numbers, negativeNumbers];
            }
            console.log(extractNegativeNumbers([1, 2, -5, 4, -6]));

            //ex8
            //Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
            //ex calculate(2, 5, "add") => 7
            //calculate(10, 8, "substract") => 2

            const calculate = function calculate(x, y, z) {
                switch (z) {
                    case "add": {
                        return x + y;
                    }
                    case "substract": {
                        return x % y;
                    }
                    case "multiply": {
                        return x * y;
                    }
                    case "divide": {
                        return x / y;
                    }
                }
            };

            console.log(calculate(2, 5, "add"));
            console.log(calculate(10, 8, "substract"));

            