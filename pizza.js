function pizzaoven(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaoven("deep dish", "traditional", ["mozzerela"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaoven("hand tossed", "marinara", ["mozzerela", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var crust = ['deep dish','thin','hand tossed'];

var sauce = ['traditional','marinara','alfredo','olive oil'];

var cheese = ['mozzerela','feta','mixed','vegan cheese'];

var toppings = ['pepperoni','sausage','chicken','bacon','mushrooms','olives','onions','pinapple','crushed red pepper'];

// could not figure out this bottom part i had to check the solution lol

function randomRange (max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) { 
    var i= Math.floor(arr.length * Math.random());
    return arr[i];
}
// the random pizza function was earier than i expected am definitely over-thinking
function randomPizza() {
    var pizza = {};
    pizza.crust = randomPick(crust);
    pizza.sauce = randomPick(sauce);
    pizza.cheese = randomPick(cheese);
    pizza.toppings = randomPick(toppings);
    return pizza;
}
console.log(randomPizza()) 