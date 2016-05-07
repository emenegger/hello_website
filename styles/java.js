// This is a comment. 

function anything(goobar){
	alert(goobar + " bananas");
}

function populate(){
	var element2 = document.getElementById('2');
	var pic = 
	element2.innerHTML = person.sayYourself
}

//Objects Practice
var person = {
	name: 'Mario',
	age: 78,
	beltsize: 32,
	//this is a method
	sayYourself: function() {
		return "my name is" + this.name;
	}
}

function anotherFunctin(g) {
	return g + 5;
}

console.log('the value of a number is', anotherFunctin(8));


function fun(y) {
	if (y > 10) {
		console.log(y + ' is greater than 10');
	} 
	else {
		console.log('nope');
	}
}
console.log(fun(12));

var array = ["alpha", "beta", "charlie", "delta"]

for (var i = 1; i <= 2; i++) {
	console.log(array[i]);
}