// JavaScript Document


// JavaScript Document

// JavaScript Document

$(document).ready(function(e) {

$('#bankname').change(function(e) {
	bankid = $('#bankname').val();
 $.post('../snippets/getparentmerbybank.php',{'bankname':bankid},function(data)
 {	 
 
 $('#parentmerchant').empty().append('<option value="">Select Merchant</option><option value="0">All</option>'+data);	 
 });
});





$('#campaigntype').change(function(e) {
campaigntype = $('#campaigntype').val();
if(campaigntype == 'buygetfree')
{
$('#amt').hide();

$('#getfree').show();
$('#buy').show();	
}

else
{
	
if(campaigntype == 'Discount')
{
$('#amtlabel').html('Campaign Discount<span class="required">*</span>');
$('#campaignamount').attr('placeholder','Campaign Discount');
$('#amt').show();
$('#getfree').hide();
$('#buy').hide();	
}
else if(campaigntype == 'Price')
{
$('#amtlabel').html('Campaign Amount<span class="required">*</span>');
$('#campaignamount').attr('placeholder','Campaign Amount');
$('#amt').show();
$('#getfree').hide();
$('#buy').hide();	
}
else
{
$('#amt').hide();
$('#getfree').hide();
$('#buy').hide();	
}
}
		
});

$('#parentmerchant').change(function(e) {
 parentmerchant = $('#parentmerchant').val();
 if(parentmerchant == 0)
 {
  $('#cat').hide();	 
 }
 else if(parentmerchant == "")
 {
 $('#cat').show();	 
 }
 else
 {
	$('#cat').show();	  
 }
});


$('#pointcampaign').change(function(e) {
pointcampaign = $('#pointcampaign').val();
if(pointcampaign == "" || pointcampaign == "0")
{
$('#campoints').hide();	
}
else if(pointcampaign == "1")
{
$('#campoints').show();	
}
});

$('#next2').click(function(e) {
$('#displaymsg').hide(); 
campaigncat = $('#campaigncat').val();
campaignname = $('#campaignname').val();
productname = $('#productname').val();
campaigndesc = $('#campaigndesc').val();
bankname = $('#bankname').val();
parentmerchant = $('#parentmerchant').val();
getfreeqty = $('#getfreeqty').val();
buyqty = $('#buyqty').val();
campaigntype = $('#campaigntype').val();
campaignamount = $('#campaignamount').val();
pointcampaign = $('#pointcampaign').val();
campaignpoint = $('#campaignpoint').val();
expirydate = $('#expirydate').val();
minimumpoint = $('#minimumpoint').val();
maximumpoint = $('#maximumpoint').val();
campaignvolume = $('#campaignvolume').val();
usagelimit = $('#usagelimit').val();
campaignimg = $('#campaignimg').val();

mydate = new Date(expirydate);
var now = new Date();    

 if(minimumpoint == "")
{
$('#displaymsg').show();
realmsg = 'Please Enter Minimum Point.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(maximumpoint == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Maximum Points.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if( parseInt(minimumpoint) > parseInt(maximumpoint))
{
$('#displaymsg').show();
realmsg = 'Maximum Point must be greater than minimum.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(maximumpoint == minimumpoint)
{
$('#displaymsg').show();
realmsg = 'Maximum and Minimum Points must be different.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else
{
$('#next2').attr("data-toggle","tab");	
$('#li3').addClass("active");
$('#li2').removeClass("active");
$('#li1').removeClass("active");
} 
});

$('#next1').click(function(e) {
$('#displaymsg').hide();

campaigncat = $('#campaigncat').val();
campaignname = $('#campaignname').val();
productname = $('#productname').val();
campaigndesc = $('#campaigndesc').val();
bankname = $('#bankname').val();
parentmerchant = $('#parentmerchant').val();
getfreeqty = $('#getfreeqty').val();
buyqty = $('#buyqty').val();
campaigntype = $('#campaigntype').val();
campaignamount = $('#campaignamount').val();
pointcampaign = $('#pointcampaign').val();
campaignpoint = $('#campaignpoint').val();
expirydate = $('#expirydate').val();
minimumpoint = $('#minimumpoint').val();
maximumpoint = $('#maximumpoint').val();
campaignvolume = $('#campaignvolume').val();
usagelimit = $('#usagelimit').val();
campaignimg = $('#campaignimg').val();

mydate = new Date(expirydate);
var now = new Date();  
if(campaignname == "" )
{
	
$('#displaymsg').show();
realmsg = 'Please Enter Campaign Name.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(productname == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Product Name.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(campaigndesc == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Campaign Description.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(bankname == "" )
{
$('#displaymsg').show();
realmsg = 'Please Select Bank Name.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(parentmerchant == "" )
{
$('#displaymsg').show();
realmsg = 'Please Select Parent Merchant.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(parentmerchant!= 0 && campaigncat == "" )
{
$('#displaymsg').show();
realmsg = 'Please Select Campaign Category.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(campaigntype == "" )
{
$('#displaymsg').show();
realmsg = 'Please Select Campaign Type.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if((campaigntype== 'Price')&& campaignamount == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Campaign Amount.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if((campaigntype== 'Discount')&& campaignamount == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Campaign Discount.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if( campaigntype== 'buygetfree' && buyqty == '')
{
$('#displaymsg').show();
realmsg = 'Please Enter Buy Quantity.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(campaigntype== 'buygetfree' && getfreeqty == '')
{
$('#displaymsg').show();
realmsg = 'Please Enter  Get Free Quantity.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(pointcampaign == "" )
{
$('#displaymsg').show();
realmsg = 'Please Select If your campaign is a point campaign.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(pointcampaign=="1" && campaignpoint == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Campaign Points.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(pointcampaign=="1" && parseInt(campaignpoint)  < 1)
{
$('#displaymsg').show();
realmsg = 'Invalid Campaign Points.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(expirydate == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Expiry Date.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(mydate < now )
{
$('#displaymsg').show();
realmsg = 'Please Select Future Expiry Date.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else
{
$('#next1').attr("data-toggle","tab");	
$('#li2').addClass("active");
$('#li3').removeClass("active");
$('#li1').removeClass("active");
}
});


$('form').submit(function(e) {

e.preventDefault();    

$('#displaymsg').hide();

campaigncat = $('#campaigncat').val();
campaignname = $('#campaignname').val();
productname = $('#productname').val();
campaigndesc = $('#campaigndesc').val();
bankname = $('#bankname').val();
parentmerchant = $('#parentmerchant').val();
getfreeqty = $('#getfreeqty').val();
buyqty = $('#buyqty').val();
campaigntype = $('#campaigntype').val();
campaignamount = $('#campaignamount').val();
pointcampaign = $('#pointcampaign').val();
campaignpoint = $('#campaignpoint').val();
expirydate = $('#expirydate').val();
minimumpoint = $('#minimumpoint').val();
maximumpoint = $('#maximumpoint').val();
campaignvolume = $('#campaignvolume').val();
usagelimit = $('#usagelimit').val();
campaignimg = $('#campaignimg').val();

mydate = new Date(expirydate);
var now = new Date();



if(campaignname == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Campaign Name.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(productname == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Product Name.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(campaigndesc == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Campaign Description.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(bankname == "" )
{
$('#displaymsg').show();
realmsg = 'Please Select Bank Name.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(parentmerchant == "" )
{
$('#displaymsg').show();
realmsg = 'Please Select Parent Merchant.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(parentmerchant!= 0 && campaigncat == "" )
{
$('#displaymsg').show();
realmsg = 'Please Select Campaign Category.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(campaigntype == "" )
{
$('#displaymsg').show();
realmsg = 'Please Select Campaign Type.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if((campaigntype== 'Price')&& campaignamount == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Campaign Amount.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if((campaigntype== 'Discount')&& campaignamount == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Campaign Discount.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if( campaigntype== 'buygetfree' && buyqty == '')
{
$('#displaymsg').show();
realmsg = 'Please Enter Buy Quantity.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(campaigntype== 'buygetfree' && getfreeqty == '')
{
$('#displaymsg').show();
realmsg = 'Please Enter  Get Free Quantity.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(pointcampaign == "" )
{
$('#displaymsg').show();
realmsg = 'Please Select If your campaign is a point campaign.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(pointcampaign=="1" && campaignpoint == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Campaign Points.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(expirydate == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Expiry Date.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(mydate < now )
{
$('#displaymsg').show();
realmsg = 'Please Select Future Expiry Date.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(minimumpoint == "")
{
$('#displaymsg').show();
realmsg = 'Please Enter Minimum Point.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(maximumpoint == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter Maximum Points.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(campaignvolume == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter No of Available Coupons.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(usagelimit == "" )
{
$('#displaymsg').show();
realmsg = 'Please Enter No of Coupons Per User.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(campaignimg == "" )
{
$('#displaymsg').show();
realmsg = 'Select a campaign image.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(campaigntype == "Discount" && (parseInt(campaignamount) > 100  || parseInt(campaignamount) < 2))
{
$('#displaymsg').show();
realmsg = 'Invalid Discount Amount. Enter a valid discount'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}

else if(campaigntype == "Price" && (parseInt(campaignamount) < 1))
{
$('#displaymsg').show();
realmsg = 'Invalid Price Amount.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(pointcampaign=="1" && parseInt(campaignpoint)  < 1)
{
$('#displaymsg').show();
realmsg = 'Invalid Campaign Points.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if( parseInt(minimumpoint) > parseInt(maximumpoint))
{
$('#displaymsg').show();
realmsg = 'Maximum Point must be greater than minimum.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(maximumpoint == minimumpoint)
{
$('#displaymsg').show();
realmsg = 'Maximum and Minimum Points must be different.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(parseInt(usagelimit) == parseInt(campaignvolume))
{
$('#displaymsg').show();
realmsg = 'No of Available Coupons must be greater than No of Coupons Per User.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if(parseInt(usagelimit) > parseInt(campaignvolume))
{
$('#displaymsg').show();
realmsg = 'No of Coupons Per User must be less than No of Available Coupons.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);		
}
else if
(!$('#campaignimg').val()) //check empty input filed
		{
			$('#displaymsg').show();
realmsg = 'Please Select an image.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);	
			//$("#output").html("Please Select a CSV file");
						
}
// image handling

/*var fsize = $('#campaignimg')[0].files[0].size; //get file size
var ftype = $('#campaignimg')[0].files[0].type; // get file type*/
		
/*	if((ftype == 'image/jpeg') || (ftype == 'image/gif') || (ftype == 'image/png') ||(ftype == 'image/pjpeg'))
	{
		$('#displaymsg').show();
realmsg = 'Unsupported File Type Only Image allowed.'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);
                //$("#output").html("<b>"+ftype+"</b> Unsupported file type!");
				return false	
	}

	 if(fsize > 100000)
	{
	 $('#displaymsg').show();
realmsg = 'Image Size must be lass than 100kb'	
msg = '<div class="alert alert-danger"><button class="close" data-close="alert"></button>'+realmsg+'</div>';
$('#displaymsg').html(msg);
                //$("#output").html("<b>"+ftype+"</b> Unsupported file type!");
				return false		
	}*/
	




else

{
$.ajax({
url: "../snippets/processcampaign.php", // Url to which the request is send
type: "POST",             // Type of request to be send, called as method
data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
contentType: false,       // The content type used when sending data to the server.
cache: false,             // To unable request pages to be cached
processData:false,        // To send DOMDocument or non processed data file it is set to false
success: function(data)   // A function to be called if request succeeds
{
//$('#loading').hide();
$("#displaymsg").show();
$("#displaymsg").html(data);
if(data == 'true')
{
if(pointcampaign=="0")
{
campaignpoint = 0;	
}
$('#displaymsg').hide();	
$.post('../snippets/processcampaign2.php',{'campaignname':campaignname,'productname':productname,
'campaigndesc':campaigndesc,'campaigntype':campaigntype,'bankname':bankname,'parentmerchant':parentmerchant,'campaignamount':campaignamount,'expirydate':expirydate,'minimumpoint':minimumpoint,'maximumpoint':maximumpoint ,'campaignvolume':campaignvolume,'usagelimit':usagelimit,'getfreeqty':getfreeqty,'buyqty':buyqty,'campaigncat':campaigncat,'campaignpoint':campaignpoint,'pointcampaign':pointcampaign
},function(data){

	

	
$('#displaymsg').show();	

msg = '<div class="alert alert-success"><button class="close" data-close="alert"></button>'+data+'</div>'

$('#displaymsg').html(msg);		

$('input[type=text]').val('');

$('input[type=password]').val('');

$('input[type=number]').val('');

$('select').val('');

$('input[type=file]').val('');

});		
}
}
}) 



}

});   



});