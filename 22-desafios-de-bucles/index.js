for (let i = 1; i < 20; i += 2) {
	console.log(i);
}

for (let i = 100; i > -1; i--) {
	if (i % 3 == 0) {
		console.log(i);
	}
}

for (let i = 4; i > -4; i -= 1.5) {
	console.log(i);
}

let sum = 0;
for (let i = 1; i < 101; i++) {
	sum += i;
}
console.log(sum);

let product = 1;
for (let i = 1; i < 13; i++) {
	product *= i;
}
console.log(product);
