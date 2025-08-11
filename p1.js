//1
let rows=5;
let result='';
let cols=1;

for(let i=1;i<=rows;i++){
    for(let j=1;j<=cols;j++){
        result+='*';
    }
    result+='\n';
    cols+=2;
}
console.log(result);

//2
let rows1=5;
let result1='';
let cols1=rows1*2-1;

for(let i=1;i<=rows1;i++){
    for(let j=1;j<=cols1;j++){
        result1+='*';
    }
    result1+='\n';
    cols1-=2;
}
console.log(result1);

//3.
let rows2=5;
let result2='';
let cols2=1;
for(let i=1;i<=rows2;i++){
    for(let spaces=1;spaces<rows2-i;spaces++){
        result2+=' ';
    }
    for(let j=1;j<=cols2;j++){
        result2+='*';
    }
    cols2+=1;
    result2+='\n';
}
console.log(result2);

//4.
let rows3=5;
let result3='';
let cols3=rows3*2-1;
for(let i=1;i<=rows3;i++){
    for(let spaces2=1;spaces2<rows3-i;spaces2++){
        result2+='';
    }
    for(let j=1;j<=cols3;j++){
        result3+='*';
    }
    cols3-=2;
    result3+='\n';
}
console.log(result3);

//5.
let rows4 = 5;
let result4 = '';
let cols4 = rows4 * 2 - 1;

for (let i = 1; i <= rows4; i++) {
    // extra spaces at start
    for (let spaces4 = 1; spaces4 <= i; spaces4++) {
        result4 += ' ';
    }
    // stars
    for (let j = 1; j <= cols4; j++) {
        result4 += '*';
    }
    result4 += '\n';
    cols4 -= 2;
}

console.log(result4);

//6.
let rows5 = 5;
let result5 = '';
let cols5 = 1;
for (let i = 1; i <= rows4; i++) {
    // extra spaces at start
    for (let spaces4 = 1; spaces4 <= rows-i; spaces4++) {
        result4 += ' ';
    }
    // stars
    for (let j = 1; j <= cols4; j++) {
        result4 += '*';
    }
    result4 += '\n';
    cols4 += 2;
}
console.log(result4);

//7.
let rows7 = 5;
let result7 = '';
let cols7 = 1;

// Top half
for (let i = 1; i <= rows7; i++) {
    for (let spaces7 = 1; spaces7 <= rows7 - i; spaces7++) {
        result7 += ' ';
    }
    for (let j = 1; j <= cols7; j++) {
        result7 += '*';
    }
    result7 += '\n';
    cols7 += 2;
}

// Bottom half
cols7 -= 4; // adjust for middle row
for (let i = rows7 - 1; i >= 1; i--) {
    for (let spaces7 = 1; spaces7 <= rows7 - i; spaces7++) {
        result7 += ' ';
    }
    for (let j = 1; j <= cols7; j++) {
        result7 += '*';
    }
    result7 += '\n';
    cols7 -= 2;
}

console.log(result7);
