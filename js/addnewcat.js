// JavaScript Document

$(document).ready(function(e) {



$('form').submit(function(e) {

e.preventDefault();    



category = $('#category').val(); 



if(category == "")

{
$('#displaymsg').show();
realmsg = 'Enter a Category Name.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else

{

$.post('../snippets/processcat.php',{'category':category},function(data)

{

$('#displaymsg').show();	

msg = '<div class="alert alert-success"><button class="close" data-close="alert"></button>'+data+'</div>'

$('#displaymsg').html(msg);	

$('input[type=text]').val('');


});

}

});    

});