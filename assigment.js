//-The user can enter information such as product's name, quantity, price and the program should display the info on the console. Use the prompt to get the required information.
//-The system should calculate the final price adding taxes (like in Mexico 16% of taxes).


var ProductName = prompt("What product do you like?");
var Quantity = prompt("How many "+ProductName+"?");
var Price = prompt("Give me a prices?");

var TaxMX=.16;

var PricePreTax = (Price*Quantity);
var PriceTotal = PricePreTax + (PricePreTax*TaxMX);

console.log("Product Name: "+ProductName+" \nQuantity: "+Quantity+" \nPrices before Tax: $"+PricePreTax+" \nTotal Prices: $"+PriceTotal);


