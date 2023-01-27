var numbers = [42, 54, 68, 66, 53, 99];

var element = numbers[1];

console.log(element);

console.log(numbers);
numbers[3] = 11;
console.log(numbers);

var positionIndex = numbers.indexOf(99);
console.log(positionIndex);

numbers.push(97);
numbers.push(21);
numbers.push(45);
console.log(numbers);

// ========================================================================

var fNames = ["kalam", "salam", "dalam", "malam"];
console.log(fNames);
fNames.push("jabbar");
console.log(fNames);
fNames.push("kabbar");
console.log(fNames);
// ================ ++++++++++++ ----------------- =========================
fNames.pop()
console.log(fNames);
fNames.pop()
console.log(fNames);
fNames.pop()
console.log(fNames);

// ========================================================================

var isGraduated = true;
var salary = 50000;
var cars = 0;


if(isGraduated == true){
    console.log(1)
}
else{
    console.log(0)
}


if(isGraduated == true || salary > 50000){
    console.log(1)
}
else{
    console.log(0)
}


if(isGraduated == true && salary > 50000){
    console.log(1)
}
else{
    console.log(0)
}


if(isGraduated == true && (salary >= 50000 || cars >= 1)){
    console.log(1)
}
else{
    console.log(0)
}