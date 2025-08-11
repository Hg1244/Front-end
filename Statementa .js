if(""){
    console.log("True");
} else{
    console.log("False");
}

if("hi"){
    console.log("True");
} else{
    console.log("False");
}

if(null){
    console.log("True");
} else{
    console.log("False");
}

if(undefined){
    console.log("True");
} else{
    console.log("False");
}

if(0){
    console.log("True");
} else{
    console.log("False");
}

if("0"){
    console.log("True");
} else{
    console.log("False");
}

if (true) {
  console.log("IF block runs");
} else {
  console.log("ELSE block runs");
}

let marks = 85;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

let age = 20;
let varmark = 100;
if (age >= 18) {
    if ( varmark >= 80) {
        console.log("Eligible for scholarship");
    } else {
        console.log("Not enough marks to be eligible for scholarship");
    }
} else {
    console.log("Too young to apply");
}
//for loop
for(let i=0;i<6;i++){
    console.log("Iteration: "+i)
}
for(let i=0;i<6;i+=3){
    console.log("Iterate: "+i)
}

let a=[1,2,3,4,5];
for(let i=0;i<5;i++){
    console.log("ITER:"+ a[i]);
}

let i=0;
while(i<a.length){
    console.log("Array element:"+a[i]);
    i++;
}

 i=0;
do{
    console.log("Do while element:"+a[i]);
    i++;
}while(i<a.length)
    
//advanced for loop
for(let a1 of a){
    console.log("For Array element"+a1);
}
//advforloop with break
let object={a:1,b:3,c:5};
for(let a1 of a ){
    if(a1==2){
        break;
    }
    console.log("Array element:"+a1);
}
//object
let student={
    name:"kavya",
    age:3,
    class:"pre-kg"
};
for(let key in student){
    console.log(key+":",student[key])
}
//continue
for (let i = 1; i <= 5; i++) {
    if (i == 4) {
        continue; // Skip the iteration when i is 4
    }
    console.log("i =", i);
}
//switch only break
let day=3
switch(day){
    case 1:
    console.log("ONE");
    break;
    case 2:
    console.log("TWO");
    break;
    case 3:
    console.log("THREE");
    break;
    case 4:
    console.log("FOUR");
    break;
    case 5:
    console.log("Five");
    break;
    default:
    console.log("Numbernames")
   }
