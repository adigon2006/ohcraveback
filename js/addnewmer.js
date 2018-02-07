// JavaScript Document

// JavaScript Document

// JavaScript Document

$(document).ready(function(e) {


// start of uploading
var options = { 
			target:   '#output',   // target element(s) to be updated with server response 
			beforeSubmit:  beforeSubmit,  // pre-submit callback 
			success:       afterSuccess,  // post-submit callback 
			uploadProgress: OnProgress, //upload progress callback 
			resetForm: true        // reset the form after successful submit 
		}; 
		
	 $('#MyUploadForm').submit(function() { 
			$(this).ajaxSubmit(options);  			
			// always return false to prevent standard browser submit and page navigation 
			
			
			return false; 
		}); 
		

//function after succesful file upload (when server response)
function afterSuccess()
{
	$('#displaymsg2').show();	
	data = "Bulk Merchant Uploaded Successfully";
msg = '<div class="alert alert-success"><button class="close" data-close="alert"></button>'+data+'</div>'
$('#displaymsg2').html(msg);	
	
	$('#submit-btn').show(); //hide submit button
	$('#loading-img').hide(); //hide submit button
	$('#progressbox').delay( 1000 ).fadeOut(); //hide progress bar

}

//function to check file size before uploading.
function beforeSubmit(){
    //check whether browser fully supports all File API
   if (window.File && window.FileReader && window.FileList && window.Blob)
	{
		// check this for bank admin
		bankname2 = $('#banknam2').val();
		$.post('initializebank.php',{'bankname':bankname2},'');
		
		if( !$('#FileInput').val()) //check empty input filed
		{
			$('#displaymsg2').show();
realmsg = 'Please Select a CSV file.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg2').html(msg);	
			$("#output").html("Please Select a CSV file");
			return false
		}
		
		var fsize = $('#FileInput')[0].files[0].size; //get file size
		var ftype = $('#FileInput')[0].files[0].type; // get file type
		

		//allow file types 
		switch(ftype)
        {
           // case 'image/png': 
			//case 'image/gif': 
			//case 'image/jpeg': 
			//case 'image/pjpeg':
			//case 'text/plain':
			//case 'text/html':
			//case 'application/x-zip-compressed':
			//case 'application/pdf':
			//case 'application/msword':
			case 'application/vnd.ms-excel':
			//case 'video/mp4':
                break;
            default:
				$('#displaymsg2').show();
realmsg = 'Unsupported File Type Only CSV allowed.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg2').html(msg);
                $("#output").html("<b>"+ftype+"</b> Unsupported file type!");
				return false
        }
		
		//Allowed file size is less than 5 MB (1048576)
		if(fsize>5242880) 
		{
			$("#output").html("<b>"+bytesToSize(fsize) +"</b> Too big file! <br />File is too big, it should be less than 5 MB.");
			return false
		}
				
		$('#submit-btn').hide(); //hide submit button
		$('#loading-img').show(); //hide submit button
		$("#output").html("");  
	}
	else
	{
		//Output error to older unsupported browsers that doesn't support HTML5 File API
		$("#output").html("Please upgrade your browser, because your current browser lacks some new features we need!");
		return false;
	}
}

//progress bar function
function OnProgress(event, position, total, percentComplete)
{
    //Progress bar
	$('#progressbox').show();
    $('#progressbar').width(percentComplete + '%') //update progressbar percent complete
    $('#statustxt').html(percentComplete + '%'); //update status text
    if(percentComplete>50)
        {
            $('#statustxt').css('color','#000'); //change status text to white after 50%
        }
}

//function to format bites bit.ly/19yoIPO
function bytesToSize(bytes) {
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   if (bytes == 0) return '0 Bytes';
   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
   return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}









// end of merchant uploading total
$('#myform').submit(function(e) {

e.preventDefault();    



name = $('#name').val();

category = $('#category').val();

category2 = $('#category2').val();

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

else if(password == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Password.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(cpassword == "" )
{
$('#displaymsg').show();
realmsg = 'Please Confirm Password.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(password != cpassword)
{
$('#displaymsg').show();
realmsg = 'Password Mismatch.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);	
}

else

{



$.post('../snippets/processmer.php',{'name':name,'mobileno':mobileno,'address1':address1,'email':email,'loc':loc,'username':username,'password':password,'state':state,'country':country,'zipcode':zipcode,'bankname':bankname,'category':category,'category2':category2},function(data){

	
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

msg = '<div class="alert alert-success"><button class="close" data-close="alert"></button>'+data+'</div>'

$('#displaymsg').html(msg);		

$('input[type=text]').val('');
$('input[type=email]').val('');
$('input[type=password]').val('');
$('select').val('');
}
});	

}

});    


$('#merchantcsv').submit(function(e) {
e.preventDefault();
$('.progress').show();
csv = $('input[type=file]').val();
$.post('processcsv.php',{'csv':csv},function(data){
	$('.progress-bar').html(csv);
	});    
});

});