function alwaysHungry(arr) {
	let foodCount = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 'food') {
			console.log('yummy');
			foodCount++;
		}
	}
	if (foodCount == 0) {
		console.log("I'm hungry");
	}
}

function highPass(arr, cutoff) {
	const filteredArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > cutoff) {
			filteredArr.push(arr[i]);
		}
	}
	return filteredArr;
}

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
console.log(result);
