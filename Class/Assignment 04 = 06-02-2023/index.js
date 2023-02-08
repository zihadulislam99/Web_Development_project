// The MindGame function in addition, subtraction, multiplication, division
function mindGame(number){
    numbertype = typeof(number)
    if (numbertype != "number"){
        return "Input should be a number!";
    }
    number = number * 3;
    number = number + 10;
    number = number / 2;
    number = number - 5;
    return number;
};
// console.log(mindGame(50));



// The evenOdd function detect Is string length even or odd
function evenOdd(character){
    numbertype = typeof(character)
    if (numbertype != "string"){
        return "Input should be a string!";
    }
    number = character.length
    if (number % 2 === 0){
        return "even"
    }
    else if (number % 2 != 0){
        return "odd"
    }
};
// console.log(evenOdd("Phero"));



// The isLGSeven function in Some simple logic
function isLGSeven(number){
    numbertype = typeof(number)
    if (numbertype != "number"){
        return "Input should be a number!";
    }
    number = number - 7
    if (number < 7){
        return number
    }
    else if (number >= 7){
        number = number + 7
        number = number * 2
        return number
    }
};
// console.log(isLGSeven(14));



// The findingBadData function Detect how much bad data is in the array
function findingBadData(number){
    BadData = []
    for(let i = 0; i < number.length; i++){
        const numbers = number[i]
        numbertype = typeof(numbers)
        if (numbertype != "number"){
            return "Input should be a number!";
        }
        else if(numbers < 0){
            BadData.push(number)
        }
    }
    return BadData.length
}
// console.log(findingBadData([20, 51, -10, 5]));



// The gemsToDiamond function Multiplication 3 Friends James
function gemsToDiamond(number1, number2, number3){
    numbertype = typeof(number1 && number2 && number3)
    if (numbertype != "number"){
        return "input should be a number!";
    }
    number1 = (number1 * 21);
    number2 = (number2 * 32);
    number3 = (number3 * 43);
    number = (number1 + number2 + number3);
    if(number >= 2000){
        number = number - 2000;
        return number;
    }
    return number;
}
// console.log(gemsToDiamond(10, 10, 10));