// JavaScript Document
$(document).ready(function(e) {

$('form').submit(function(e) {
e.preventDefault();
$('#displaymsg').hide();
from = $('#from').val(); 
to = $('#to').val(); 


if(from == "")
{
$('#displaymsg').show();
realmsg = 'Select a start date.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
} 
else if(to == "")
{
$('#displaymsg').show();
realmsg = 'Select an End date.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}  
else if(from > to)
{
$('#displaymsg').show();
realmsg = 'Invalid Date Range.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
} 
else
{
datefrom = from.split('/');
newfrom = datefrom[2]+'-'+datefrom[0]+'-'+datefrom[1];

dateto = to.split('/');
newto = dateto[2]+'-'+dateto[0]+'-'+dateto[1];	
$('#displaymsg').hide();
$.post('../snippets/merchantlogs.php',{'from':newfrom,'to':newto},function(data)
{	
$('#report').html(data);	
});
	
}
});
    
});