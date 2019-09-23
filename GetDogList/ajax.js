let animalList;


$('.btn').click(()=>{
    $.ajax({
        type:'get',
        url:'https://dog.ceo/api/breeds/list/all',
        datatype:'json',
        success:function(data){
            //console.log("data: ",data);
            animalList=data['message'];
            //console.log("AnimalList: ",animalList);
           
            //console.log("Keys of AnimalList: ",Object.keys(animalList));
            
            $.each(animalList,function(index,value){
                
                //console.log("index: ",index);
                $('#result').append('<li>'+index+'</li>');
            });
            
        },
        error:function(err){
            console.log("ERROR: ",err);
        }
        
    })
});



/*
<ul>
    <li>First bullet point</li>
    <li>Second bullet point</li>
    <li>Third bullet point</li>
</ul>
*/