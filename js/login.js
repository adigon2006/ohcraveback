// JavaScript Document

$(document).ready(function(e) {


 jQuery('#forget-password').click(function() {
            jQuery('.login-form').hide();
            jQuery('.forget-form').show();
        });

        jQuery('#back-btn').click(function() {
            jQuery('.login-form').show();
            jQuery('.forget-form').hide();
        });
		
		  jQuery('#register-btn').click(function() {
            jQuery('.login-form').hide();
            jQuery('.register-form').show();
        });

        jQuery('#register-back-btn').click(function() {
            jQuery('.login-form').show();
            jQuery('.register-form').hide();
        });
		
		

$('.login-form').submit(function(e) {

e.preventDefault();



username = $('#username').val();

password = $('#password').val();

if(username == "" )
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

else

{

$.post('snippets/processlogin.php',{'username':username,'password':password},function(data)

{

if(data == 'notfound')

{	


$('#displaymsg').show();
realmsg = 'Username or Password Incorrect'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);	


}

else if(data == 'found')

{

location = 'dashboard';	

}



});

	

}

    

});



    

});