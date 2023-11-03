//This program modifies an array by applying different operations over the array

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
document.getElementById("peopleInTheList").innerHTML += people.join(", ");
console.log("People in the list: " + people.join(", "))

deletedPerson = people.splice(1,1)
console.log("Deleted person: " + deletedPerson)
console.log("New array: " + people.join(", "))
document.getElementById("daniRemoved").innerHTML += deletedPerson;
document.getElementById("newArray1").innerHTML += people.join(", ");

deletedPerson2 = people.splice(2,1)
console.log("Deleted person2: " + deletedPerson2)
console.log("New array: " + people.join(", "))
document.getElementById("juanRemoved").innerHTML += deletedPerson2;
document.getElementById("newArray2").innerHTML += people.join(", ");


let luisIndex = people.indexOf("Luis")
let deletedItem = people.splice(luisIndex,1)[0]
deletedPerson3 = people.splice(0,0, deletedItem)
console.log("New array with Luis in the front: " + people.join(", "));
document.getElementById("luisToTheFront").innerHTML += people.join(", ");

people.push("Liliana");
console.log("New name added at the end of the array: " + people.join(", "));
document.getElementById("yourNameAtTheEnd").innerHTML += people.join(", ")

for (let index = 0; index < people.length; index++){
   console.log(people[index])
   document.getElementById("exitAfterMaria").innerHTML += people[index] + ", "
    if (people[index] === "Maria"){
        break
    }
}

console.log("Maria index:" + people.indexOf("Maria"))
document.getElementById("indexOfMaria").innerHTML += people.indexOf("Maria")

console.log("Four people in the array: " + people.join(", "))
document.getElementById("finalArray").innerHTML += people.join(", ")