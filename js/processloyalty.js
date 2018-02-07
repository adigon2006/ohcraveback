// JavaScript Document
// JavaScript Document

$(document).ready(function(e) {



$('form').submit(function(e) {

e.preventDefault();    



amount = $('#amount').val(); 
points = $('#points').val();
id = $('#id').val();


if(amount == "")

{
$('#displaymsg').show();
realmsg = 'Enter Amount.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(points == "")

{
$('#displaymsg').show();
realmsg = 'Enter points.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else

{

$.post('../snippets/processloyalty.php',{'id':id,'amount':amount,'points':points},function(data)

{

$('#displaymsg').show();	

msg = '<div class="alert alert-success"><button class="close" data-close="alert"></button>'+data+'</div>'

$('#displaymsg').html(msg);	

$('input[type=text]').val('');


});

}

});    

});