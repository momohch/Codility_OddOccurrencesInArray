// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
/* 55%
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    for(var i = 0; i < A.length; i++){
        var a = A[i];
        A.splice(i,1);
        if(!A.includes(a)){
            return a;}
        A.splice(i,0,a);
    }
}*/


//100%
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort();
    for(var i = 0; i < A.length; i+=2){
        if(A[i]!==A[i+1]){
            return A[i];
        }
    }
}
