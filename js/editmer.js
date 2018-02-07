// JavaScript Document

// JavaScript Document

// JavaScript Document

$(document).ready(function(e) {



$('form').submit(function(e) {

e.preventDefault();    


id = $('#id').val();

category = $('#category').val();

category2 = $('#newcategory').val();

name = $('#name').val();

mobileno = $('#mobileno').val();

address1 = $('#address1').val();

bankname = $('#bankname').val();

email = $('#email').val();

loc = $('#location').val();

username = $('#username').val();

password = $('#password').val();

cpassword = $('#cpassword').val();

state = $('#state').val();

country = $('#country').val();

zipcode = $('#zipcode').val();





if(name == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Merchant Name.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}



else if(mobileno == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Mobile No.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(address1 == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Address1.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(bankname == "" )
{
$('#displaymsg').show();
realmsg = 'Please Select Bank.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(state == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter State.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}


else if(loc == "" )
{
$('#displaymsg').show();
realmsg = 'Please Select Location.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(country == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Country.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(category == "" )
{
$('#displaymsg').show();
realmsg = 'Please Select Categorization.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(category2 == "" )
{
$('#displaymsg').show();
realmsg = 'Please Select Category.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(email == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Email.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(username == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Username.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(password != "" && cpassword == "" )
{
$('#displaymsg').show();
realmsg = 'Please Confirm Password.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(password != "" && password != cpassword)
{
$('#displaymsg').show();
realmsg = 'Password Mismatch.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);	
}

else

{



$.post('../snippets/editmer.php',{'name':name,'mobileno':mobileno,'address1':address1,'email':email,'loc':loc,'username':username,'password':password,'state':state,'country':country,'zipcode':zipcode,'bankname':bankname,'id':id,'category':category,'category2':category2},function(data){

	
if( data == "emailfound")
{
$('#displaymsg').show();	
realmsg = "Email Already Exists";
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if( data === 'usernamefound')
{
$('#displaymsg').show();	
realmsg = "Username Already Exists";
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else 
{
$('#displaymsg').show();	
msg = '<div class="alert alert-success"><button class="close" data-close="alert"></button>'+data+'</div>';
$('#displaymsg').html(msg);		
$('.formgroup').refresh('edit.php?id='+id);
//location = 'edit.php?id='+id;
$('input[type=password]').val('');
}	
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

};

$('#merchantcsv').submit(function(e) {
e.preventDefault();
$('.progress').show();
csv = $('input[type=file]').val();
$.post('processcsv.php',{'csv':csv},function(data){
	$('.progress-bar').html(csv);
	});    
});

});