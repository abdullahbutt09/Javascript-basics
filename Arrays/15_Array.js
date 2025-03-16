let arr = [1 , "hitesh" , 2 , `n` , "codewithchai" , 89];
// console.log(typeof arr);
// console.log(arr);

// let arr2 = arr.join();
// console.log(typeof arr2);
// console.log(arr2);

// arr.push("abdullah");
// console.log(arr);
// arr.pop();
// console.log(arr);

// let store = arr.shift(); //return the first element of the array!
// console.log(store)
// let store2 = arr.unshift(); //return new length of array!
// console.log(store2)

// let slicecheck = arr.slice(0 , 2);
// console.log(slicecheck);
// console.log(arr);

// let splicecheck = arr.splice(0 , 2);
// console.log(splicecheck);
// console.log(arr);

let arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 3, "A", "B");  // Removes 1 element at index 2, adds "A", "B"
console.log(arr2);  // Output: [1, 2, "A", "B", 4, 5]
