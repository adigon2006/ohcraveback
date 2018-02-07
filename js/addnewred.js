// JavaScript Document
// JavaScript Document
$(document).ready(function(e) {

$('form').submit(function(e) {
e.preventDefault();
name = $('#name').val();
state = $('#state').val();
loc = $('#location').val();
city = $('#city').val();
zipcode = $('#zipcode').val();
//cpassword = $('#cpassword').val();

if(name == "" || state == "" || loc == "" || city == "" || zipcode == "" )
{
$('#displaymsg').show();	
$('#displaymsg').addClass('text-danger');	
$('#displaymsg').html("All fields required");	
setInterval(function(){$('#displaymsg').hide();},4000);	
}
else
{
$.post('../snippets/processred.php',{'name':name,'state':state,'loc':loc,'city':city,'zipcode':zipcode},function(data)
{
$('#displaymsg').show();	
$('#displaymsg').addClass('text-success');	
$('#displaymsg').html(data);	
$('input[type=text]').val('');
$('input[type=password]').val('');
setInterval(function(){$('#displaymsg').hide();},3000);

});
}

});


    
});