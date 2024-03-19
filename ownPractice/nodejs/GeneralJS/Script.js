console.log("this is first programm of js")

var a=5;
var b=6;
var c="abc";   // var is global scope
                // let is block scope
                // const is constant
const d=14;
// let a=5;

{
    let a=66;
    console.log(a)       //console.log for print output
}
console.log(a)

// console.log(a+b)
// console.log(typeof a,typeof b,typeof c)


let x="abcd efgh";
let y=22;
let z=3.44;
const p=true;
let q=undefined;
let r=null;

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)
// null typeof is object 



// object creation
let o = {
    "name":"abcd",
    "job code":4000

    // name is key and abcd is value
    // job code is key and 4000 is value
    // if variable have space so use double quoat for that variable
}

console.log(o)
o.salary = "100crores"  // add key in object
console.log(o)

let ab="abcd";
ab=ab+123;   // it add in string
ab=ab+"efgh"; // it add in string

console.log("type of ab="+typeof ab,ab);


let dis ={
    "I":"me",
    "my":"myself",
    "you":"yourself"
}
console.log(dis);

const constant ={
    cc:"abcd",
    dd:123,
    ee:true

}

console.log(constant);

// cc=cc+123;   // cc can not be change because of it const 
// console.log(constant);  // it generate error