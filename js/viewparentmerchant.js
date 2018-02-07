// JavaScript Document
// JavaScript Document

$(document).ready(function(e) {

$('form').submit(function(e) {
e.preventDefault(); 
$('.view').each(function(index, element) {

$(this).click(function(e) {
id = $('.idall:eq('+index+')').val(); 
$.post('../snippets/getparmerdet.php',{'id':id},function(data)
{
$('.modal-body').html(data);  
$('.modal-title').html('Parent Merchant\'s Details');
});
$(this).attr("data-target","#portlet-config");  
});
    
}); // end of view

$('.delete').each(function(index, element) {
		
$(this).click(function(e) {
id = $('.idall:eq('+index+')').val(); 
$.post('../delete/deleteparentmerchant.php',{'id':id},function(data)
{
location = '../parentmerchant';  
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



$('.next').click(function(e) {
pageval = $('.pageval:eq(2)').val();	
//$('.displaymsg').html('page is '+pageval);   
if(pageval != '')
{
$.post('../snippets/pagesforparentmerchant.php',{'page':pageval},function(data)
{
$('#result').html(data);
});
	
} 
});

$('.first').click(function(e) {
pageval = $('.pageval:eq(0)').val();	
//$('.displaymsg').html('page is '+pageval);  
if(pageval != '')
{
$.post('../snippets/pagesforparentmerchant.php',{'page':pageval},function(data)
{
$('#result').html(data);
});
	
}  
});

$('.last').click(function(e) {
pageval = $('.pageval:eq(3)').val();	
//$('.displaymsg').html('page is '+pageval);   
if(pageval != '')
{
$.post('../snippets/pagesforparentmerchant.php',{'page':pageval},function(data)
{
$('#result').html(data);
});
	
} 
});

$('.previous').click(function(e) {
pageval = $('.pageval:eq(1)').val();	
//$('.displaymsg').html('page is '+pageval);    
if(pageval != '')
{
$.post('../snippets/pagesforparentmerchant.php',{'page':pageval},function(data)
{
$('#result').html(data);
});
	
}
});
   
});




 