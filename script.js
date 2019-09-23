console.log("Hello world");

var a=10;
var b="moshi";
var c=true;
var d=null;

var e;
console.log(e);
console.log(g);

//hoisting


if(true){
    var x="Chicago";
    console.log("TCL: y",x);
}
console.log(x);

if(true){
    let y="Chicago";
    console.log("TCL: y",y);
}
console.log(y)



let empobj={
    name:"tom",
    ssn=12345
};

function getSum(a,b){
    return a+b;
}
let sum=getSum(10,20);
console.log("TCL:sum",sum);

//annoymous function
let getProduct=function(a,b){
    return a*b;
}
let getProductCopy=(a,b)=>{
    return a*b;
}
let product=getProduct(1,3);
console.log("product: ",product);


let message="good";
function printMessage(){
    let messageCopy="Bad";
    console.log("",messageCopy);
    function printText(){
        console.log(messageCopy);
    }
    printText();
}

function greetPeople(firstName){
    var greetingMsg="Good day";
    function partOfDay(){
        return greetingMsg+" "+firstName;
    }
    return partOfDay;
}
let x=greetPeople('John');
console.log("dd",x);


let z={
    name:'Albert',
    age:30,
    address:[
        {
            street: 123,
            city: 'chicago'
        },
        {
            street:456,
            city:"New York"
        }
    ],
    phone:{home:123,cell:424},
    Citizen:false
};
console.log(z.name);
console.log(z['name']);
console.log(z.address[1]['city']);
console.log(z['phone']['cell']);
Object.keys(Object.keys(z));
for(var z1 in z){
    console.log("z1: ",z1);
}
console.log(Object.values(z));
for(var z1 of z['address']){
    console.log("z2: ",z2);
}
z['address'].forEach(element=>{
    console.log("element",element);
});

let arr=[1,2,3,4];
console.log("Type: ",typeof arr);
console.log(Object.prototype.toString.call(z['address']));
let dateCopy=new Date();
console.log(typeof dateCopy);



//DOM
<class> name="message</class>"
var para=document.querySelector('.message').innerHTML;
console.log("para",para);
var c=document.getElementsByClassName('message');



//events
//call back function
//pass as a parameter to another function
let button=document.getElementsByClassName('button')[0];
button.addEventListener('click',function(){
    console.log('You clicked button')
})
button.addEventListener('click',printMessage);
function printMessage(){
    console.log('button clicked');
}

for(let i=0;i<document.getElementsByTagName('li').length;i++){
    document.getElementsByTagName('li')[i].addEventListener('click',()=>{
        console.log('You clicked!');
        console.log(document.getElementsByTagName('li')[i].innerHTML);
    })
} 

//event delegation
document.querySelector('ul').addEventListener('click',function($event){
    console.log("You clicked the li");
    console.log($event.target);
    console.log($event.target.innerHTML);
    $event.stopPropagation();
})

//event bubbling child-parent
//event capturing parent-child


function gotoPage($event){
    $event.preventDefault();
    console.log("gotopage");
}

document.querySelector('.five').addEventListener('click')

$('#exampleInputPassword1').on('keyup')

$.validator.addMethod("pwdValiatorCheck",function(value){
    return /^  /.test(value);
})

$('#myForm').validate({
    rules:{
        emial:{
            required:true
        },
        password:{
            required:true,
            pwdValiatorCheck:true
        }
    }
    ,
    message:{
        emial:{
            required:'Email required'
        },
        password:{
            required:'Password required',
            pwdValiatorCheck:"Please input minimum one upper case,lower case,one number"
        }
    },
    submitHandler:function(){
        event.preventDefault();
        let emial=$('#exampleInputEmail').val();
        let password=$('#exampleInputPassword1').val();

        let loginDetails={
            'emailValue':email,
            'passwordValue':password
        }

        $.ajax({
            type:'post',
            url:'/.login',
            data:loginDetails,
            contentType:'application/json',
            success:function(){
                console.log("err",err)
            },
            error:function(){
                
            }
        })
    }
})

//AJAX-asychronized Javascript and XML
//JSON


$('button').on('click',()=>{
    getDogBreeds();
})

function  getDogBreeds(){
    $.ajax({
        type:'get',
        url:'https://dog.ceo/api/breeds/list/all',
        success:function(res){
        console.log("TCL: res", res)
    
         
        },
        error: function(err){
        console.log("TCL: err", err)
    
        }
    })
    
}



