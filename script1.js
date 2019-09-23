
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

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }

