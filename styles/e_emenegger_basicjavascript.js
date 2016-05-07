/* Create'a'script'with'two'variables'assigned'to'two'numbers.
'Add'them'together'and'output'the'result'to'the'console */

var x = 10;
var m = 0.5;
var b = 5;

if (m * x + b === 10) 
{
	console.log("True");
}
else {
	console.log("False");
}

// Try'to'add'two'strings'together'and'output'the'result'to'an'alert

var a = "alpha";
var b = "beta";

alert (a+" "+b);

/* Create'an'object'that'holds'informa=on'about'you.
'Include' firstName,'lastName,'birthday'and'an'array'of' interests.
'Print'each'property'out'to'the'console. */

var evan = {firstName: 'Evan', lastName: 'Emenegger', birthday: 'January 13th', interests: ['basketball', 'education', 'travel']};

console.log(evan.firstName);
console.log(evan.lastName);
console.log(evan.birthday);
console.log(evan.interests[0]);
console.log(evan.interests[1]);
console.log(evan.interests[2]);

function handleclick(element) {
	var apple = document.getElementsByTagName('img')
}