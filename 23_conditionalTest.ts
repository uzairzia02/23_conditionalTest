

let car: string = 'toyota'; 


//test 1

console.log("1. Is car == 'toyota'? I predict true");
console.log(car == "toyota");


//test 2

console.log("2. Is car!== 'Toyota'? I predict true");
console.log(car.toLowerCase() !== "Aeroplane");

//test 3

console.log("3. Is car !== 'Toyota'? I predict true");
console.log(car !== "Toyota");

//test 4

console.log("4. Is car != 'Toyota'? I predict true");
console.log(car != "Toyota");


//test 5

console.log("5. Is car.lowercase === 'Toyota'? I predict true");
console.log(car.toLowerCase() === "toyota");

//test 6

console.log("6. Is car === 'Toyota'? I predict False");
console.log(car === "Toyota");

//test 7

console.log("7. Is car === 'Train'? I predict False");
console.log(car === "Train");

//test 8

console.log("8. Is car.lowercase === 'Toyota'? I predict false");
console.log(car.toUpperCase() === "toyota");

//test 9

console.log("9. Is car.lowercase != 'Toyota'? I predict False");
console.log(car.toLowerCase() != "toyota");

//test 10

console.log("10. Is car.lowercase == 'Bus'? I predict False");
console.log(car.toLowerCase() == "bus");