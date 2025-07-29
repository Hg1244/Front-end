let b=[2,5,6,7,8,"abc",true,false,null,undefined]
console.log(b[2]);
b[3]=45
console.log(b[3])

b[2]=8;
console.log(b)

b[20]=67
console.log(b)

let c=b;
b[1]=18
console.log(b[1]);
console.log(c[1]);  //shallow copy

//object

let obj={name:"Divi",class:"front end"}
console.log(obj["class"])   //get

obj["name"]="nivi"        //updation
console.log(obj["name"])

obj["name1"]="gayu"
console.log(obj["name1"])  //add

let obj1=obj
obj["name"]="preethi"
console.log(obj)     //shallow copy object

Object.seal(obj) //seal can only update
obj.name="nivi"
obj.subject="js"
delete obj.class
console.log(obj)     

Object.freeze(obj)  //can only read

obj.class="java"   //add
console.log(obj)

// obj1[null]="testing"
// console.log(obj)
// obj1[undefined]="testing"
// console.log(obj)
