const pizzaOven = (tipoCorteza, tipoSalsa, quesos, salsas) => ({
	tipoCorteza,
	tipoSalsa,
	quesos,
	salsas,
});

const pizza1 = pizzaOven('estilo Chicago', 'estilo Chicago', ['mozzarella'], ['pepperoni', 'salchicha']);
console.log(pizza1);

const pizza2 = pizzaOven(
	'lanzada a mano',
	'marinara',
	['mozzarella', 'feta'],
	['champiñones', 'aceitunas', 'cebollas']
);
console.log(pizza2);

const crustTypes = ['deep dish', 'hand tossed', 'thin and crispy', 'cauliflower', 'gluten free', 'hawaiian bread'];

const sauceTypes = ['traditional', 'marinara', 'bbq', 'white sauce', 'nacho cheese', 'tikka masala'];

const cheeses = [
	'mozzarella',
	'cheddar',
	'feta',
	'swiss cheese',
	'blue cheese',
	'goat cheese',
	'provolone',
	'parmesan',
	'vegan cheese',
];

const toppings = [
	'pepperoni',
	'sausage',
	'chicken',
	'corn',
	'olives',
	'bell peppers',
	'onions',
	'mushrooms',
	'anchovies',
];

const randomRange = (max, min) => {
	return Math.floor(Math.random() * max - min) + min;
};

const randomPick = (arr) => {
	var i = Math.floor(arr.length * Math.random());
	return arr[i];
};

function randomPizza() {
	const pizza = {
		crustType: randomPick(crustTypes),
		sauceType: randomPick(sauceTypes),
		cheeses: [],
		toppings: [],
	};

	for (let i = 0; i < randomRange(5, 1); i++) {
		pizza.cheeses.push(randomPick(cheeses));
	}
	for (let i = 0; i < randomRange(4, 0); i++) {
		pizza.toppings.push(randomPick(toppings));
	}
	return pizza;
}

console.log(randomPizza());
console.log(randomPizza());
console.log(randomPizza());
