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
let annoymous1=coffee1('strong');
console.log("annoymous",annoymous1);
let coffee2=(x)=>{
    return x+' '+'coffee';
}
//template literal strings
let coffee3=(x)=>{
    //` backtick
    return `Have a ${x} coffee`;
}
let annoymous3=coffee3('cool');
console.log(annoymous3);

//3.    class
class Student{
    constructor(name,ssn){
        this.name=name;
        this.ssn=ssn;
    }
}
let stu=new Student('moshi',3241);

//4.    spread operator
var trainee=['moshi','kael','kaig','chen'];
var traineeCopy=['George',...trainee,'Albert'];
console.log("LIST: ",traineeCopy);

//shadow copy and deep copy
let employee=[['John',30],['Gret',20]];
let employeeCopy=[...employee];//shadow copy
console.log("employeeCopy: ",employeeCopy);
employeeCopy[0][0]='John Abraham';
console.log("e",employeeCopy);
console.log('Employee',employee);
//deep copy
let employeeDeepcopy=JSON.parse(JSON.stringify(employee));
employeeDeepcopy[0][0]="John Abarham";
console.log("ORIGIN",employee);
console.log("DEEP COPY",employeeDeepcopy);
var animal={
    name:'Giraffle',
    age:10
}
var animalCopy={...animal};
console.log("Animal Copy",animalCopy);
animalCopy.name="Long Giraffle";
console.log("Animal Copy:",animalCopy);
console.log(animal);
var animalTwo={
    name:'Lion',
    livesin:{
        placeOne:"Forest",
        placeTwo:"cage"
    }
}
//shadow copy
var animalTwoCopy={...animalTwo};
console.log("AnimalTwo copy: ",animalTwoCopy);
console.log("AnimalTwo",animalTwo);
//shadow copy
var animalTwoCopy=JSON.parse(JSON.stringify(animalTwo));
animalTwoCopy['livesin']['placeOne']='Wooden Cage';
console.log("AnimalCopy",animalTwoCopy);
console.log("original",animalTwo);
//JSON
console.log(JSON.stringify(animalTwo));


//local,global,lexical scope
function getDetail(){
    //lexical scope
    let name='John';

    function getAddress(){
        let city='chicago';
        console.log(name);
    }
    getAddress();
    console.log(city);
}
//getDetail();

//closures
function getName(){
    let name="moshi";
    return function(){
        console.log(name);
    }
}
console.log(getName());
let nameCopy=getName();
nameCopy();


//API 
document.querySelector('.signin');
var signInbutton=document.getElementsByClassName('signin');
console.log("signInbutton",signInbutton);
var characters=document.querySelector('#characters');
console.log("characters",characters);


/*
document.getElementsByClassName('signin')[0].addEventListener('click',()=>{
    console.log("You clicked");
})
*/
/*
var el=document.getElementsByClassName('signin');
if(el){
    el.addEventListener('click',swapper,false);
}*/


document.getElementsByClassName('signin')[0].addEventListener('click',function(){
    console.log('You clicked the signin function')
    var characters=console.log(document.getElementsByClassName('signin'));
    console.log(characters.innerHTML);
    characters.innerHTML='KKK';
    var para=document.createElement('p');
    para.innerHTML="Star Wars";
    document.getElementsByTagName('headerOne').appendChild(para);
    console.log(document.getElementsByTagName('ul'));
    //document append
    //document.getElementsByTagName('ul')[0].appendChild();
})

//callback function





//HW create table using javascript
let emp=[
    {
        Name:'Tom',
        Age:35,
        City:'Chicago'
    },
    {
        Name:'John',
        Age:30,
        City:'New York'
    },
    {
        Name:'Ronald',
        Age:31,
        City:'Austria'
    },
    {
        Name:'Enice',
        Age:29,
        City:'London'
    },
    {
        Name:'David',
        Age:36,
        City:'Miami'
    }
]

//event propagation

//event bubbling/event capturing
console.log(document.querySelector('Ul'));

document.querySelector('Ul').addEventListener('click',($event)=>{
    console.log($event);
    console.log(`You clicked ${$event.target.innerHTML}`);
})
document.querySelector('miami').addEventListener('click',($event)=>{
    $event.stopPropagation();
    $event.stopImmediatePropagation();
})


for(var i=0;i<document.querySelectorAll('li').length;i++){
    document.querySelectorAll('li')[i].addEventListener('click',($event)=>{
        console.log(`You clicked list items`);
    })
}

//$event.preventDefault
document.querySelector('.googleref').addEventListener('click',($event)=>{
 
    $event.preventDefault();
    console.log('you clicked the anchor')
 })
