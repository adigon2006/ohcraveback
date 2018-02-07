// JavaScript Document

// JavaScript Document

$(document).ready(function(e) {


$('form').submit(function(e) {

e.preventDefault();    



firstname = $('#firstname').val();

lastname = $('#lastname').val();

gender = $('#gender').val();

mobileno = $('#mobileno').val();

address1 = $('#address1').val();

email = $('#email').val();

username = $('#username').val();

password = $('#password').val();

cpassword = $('#cpassword').val();

state = $('#state').val();

country = $('#country').val();

zipcode = $('#zipcode').val();

                        

/*if(firstname == "" || lastname == "" || gender == "" || mobileno == "" || address1 == "" || loc == "" || username == "" || password == "" || state == "" || country == "" || email == "" )

{

// do nothing

$('#displaymsg').show();	

$('#displaymsg').addClass('text-danger');	

$('#displaymsg').html("All fields required");	

setInterval(function(){$('#displaymsg').hide();},4000);	

}*/
if(firstname == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Firstname.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(lastname == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Lastname.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(gender == "" )
{
$('#displaymsg').show();
realmsg = 'Please Select Gender.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(mobileno == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Mobile No.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(address1 == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Address1.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(state == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter State.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(country == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Country.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(email == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Email.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(username == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Username.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(password == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Password.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(cpassword == "" )
{
$('#displaymsg').show();
realmsg = 'Please Confirm Password.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(password != cpassword)
{
$('#displaymsg').show();
realmsg = 'Password Mismatch.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);	
}

else
{



$.post('../snippets/processcus.php',{'firstname':firstname,'lastname':lastname,'gender':gender,'mobileno':mobileno,'address1':address1,'email':email,'username':username,'password':password,'state':state,'country':country,'zipcode':zipcode},function(data){

if( data == "emailfound")
{
$('#displaymsg').show();	
realmsg = "Email Already Exists";
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if( data === 'usernamefound')
{
$('#displaymsg').show();	
realmsg = "Username Already Exists";
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else 
{
$('#displaymsg').show();	
msg = '<div class="alert alert-success"><button class="close" data-close="alert"></button>'+data+'</div>'
$('#displaymsg').html(msg);	
$('input[type=text]').val('');
$('input[type=email]').val('');
$('input[type=password]').val('');
$('select').val('');
}
});	

}

});    

});