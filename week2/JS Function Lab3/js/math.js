
/* Create variables to hold numbers
var num1=""; 
var num2="";
var subTotal="";
*/
function Add() {
	var num1 =parseInt(document.getElementById('n1').value);
	var num2= parseInt(document.getElementById('n2').value);


	if (num1>10) {
		alert ("Entered Number 1 shouldn't be greater than 10!");
	}
	else {
		subTotal= num1+num2;
		confirm ("Total sum of " +num1 + " + " + num2 +" is equal " +subTotal);
	}
};

/*
var a= parseInt(prompt("Enter first number"));
if (a===null) {
	console.log("You pressed Cancel!");
} else {
	var b=parseInt(prompt("Enter second number"));
	if (b===null) {
		console.log("You pressed Cancel!");
	} else {
		for (var i=a; i<=b; i++) {
			if (i%2===0){
				console.log(i);
			}
		}
	}
}
*/