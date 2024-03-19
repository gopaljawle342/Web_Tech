console.log("ABC is here");

//this can target by using class name

// let bhup=document.getElementsByClassName("box");
// console.log(bhup);

// bhup[2].style.backgroundColor="red";
// bhup[4].style.backgroundColor="green";


//this can target by using id name
// document.getElementById("redbox").style.backgroundColor ="red";


//this target the first match element 
// we can add inline css by using js by this way
// document.querySelector(".box").style.backgroundColor ="green";

//this return the html collection mean it return the node list
console.log(document.querySelectorAll(".box"));


// document.querySelectorAll(".box").style.backgroundColor="red";  //this generate erroe because its a collection and we cannot perform style in collection .

// for above erroe we can solve by using for each
//mean we can add style to each element of html collection by using fetching each element by for loop
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="green";
})

// it can target element by tagname and  it return html collection 
console.log(document.getElementsByTagName("div"));

e=document.getElementsByTagName("div");
let c=e[3].matches("#redbox"); //  its matches with css if matched return true otherwise false
console.log(c);

c=e[4].closest("#redbox"); // it check with closest matches element by css selector
console.log(c);

console.log(document.querySelector("div").contains(e[2])); // it check the element contain in that specific element if contains return true otherwise false
console.log(document.querySelector("body").contains(document.querySelector(".container")));
