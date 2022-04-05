// 1
console.log(hello);
var hello = 'world';
// Resultado: undefined

// 2
var needle = 'haystack';
test();
function test() {
	var needle = 'magnet';
	console.log(needle);
}
// Resultado: 'magnet'

// 3
var brendan = 'super cool';
function print() {
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
// Resultado: 'super cool'

// 4
var food = 'chicken';
console.log(food);
eat();
function eat() {
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
// Resultado: 'chicken'
// Resultado: 'half-chicken'

// 5
mean();
console.log(food);
var mean = function () {
	food = 'chicken';
	console.log(food);
	var food = 'fish';
	console.log(food);
};
console.log(food);
// Error: mean no es una funcion

// 6
console.log(genre);
var genre = 'disco';
rewind();
function rewind() {
	genre = 'rock';
	console.log(genre);
	var genre = 'r&b';
	console.log(genre);
}
// Resultado: 'disco'
// Resultado: 'rock'
// Resultado: 'r&b'

// 7
dojo = 'san jose';
console.log(dojo);
learn();
function learn() {
	dojo = 'seattle';
	console.log(dojo);
	var dojo = 'burbank';
	console.log(dojo);
}
console.log(dojo);
// Resultado: 'san jose'
// Resultado: 'seattle'
// Resultado: 'burbank'
// Resultado: 'san jose'

// 8
console.log(makeDojo('Chicago', 65));
console.log(makeDojo('Berkeley', 0));
function makeDojo(name, students) {
	const dojo = {};
	dojo.name = name;
	dojo.students = students;
	if (dojo.students > 50) {
		dojo.hiring = true;
	} else if (dojo.students <= 0) {
		dojo = 'closed for now';
	}
	return dojo;
}
// Resultado: { name: 'Chicago', students: 65, hiring: true }
// Nose puede asignar un valor a una constante
