//operators
let a=5;
a++ +a;
console.log(a);  //unary
let c=1
++c //pre increment
console.log(c)
let a1=9;
a1--
console.log(a1); //pre decrement
let b=10;
--b
console.log(b)  //post descrement
//Arithmetic operator
console.log("7"*"2");  //14
console.log("7"*7); //49
console.log(7/0); //infinity
console.log("7 ."*false) //nan
console.log(9/undefined);//nan
console.log("8"*null) //0
console.log("9"*undefined) //nan
console.log(9+null) //9
console.log(0.1+0.4);//0.5
console.log(0.3+0.08); //0.38
console.log(0.1+null)
console.log(7*"9")
console.log(undefined+9) //nan
console.log("8"/null) //infinity
 //non primitive
 console.log([1,3]+[3,6])
 console.log([1,5]*[5,9])  //nan
console.log([1,5]/[5,9])  //nan
console.log([1,5]-[5,9])  //nan
console.log([1,5]%[5,9])  //nan
//relational operator
console.log(6>8);
console.log(9>8);
console.log("7"=="7"); //true
console.log("7"==8) //false
console.log("7"==7)
console.log(4!="4");
console.log(4!=4);
console.log("2">16)
console.log("d">b)
console.log("d">"b")
console.log("d">b)
console.log(null==undefined)
console.log(null>-1)
console.log([2,4]<[5,8])
console.log([0,4]>[11,8])
