// JavaScript Document
// JavaScript Document

$(document).ready(function(e) {

$('form').submit(function(e) {
e.preventDefault(); 
 // end of view

$('.delete').each(function(index, element) {
		
$(this).click(function(e) {
id = $('.idall:eq('+index+')').val(); 
$.post('../delete/deletebankadmin.php',{'id':id},function(data)
{
location = '../bankadmins';  
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



 