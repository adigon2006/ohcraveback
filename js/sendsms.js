// JavaScript Document

// JavaScript Document

$(document).ready(function(e) {



amachar = 0;

page = 0;

$('.mymessage').keydown(function(e) {

if($('.mymessage').val() == "")
{
$('#charcount').html("");	
}
if(e.keyCode == 8 && amachar != 0)

{

amachar--;	

if(amachar == 159)

{

page--;	

$('#charcount').html('<span class="required">'+page+'/'+amachar+'</span>');  	

}

else if(amachar == 305)

{

page--;	

$('#charcount').html('<span class="required">'+page+'/'+amachar+'</span>');  	

}

else

{	

$('#charcount').html('<span class="required">'+page+'/'+amachar+'</span>');    

}

}

else if( (e.keyCode > 47 && e.keyCode <= 90)|| (e.keyCode == 32))

{

amachar++;

if(amachar == 160)

{

page++		

$('#charcount').html('<span class="required">'+page+'/'+amachar+'</span>');  	

}

else if(amachar == 306)

{

page++		

$('#charcount').html('<span class="required">'+page+'/'+amachar+'</span>');  	

}

else

{

$('#charcount').html(page+'/'+amachar);    

}

}

});



   

function presskey()

{

$('#subject').keypress(function(e) {

 $('#charcount').html(amachar);    

});

}



/*$('form').submit(function(e) {

e.preventDefault();

function showLoader()

{

$('.search-background').fadeIn(200);

}

//hide loading bar

function hideLoader(){

$('.search-background').fadeOut(200);

}



subject = $('#subject').val();

message = $('.memessage').val();

group = $('#group').val();



if(subject == "" || message == "" || group == "")

{

$('#displaymsg').show();	

$('#displaymsg').addClass('text-danger');	

$('#displaymsg').html("All field required");	

setInterval(function(){$('#displaymsg').hide();},3000);	

}

else

{

showLoader();	

$.post('../snippets/sendbulksms.php',{'subject':subject,'message':message,'group':group},function(data)

{

hideLoader();	

$('#displaymsg').show();	

$('#displaymsg').addClass('text-success');	

$('#displaymsg').html(data);	

$('input[type=text]').val("");

$('.memessage').val("");

setInterval(function(){$('#displaymsg').hide();},8000);	

});	

}

});   */ 
});


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

message = $('.mymessage').val();

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

$.post('../snippets/sendbulksms.php',{'subject':subject,'message':message,'group':group},function(data)

{

hideLoader();	

$('#displaymsg').show();	

msg = '<div class="alert alert-success"><button class="close" data-close="alert"></button>'+data+'</div>'

$('#displaymsg').html(msg);		

$('input[type=text]').val("");

$('select').val("");

$('.mymessage').val("");

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

message = $('#mymessage2').val();

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
realmsg = 'Enter the mobile no you are sending to.'	
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

$.post('../snippets/sendsinglesms.php',{'subject':subject,'message':message,'to':to},function(data)

{

hideLoader();	

$('#displaymsg2').show();	

msg = '<div class="alert alert-success"><button class="close" data-close="alert"></button>'+data+'</div>'

$('#displaymsg2').html(msg);		

$('input[type=text]').val("");

$('input[type=number]').val("");

$('#mymessage2').val("");

//setInterval(function(){$('#displaymsg').hide();},8000);	

});	

}

});  

    

});