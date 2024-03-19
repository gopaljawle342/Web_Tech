let arr =[1,2,3,4,5]

console.log(arr);
console.log(arr.length);

console.log(arr[0])

arr[0]=555;

console.log(arr);

console.log(arr.toString());  // convert array into string

//join methos is use for change commo(,) into any another word/character/string 
//example here 'commo' change into 'and'
console.log(arr.join(" and "));

// pop method is use for remove element from array
// example here pop method remove last index value
arr.pop();
console.log(arr);

//push method is use for add value in array at lastindex;
arr.push(100)
console.log(arr)

//shift method is use for remove value from array at first index
arr.shift()
console.log(arr)


//unshift method is use for add value at array at fisrt index
arr.unshift("jack")
console.log(arr)

// delete method delete item from array but memory of that value maintain not remove and length of array also same
delete arr[4]
console.log(arr)