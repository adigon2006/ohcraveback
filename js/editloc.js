// JavaScript Document

$(document).ready(function(e) {



$('form').submit(function(e) {

e.preventDefault();    


id = $('#id').val();
locname = $('#locname').val(); 



if(locname == "")

{
$('#displaymsg').show();
realmsg = 'Enter a location Name.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else

{

$.post('../snippets/editloc.php',{'locname':locname,'id':id},function(data)

{


$('#displaymsg').show();	
msg = '<div class="alert alert-success"><button class="close" data-close="alert"></button>'+data+'</div>';
$('#displaymsg').html(msg);		
$('.formgroup').refresh('edit.php?id='+id);


});

}

});    
$.fn.refresh = function(options) {

    var options = {
        contentURL : 'xxx.html'
    };
    options = $.extend({},options);
    return this.each(function() {
        var obj = $(this);
        setTimeout( function() {
            obj.fadeOut('slow').load(options.contentURL).fadeIn('slow');      
        }, 2000);            
    });
	}

});// JavaScript Document