// JavaScript Document

$(document).ready(function(e) {





$('#mail1').submit(function(e) {

e.preventDefault();


$('#displaymsg2').hide();
function showLoader()

{

$('.search-background').fadeIn(200);

}

//hide loading bar

function hideLoader(){

$('.search-background').fadeOut(200);

}



subject = $('#subject').val();

message = $('.mymessage').code();

group = $('#group').val();

if(subject == "" )

{

$('#displaymsg').show();
realmsg = 'Please Enter Subject.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		

}
else if(group == "")
{
$('#displaymsg').show();
realmsg = 'Please Select Group.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(message == "")
{
$('#displaymsg').show();
realmsg = 'Please Enter Message.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);	
	
}

else

{

showLoader();	

$.post('../snippets/sendbulkmail.php',{'subject':subject,'message':message,'group':group},function(data)

{

hideLoader();	

$('#displaymsg').show();	

msg = '<div class="alert alert-success"><button class="close" data-close="alert"></button>'+data+'</div>'

$('#displaymsg').html(msg);		

$('input[type=text]').val("");

$('select').val("");

$('.mymessage').code("");

//setInterval(function(){$('#displaymsg').hide();},8000);	

});	

}

});    




$('#mail2').submit(function(e) {

e.preventDefault();

$('#displaymsg').hide();
function showLoader()

{

$('.search-background').fadeIn(200);

}

//hide loading bar

function hideLoader(){

$('.search-background').fadeOut(200);

}



subject = $('#subject2').val();

message = $('.mymessage2').val();

//messagecheck = $('.mymessage2').empty();

to = $('#to').val();

if(subject == "" )

{

$('#displaymsg2').show();
realmsg = 'Please Enter Subject.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg2').html(msg);		

}
else if(to == "")
{
$('#displaymsg2').show();
realmsg = 'Enter the email you sending to.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg2').html(msg);		
}
else if(message == "")
{
$('#displaymsg2').show();
realmsg = 'Please Enter Message.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg2').html(msg);	
	
}

else

{

showLoader();	

$.post('../snippets/sendsinglemail.php',{'subject':subject,'message':message,'to':to},function(data)

{

hideLoader();	

$('#displaymsg2').show();	

msg = '<div class="alert alert-success"><button class="close" data-close="alert"></button>'+data+'</div>'

$('#displaymsg2').html(msg);		

$('input[type=text]').val("");

$('input[type=email]').val("");

$('.mymessage2').val("");

//setInterval(function(){$('#displaymsg').hide();},8000);	

});	

}

});  








    

});