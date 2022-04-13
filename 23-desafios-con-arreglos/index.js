// 1. Siempre hambriento
function alwaysHungry(arr) {
	let foodCount = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 'comida') {
			console.log('delicioso');
			foodCount++;
		}
	}
	if (foodCount == 0) {
		console.log('Tengo hambre');
	}
}

// esto debería mostrar "delicioso, "delicioso"
alwaysHungry([3.14, 'comida', 'pastel', true, 'comida']);
console.log('******');
// esto debería mostrar "Tengo hambre"
alwaysHungry([4, 1, 5, 7, 2]);
console.log('-----------------------------');
// 2. Filtro paso alto
function highPass(arr, cutoff) {
	const filteredArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > cutoff) {
			filteredArr.push(arr[i]);
		}
	}
	return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]
console.log('-----------------------------');
// 3. Mejor que el promedio
function betterThanAverage(arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	let avg = sum / arr.length;
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > avg) {
			count++;
		}
	}
	return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta
console.log('-----------------------------');
// 4. Arreglo invertido
function reverse(arr) {
	var left = 0;
	var right = arr.length - 1;
	while (left < right) {
		var temp = arr[left];
		arr[left] = arr[right];
		arr[right] = temp;
		left++;
		right--;
	}

	return arr;
}

var result = reverse(['a', 'b', 'c', 'd', 'e']);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]
console.log('-----------------------------');
// 5. Arreglo de Fibonacci
function fibonacciArray(n) {
	let fibArr = [0, 1];
	while (fibArr.length < n) {
		let prev = fibArr[fibArr.length - 1];
		let prevprev = fibArr[fibArr.length - 2];
		fibArr.push(prev + prevprev);
	}
	return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
