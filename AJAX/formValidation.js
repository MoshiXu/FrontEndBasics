$.validator.addMethod('alphanumeric',(value)=>{
return /^[a-z0-9]+$/i.test(value);
},'Username can take only letters and numbers');

$.validator.addMethod('pwdValidator',(value)=>{
   return  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/i.test(value);
},'Please  enter minimum 5 characters,one number,one lowecase alphabet,one upper case,one special char');


$('#register-form').validate({
    rules:{
       username:{
           required:true,
           alphanumeric:true
       } ,
       password:{
        required:true,
        pwdValidator:true
       }
    },
    messages:{
        username:{
            required:'Username is a required field',
            alphanumeric:'Username can take only letters and numbers'
        } ,
        password:{
            required:'Password is a required field',
            pwdValidator:'Please  enter minimum 5 characters,one number,one lowecase alphabet,one upper case,one special char'
        }
    },

    submitHandler:function(){
        event.preventDefault();
        let uname=$('#username').val();
        let pwd=$('#password').val();
        console.log(uname,pwd);
        registerCredentials={
            'username':uname,
            'password':pwd
        }

        $.ajax({
            type:'post',
            url:'registeruser.php',
            data:registerCredentials,
            datatype:'json',
            contentType:'application/json',
            success:function(data){
                console.log("TCL: data", data)
            },
            error:function(err){
                console.log("TCL: err", err)
            }
        })
    }

})

//http get call,post call,put call ,delete call]