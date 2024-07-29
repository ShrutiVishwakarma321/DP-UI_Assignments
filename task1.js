function arrayValuesCubes(arr) {
	let newArray = [];
	for(let i=0; i<arr.length; i++) {
	newArray.push (arr[i]*arr[i]*arr[i]);
	}
	return newArray;
}


let arr = [1, 2, 3];



console.log(arr);
console.log(arrayValuesCubes(arr));