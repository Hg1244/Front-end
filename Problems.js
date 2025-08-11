//duplicate
let number=[1,2,4,5,2,1,2]
let obj={ };
for(let num  of number){
 if(!obj[num]){
    obj[num]=1;
 }else{
    obj[num]++;
 }
 }
 for(let a1 in obj){
    if(obj[a1]>1){
        console.log("Duplicate number:"+a1);
    } else if(obj[a1]==1){
            console.log("unique number:"+a1);  //unique
    } 
}
 
// console.log("Duplicates:",obj);

//second largest
let numbers=[1,2,3,4,5,1,2,7,6];
let largest=0;
let secondlargest=0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>largest){
        secondlargest=largest;
        largest=numbers[i];
    } else if(numbers[i]>secondlargest && numbers[i]!==largest){
        secondlargest=numbers[i];
    }
}
console.log("largest:"+largest);
console.log("secondlargest:"+secondlargest);