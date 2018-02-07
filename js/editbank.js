// JavaScript Document

$(document).ready(function(e) {



$('form').submit(function(e) {

e.preventDefault();    


id = $('#id').val();
bankname = $('#bankname').val(); 



if(bankname == "")

{

$('#displaymsg').show();
realmsg = 'Enter a Bank Name.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);	

}

else

{

$.post('../snippets/editbank.php',{'bankname':bankname,'id':id},function(data)

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