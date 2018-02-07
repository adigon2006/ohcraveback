// JavaScript Document

$(document).ready(function(e) {
/*
$('.delete').each(function(index, element) {

$(this).click(function(e) {
$('form').submit(function(e) {
e.preventDefault(); 
id = $('.idall:eq('+index+')').val(); 
$.post('../delete/deletecus.php',{'id':id},function(data)
{
location = '../customers';  
});
    
});
    
});




});

$('.edit').each(function(index, element) {
$(this).click(function(e) {
$('form').submit(function(e) {
 e.preventDefault();  
id = $('.idall:eq('+index+')').val(); 
location = 'edit.php?id='+id;    
    
});
    
}); 
    
});

$('.view').each(function(index, element) {
$(this).click(function(e) {
	
   
$('form').submit(function(e) {
e.preventDefault();
$('.modal-title').html('Customer\'s Details');
 $(this).attr("data-target","#portlet-config"); 
id = $('.idall:eq('+index+')').val(); 
$.post('../snippets/getcusdet.php',{'id':id},function(data)
{
$('.modal-body').html(data);  
});

});    
});    
});

*/

$('form').submit(function(e) {
e.preventDefault(); 
$('.view').each(function(index, element) {

$(this).click(function(e) {
id = $('.idall:eq('+index+')').val(); 
$.post('../snippets/getcusdet.php',{'id':id},function(data)
{
$('.modal-body').html(data);  
$('.modal-title').html('Customer\'s Details');
});
$(this).attr("data-target","#portlet-config");  
});
    
}); // end of view

$('.delete').each(function(index, element) {
		
$(this).click(function(e) {
id = $('.idall:eq('+index+')').val(); 
$.post('../delete/deletecus.php',{'id':id},function(data)
{
location = '../customers';  
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




 