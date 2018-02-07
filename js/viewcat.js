// JavaScript Document

$(document).ready(function(e) {



$('form').submit(function(e) {
e.preventDefault(); 


$('.delete').each(function(index, element) {
		
$(this).click(function(e) {
id = $('.idall:eq('+index+')').val(); 
$.post('../delete/deletecat.php',{'id':id},function(data)
{
location = '../campaigncategory';  
});
 
});
    
}); // end of delete
    

$('.edit').each(function(index, element) {
		
$(this).click(function(e) {
id = $('.idall:eq('+index+')').val(); 

location = 'edit.php?id='+id;  

 
});
    
});
	
	
});    
});



 