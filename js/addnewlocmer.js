// JavaScript Document
// JavaScript Document
// JavaScript Document

// JavaScript Document

// JavaScript Document

$(document).ready(function(e) {


$('#getgps').click(function(e) {

address = $('#address').val();
if(address == "")
{
$('#displaymsg').show();

realmsg = 'Enter Address.'	

msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';

$('#displaymsg').html(msg);		
}
else
{
$.get('../snippets/getgps.php',{'address':address},function(data)

{
	
str = data.split(',')
$('#latitude').val(str[0]);
$('#longitude').val(str[1]);
});	
}
});


$('form').submit(function(e) {

e.preventDefault();    



firstname = $('#firstname').val();

lastname = $('#lastname').val();

mobileno = $('#mobileno').val();

address = $('#address').val();

latitude = $('#latitude').val();

longitude = $('#longitude').val();

parentmerchant = $('#parentmerchant').val();

email = $('#email').val();

username = $('#username').val();

password = $('#password').val();

cpassword = $('#cpassword').val();


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


else if(mobileno == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Mobile No.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(address == "")



{

$('#displaymsg').show();

realmsg = 'Enter Address.'	

msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';

$('#displaymsg').html(msg);		

}



else if(latitude == "")



{

$('#displaymsg').show();

realmsg = 'Enter Correct Address e.g Location and State'	

msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';

$('#displaymsg').html(msg);		

}



else if(longitude == "")



{

$('#displaymsg').show();

realmsg = 'Enter Correct Address e.g Location and State.'	

msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';

$('#displaymsg').html(msg);		

}




else if(parentmerchant == "" )
{
$('#displaymsg').show();
realmsg = 'Please Select Parent Merchant.'	
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



$.post('../snippets/processlocmer.php',{'firstname':firstname,'lastname':lastname,'mobileno':mobileno,'parentmerchant':parentmerchant,'email':email,'username':username,'password':password,'latitude':latitude,'longitude':longitude,'address':address},function(data){

	
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


/*$('#merchantcsv').submit(function(e) {
e.preventDefault();
$('.progress').show();
csv = $('input[type=file]').val();
$.post('processcsv.php',{'csv':csv},function(data){
	$('.progress-bar').html(csv);
	});    
});*/

});