// JavaScript Document

$(document).ready(function(e) {

$('form').submit(function(e) {
e.preventDefault(); 
$('.view').each(function(index, element) {

$(this).click(function(e) {
id = $('.idall:eq('+index+')').val(); 
$.post('../snippets/getlocmerdet.php',{'id':id},function(data)
{
$('.modal-body').html(data);  
$('.modal-title').html('Location Merchant\'s Details');
});
$(this).attr("data-target","#portlet-config");  
});
    
}); // end of view

$('.delete').each(function(index, element) {
		
$(this).click(function(e) {
id = $('.idall:eq('+index+')').val(); 
$.post('../delete/deletelocmer.php',{'id':id},function(data)
{
location = '../locationmerchant';  
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



 