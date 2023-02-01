function singara(money){
    console.log(money,"takar sengara dan")
    console.log("ay nane",money,"takar sengara")
}

var taka = 200;

// singara(taka);


// ========= Properties ===================================

var shoppingCart = {
    Books: 3,
    Sunglass: 1,
    Mouse: 5,
    Pen: 25
}

var penCount = shoppingCart.Pen;

var penCount2 = shoppingCart['Books'];

var PropertyName = "Books";

var penCountyValues_ = shoppingCart[PropertyName];

var penCounties = Object.keys(shoppingCart);

var penCountyValues = Object.values(shoppingCart);

// console.log(PropertyName, penCountyValues_);

// =====================================================

shoppingCart.Mouse = 25;
shoppingCart["Mouse"] = 55;
shoppingCart[PropertyName] = 55;

// console.log(shoppingCart)

// ========= Object ===================================

var shoppingCart = {
    Books: 3,
    Sunglass: 1,
    Mouse: 5,
    Pen: 25,
    Tshart: 90,
    Pant: 5,
    Shoes: 5,
    Bottles: 7,
}

var shoppingItems = ["Books", "Sunglass", "Mouse", "Pen"];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
    rahim1: 861,
    rahim2: 862,
    rahim3: 863,
    rahim4: 864,
}

const keys = Object.keys(shoppingCart);
// console.log(keys);

const values = Object.values(shoppingCart);
// console.log(values);



for (var i = 0; i < keys.length; i++){
    var PropertyName = (keys[i]);
    var PropertyValues = shoppingCart[PropertyName];
    // console.log(PropertyName, PropertyValues);
}

for (var PropertyName in shoppingCart){
    const value = shoppingCart[PropertyName]
    // console.log(PropertyName, value)
}

// ==========================================================================

const color = "yellow";
if (color === "green"){
    console.log("You are a Green friend");
}
else if (color === "blue"){
    console.log("You are a Blue friend");
}
else if (color === "red"){
    console.log("You are a Red friend");
}
else if (color === "white"){
    console.log("You are a White friend");
}
else if (color === "yellow"){
    console.log("You are a Yellow friend");
}
else {
    console.log("You are a Black friend");
}

switch (color){
    case "green":
        console.log("You are a green friend");
        break;
    case "blue":
        console.log("You are a blue friend");
        break;
    case "red":
        console.log("You are a red friend");
        break;
    case "white":
        console.log("You are a white friend");
        break;
    case "yellow":
        console.log("You are a yellow friend");
        break;
    default:
        console.log("You are a black friend");
}
  