//$--->jQuery

//1
$(".signin").on('click',()=>{
    console.log('You clicked the button');
})
//2
$(".signin").click(()=>{
    alert('You clicked the button');
});

$(".name").keyup(($event)=>{
    console.log('You clicked the button',event);
})


$("<p>StarWars</p>").insertBefore(".name");


