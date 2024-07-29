function arrayValuesSum(arr) {
	const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	return sum;
}

let arr = [1, 2, 3];

console.log(arr);
console.log(arrayValuesSum(arr));