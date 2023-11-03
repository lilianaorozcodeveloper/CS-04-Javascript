// This function retunrs the sum and product of an array

let total = 0;
let numbers = [1, 2, 3, 4];

document.getElementById("initialValues").innerHTML += numbers.join(", ");

function sumOfNumbers (numbers){
    for (let index = 0; index < numbers.length; index++) {
        total += numbers[index];
    }
}

sumOfNumbers(numbers);
document.getElementById("sum").innerHTML += total;
console.log("The sum is: " + total);


const totalProduct = numbers.reduce(function (acumulator, actualValue){
    acumulator = acumulator * actualValue;
    return acumulator;
} );

document.getElementById("product").innerHTML += totalProduct;
console.log("The product is: " + totalProduct);