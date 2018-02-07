// JavaScript Document

$(document).ready(function(e) {



$('form').submit(function(e) {

e.preventDefault();    


$('#displaymsg').hide();
planname = $('#planname').val(); 
plantitle = $('#plantitle').val();
assignuser = $('#assignuser').val();

if(planname == "")
{
$('#displaymsg').show();
realmsg = 'Enter a Plan Name.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);	

}

else if(plantitle == "")
{
$('#displaymsg').show();
realmsg = 'Enter a Plan Title.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);	
}
else if(assignuser == "")
{
$('#displaymsg').show();
realmsg = 'Please assign a user.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);	
}

else

{

$.post('../snippets/processplan.php',{'planname':planname,'plantitle':plantitle,'assignuser':assignuser},function(data)

{

$('#displaymsg').show();	

msg = '<div class="alert alert-success"><button class="close" data-close="alert"></button>'+data+'</div>'

$('#displaymsg').html(msg);		

$('input[type=text]').val('');
$('select').val();

});

}

});    

});