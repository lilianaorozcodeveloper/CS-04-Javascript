// This program sort the elements of an array from min to max

let array = [3, 6, 12, 5, 100, 1];
let arraySorted

console.log("Input: " + array)
document.getElementById("input").innerHTML += array.join(", ");

function bubbleSort (arr){
    for (let i = 0; i < array.length -1; i++) {
        for (let j = 0; j < arr.length -1; j++){
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]]
            };  
        };
    };
    return array;
};

arraySorted = bubbleSort(array)

console.log("Bubble sort resolved: " + arraySorted.join(", "));
document.getElementById("output").innerHTML += arraySorted.join(", ")