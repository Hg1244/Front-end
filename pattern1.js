//  let rows=9;
//  let result=' ';

// for(let i=1;i<=rows;i++){
//     for(let spaces=1;spaces<=rows-i;spaces++){
//         result+=' ';
// }
// for(let j=1;j<=i;j++){
//     result+='*'+' ';
// }
// result+='\n';
// }
// console.log(result);

// let rows=9;
// let result='';
// let cols=1;
// let num=1
// let spaces=1;

// for (let i=1;i<=rows;i++){
//         //spaces
//     for(let spaces=1;spaces<=rows-i;spaces++){
//         result+=' ';
//         }
//      for(let j=1;j<=cols;j++){
//          result+=j +' ';
//      }
//           result+='\n';
//      cols+=2;
//  }
//  console.log(result);


// let rows = 9;
// let result = '';
// let num=1;

// for (let i = 1; i <= rows; i++) {
//     // spaces before numbers
//     for (let space = 1; space <= rows; space++) {
//         result += ' ';
//     }
//     // numbers in each row (repeated i)
//     for (let j = 1; j <= i; j++) {
//         result += i+ ' ';
//     }
//     result += '\n';
// }
// console.log(result);


// let rows=5;
// let result='';
// let cols=rows*1-1;

// for(let i=0;i<=rows;i++){
//     for(let j=0;j<=cols;j++){
//        result+='*'; 
//     }

//     result+='\n';
//     cols-=1;   
// }
// console.log(result);





// let rows = 5;
// let result = '';

// for (let i = rows; i >= 1; i--) {  //here i decrease i = 5 → 4 → 3 → 2 → 1

//     for (let space = 1; space <= rows - i; space++) {
//         result += ' ';
//     }

//     for (let j = 1; j <= i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result);

let rows = 5;
let result = '';
let cols=rows*2-1;
for (let i = 1; i <= rows; i++) {
    // print spaces
    for(let space=1;space<i;space++){  //space <i want the first row to start without any space 
        result+=' ';
    }
    // print stars
    for (let j = 1; j <= cols; j++) {  
        result += '*';
    }
    result += '\n';
    cols-=2;   
}
console.log(result);


