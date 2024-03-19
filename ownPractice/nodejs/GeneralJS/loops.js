console.log("its a loop tutorial");

// 5 types of loops in js

// for
//forin
//forof
//while
//do while


// basic for loop
// let a=1;
// for (let i = 0; i < 100; i++) {
//     console.log(a+i);
// }

let obj ={
    name: "abcd",
    role: "programmer",
    company: "xyz@company"

}

// forin loop for object data
for (const key in obj) {
   
        const element = obj[key];
        console.log(key,element)
}

//forof loop like a array print each character
for (const c of "Harry") {
    console.log(c)
}

// let i=0;
// while(i<6){
//     console.log(i);
//     i++;
// }



let i=10;
do{
    console.log(i);
    i++;
}while(i<6)