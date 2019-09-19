var a="moshi";
a=123;
a=true;
a=[1,3,5];
a=[1,"moshi",true];





var student=[1,"moshi",true];
/*
console.log(student);
console.log(Object.prototype.toString.call(student));
console.log(typeof a2);
*/


var str='Chicago';
/*
console.log(str.toUpperCase());
console.log(str.substring(0,3));
console.log(str.indexOf('c'));
*/

var arr=[3,2,5,1];
arr.push(2);
//console.log(arr);

arr.pop();

arr.shift();
//console.log(arr);
arr.unshift();

arr.sort(function(x,y){
    return y=x;
})
console.log(arr);


console.log(arr.slice(1,3));

//diff btn undefined and notdefined
//undefined: var is declared but no value is assigned
//hoisting(moving to top)
console.log(z);
var z='dd';

//diff btwn == and ===
console.log(1=='1');
//coercion: convert data type

console.log(1==='1');
//won't apply coercion
//trible equals is suggested

//truthy falsy values
//undefined,null,0 --> falsy
console.log(false==0); //false by default is 0
console.log(true==1);
var q;//q is undefined
console.log('q value ',!!q);
if(!(!!q)){//doulbe egation variable
    console.log('q');
}
var p=123;//p is defined
console.log('p value',!!p);
if(!!p){
    console.log('p');
}


//es6 ---ecamscript-- standard body governs js
//new features of es6
let x2=3;
const x1='10';

function getResult(){
    var f=123;
    console.log(f);
}
getResult();
//console.log(f);

//1.    var and let
if(true){
    var g='Gira';
    console.log("d",g);
}
console.log("d",g);
if(true){
    let g='Gira';
    console.log("d",g);
}
console.log("d",g);

//arrow function
function getCoffee(){
    return 'coffee';
}
var result=getCoffee();

//2.    annoymous function
let coffee1=function(x){
    return 'coffee';
}
let annoymous=coffee1('strong');
console.log("annoymous",annoymous);
let coffee2=(x)=>{
    return x+' '+'coffee';
}
//template literal strings
let coffee3=(x)=>{
    return '$(x) coffee';
}

//3.    class
class Student{
    constructor(name,ssn){
        this.name=name;
        this.ssn=ssn;
    }
}
let stu=new Student('moshi',3241);

