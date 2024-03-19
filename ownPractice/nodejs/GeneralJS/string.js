let a="abcde"

console.log(a[0]);
console.log(a[1]);
console.log(a[2])
console.log(a[3]);
console.log(a[4])

console.log(a.length)

let real_name="harry";
let friend="rohan";

console.log("his name is "+real_name + "and his friend name is "+ friend);

//templete literate use backtics insted of quots to define a string
//when we can insert variable in templete literal this is called string interpolation
console.log(`his name is ${real_name} and his friend name is ${friend}`);


// escape sequence character (\) ex. \n, \t ,\r

let aa="adha\'sdf"

console.log(aa)

let b="shivam"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)

//it extract string between given index
console.log(b.slice(1,4)) //it give output from index 1 to 4
console.log(b.slice(1)) // it give output from index 1 to last

// it replace the character if two similer are present then only first can replace
console.log(b.replace("sh","77"))

// merge string in one
// we can use (+) operator for concat the string 
console.log(b.concat(a))
console.log(b.concat(a ,"Aishwariya" , "rahul", "priya"))


let bb="             hasds"
console.log(bb)
console.log(bb.trim()) // it remove white space

console.log(b.startsWith("sh"))
console.log(b.endsWith("m")) // it return true or false

console.log(b.indexOf("am")) // if string present return index otherwise return -1
