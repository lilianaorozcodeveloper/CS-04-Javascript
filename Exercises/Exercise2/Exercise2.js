// This functions takes 2 parameters (array and multiplier) and multiply each 
// array value for the specified multiplier

let numbers = [7, 14, 21, 28, 35];

function doubleValues(numbers, multiplier){
    document.getElementById("initialValues").innerHTML += numbers.join(", ");

    for (let index = 0; index < numbers.length; index++) {
        console.log(numbers[index] * multiplier);
        document.getElementById("solution").innerHTML += (numbers[index] * multiplier) + ", ";
    }

}

doubleValues(numbers, 2);