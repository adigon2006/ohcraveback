// JavaScript Document

// JavaScript Document

$(document).ready(function(e) {


$('form').submit(function(e) {

e.preventDefault();    





oldpassword = $('#oldpassword').val();

password = $('#password').val();

cpassword = $('#cpassword').val();

                        
if(oldpassword == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Old Password.'	
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



$.post('../snippets/processchangepass.php',{'oldpassword':oldpassword,'password':password},function(data){

	
if(data == "Invalid Old Password")
{
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+data+'</div>';
$('#displaymsg').html(msg);		
}
else
{
$('#displaymsg').show();	

msg = '<div class="alert alert-success"><button class="close" data-close="alert"></button>'+data+'</div>'

$('#displaymsg').html(msg);	

$('input[type=password]').val('');
}

});	

}







});    

});