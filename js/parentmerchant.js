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







name = $('#name').val(); 

address = $('#address').val();

latitude = $('#latitude').val();

longitude = $('#longitude').val();

parentmerchant = $('#parentmerchant').val();



if(name == "")



{

$('#displaymsg').show();

realmsg = 'Enter Store Name.'	

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



else if(parentmerchant == "")



{

$('#displaymsg').show();

realmsg = 'Enter Address.'	

msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';

$('#displaymsg').html(msg);		

}



else



{



$.post('../snippets/processstore.php',{'name':name,'latitude':latitude,'longitude':longitude,'parentmerchant':parentmerchant,'address':address},function(data)



{



$('#displaymsg').show();	



msg = '<div class="alert alert-success"><button class="close" data-close="alert"></button>'+"Store Added Successfully"+'</div>'



$('#displaymsg').html(msg);	



$('input[type=text]').val('');





});



}



});    



});