// This function takes an array and put all the values together in the same line
// with the specified element in join parenthesis

function printOutString() {
    console.log(arr.join(" "));
    document.getElementById("solution").innerHTML = arr.join(" ");
}
  
let arr = ["This", "is", "a", "sentence."];
  
printOutString();