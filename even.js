let rows=7;
let result=' ';
let cols=1;
let num=1;
for(let i=1; i<=rows; i++){
let num=1;
for(let s=1;s<=rows;s++){
    result+=' ';
}
for(let j=1; j<=cols; j++){
    result+=num++;
}
result+='\n';
cols+=2;
}
console.log(result);