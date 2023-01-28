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

// =================================================================================

var roastGiven = 0;
while(roastGiven < 7){
    console.log("Roast Dan, Please!! " + roastGiven);
    roastGiven++;
}


for(var i = 0; i < 7; i++){
    console.log("Roast Dan, Please !!" + i);
}


var numbers = [987, 589, 159, 658, 548, 743, 359, 818, 909, 838, 559]

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i]
    console.log(number)
}

for(var i = 1; i <= 20; i++){
    console.log(i);
    if(i>5){
        break;
    }
}