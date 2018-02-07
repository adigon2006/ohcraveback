<?php 
require_once ('../includes/Myfunction.php');
//require_once('../includes/check.php');
//confirmlogin();

?>
<!DOCTYPE html>

<html lang="en" class="no-js">
<!--<![endif]-->
<!-- BEGIN HEAD -->
<head>
<meta charset="utf-8"/>
<title>Compose SMS</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<meta content="" name="description"/>
<meta content="" name="author"/>
<!-- BEGIN GLOBAL MANDATORY STYLES -->
<link href="http://fonts.googleapis.com/css?family=Antic+Slab"  rel="stylesheet" type="text/css"/>

<link href="../assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
<link rel="stylesheet" href="../css/mystyle.css" />
<link href="../assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css"/>
<link href="../assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
<link href="../assets/global/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css"/>
<link href="../assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css" rel="stylesheet" type="text/css"/>

<link rel="stylesheet" type="text/css" href="../assets/global/plugins/bootstrap-markdown/css/bootstrap-markdown.min.css">

<!-- END GLOBAL MANDATORY STYLES -->
<!-- BEGIN PAGE LEVEL PLUGIN STYLES -->
<link rel="stylesheet" type="text/css" href="../assets/global/plugins/select2/select2.css"/>
<link rel="stylesheet" type="text/css" href="../assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.css"/>
<link href="../assets/global/plugins/bootstrap-daterangepicker/daterangepicker-bs3.css" rel="stylesheet" type="text/css"/>
<link href="../assets/global/plugins/fullcalendar/fullcalendar.min.css" rel="stylesheet" type="text/css"/>
<link href="../assets/global/plugins/jqvmap/jqvmap/jqvmap.css" rel="stylesheet" type="text/css"/>
<!-- END PAGE LEVEL PLUGIN STYLES -->
<!-- BEGIN PAGE STYLES -->
<link href="../assets/admin/pages/css/tasks.css" rel="stylesheet" type="text/css"/>
<!-- END PAGE STYLES -->
<!-- BEGIN THEME STYLES -->
<link href="../assets/global/css/components-md.css" id="style_components" rel="stylesheet" type="text/css"/>
<link href="../assets/global/css/plugins-md.css" rel="stylesheet" type="text/css"/>
<link href="../assets/admin/layout/css/layout.css" rel="stylesheet" type="text/css"/>
<link href="../assets/admin/layout/css/themes/darkblue.css" rel="stylesheet" type="text/css" id="style_color"/>
<link href="../assets/admin/layout/css/custom.css" rel="stylesheet" type="text/css"/>
<!-- END THEME STYLES -->
<?php include('../favicon/fav.php') ?>
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<!-- DOC: Apply "page-header-fixed-mobile" and "page-footer-fixed-mobile" class to body element to force fixed header or footer in mobile devices -->
<!-- DOC: Apply "page-sidebar-closed" class to the body and "page-sidebar-menu-closed" class to the sidebar menu element to hide the sidebar by default -->
<!-- DOC: Apply "page-sidebar-hide" class to the body to make the sidebar completely hidden on toggle -->
<!-- DOC: Apply "page-sidebar-closed-hide-logo" class to the body element to make the logo hidden on sidebar toggle -->
<!-- DOC: Apply "page-sidebar-hide" class to body element to completely hide the sidebar on sidebar toggle -->
<!-- DOC: Apply "page-sidebar-fixed" class to have fixed sidebar -->
<!-- DOC: Apply "page-footer-fixed" class to the body element to have fixed footer -->
<!-- DOC: Apply "page-sidebar-reversed" class to put the sidebar on the right side -->
<!-- DOC: Apply "page-full-width" class to the body element to have full width page without the sidebar menu -->
<body class="page-md page-header-fixed page-quick-sidebar-over-content page-sidebar-closed-hide-logo ">
<!-- BEGIN HEADER -->
<?php include('../top/top.php'); ?>
<!-- END HEADER -->
<div class="clearfix">
</div>
<!-- BEGIN CONTAINER -->
<div class="page-container">
	<!-- BEGIN SIDEBAR -->
	<div class="page-sidebar-wrapper">
		<!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
		<!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
		<div class="page-sidebar navbar-collapse collapse">
			<!-- BEGIN SIDEBAR MENU -->
			<!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
			<!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
			<!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
			<!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
			<!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
			<!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
			<?php include('../navigation/nav.php'); ?>
			<!-- END SIDEBAR MENU -->
		</div>
	</div>
	<!-- END SIDEBAR -->
	<!-- BEGIN CONTENT -->
	<div class="page-content-wrapper">
		<div class="page-content">
			
			
			<!-- END STYLE CUSTOMIZER -->
			<!-- BEGIN PAGE HEADER-->
			<h3 class="page-title">
			Email <small>Compose Email</small>
			</h3>
			<div class="page-bar">
				<ul class="page-breadcrumb">
					<li>
						<i class="fa fa-home"></i>
						<a href="../dashboard">Home</a>
						<i class="fa fa-angle-right"></i>
					</li>
					<li>
					    <i class="fa fa-envelope"></i>
						<a href="../composesms">Compose SMS</a>
						<i class="fa fa-angle-right"></i>
					</li>
				
				</ul>
				<div class="page-toolbar">
					
				</div>
			</div>
			<!-- END PAGE HEADER-->
			<!-- BEGIN DASHBOARD STATS -->
			
				
				
				
				<div class="row">
				<div class="col-md-12">
					<!-- BEGIN EXAMPLE TABLE PORTLET-->
					<div class="portlet box grey-cascade">
						<div class="portlet-title">
							<div class="caption">
								<i class="fa fa-envelope"></i>New SMS
							</div>
							<div class="tools">
								<a href="javascript:;" class="collapse">
								</a>
							
							</div>
						</div>
						<div class="portlet-body">
							<div class="table-toolbar">
								<div class="row">
									<div class="col-md-6">
										
									
								
								
								
								
								</div>
							</div>
						
						<div class="row">
				<div class="col-md-12">
					<!-- BEGIN VALIDATION STATES-->
					<div class="portlet box yellow">
						<div class="portlet-title">
							<div class="caption">
								<i class="fa fa-envelope"></i>Compose SMS Here
							</div>
							<div class="tools">
								<a href="javascript:;" class="collapse">
								</a>
							</div>
						</div>
						<div class="portlet-body form">
							<!-- BEGIN FORM-->
							
							<div class="search-background"><label><img src="../images/loader.gif" alt="" /></label></div>
							
							
							<div class="tabbable-custom ">
								<ul class="nav nav-tabs ">
									<li class="active">
										<a href="#tab_5_1" data-toggle="tab">
										Bulk SMS </a>
									</li>
									<li>
										<a href="#tab_5_2" data-toggle="tab">
										Single SMS</a>
									</li>
									
								</ul>
								<div class="tab-content">
									<div class="tab-pane active" id="tab_5_1">
										<form action="" id="mail1" class="form-horizontal">
								<div class="form-body">
								<div id="displaymsg">
								
								</div>
									
									<div class="col-md-6">
									<div class="form-group">
										<label class="control-label col-md-4">Subject<span class="required">
										* </span>
										</label>
										<div class="col-md-6">
											<div class="input-icon right">
												<i class="fa"></i>
												<input type="text" class="form-control" name="subject" id="subject"/>
											</div>
										</div>
									</div>
									</div>
									
									<div class="col-md-6">
									<div class="form-group">
										<label class="control-label col-md-4">Select Group <span class="required">
										* </span>
										</label>
										<div class="col-md-6">
											<div class="input-icon right">
												<i class="fa"></i>
												<select id="group" name="group" class="form-control">
												<option value=""></option>
												<!--<option value="bankadmin"> Bank Admins</option>-->
												<option value="parentmerchant">Parent Merchants</option>
												<option value="locationmerchant">Location Merchants</option>
												<option value="customers">Customers</option>
												</select>
											</div>
										</div>
									</div>
									</div>
									
									
									<div class="col-md-12">
									<div class="form-group">
									<label class="control-label col-md-2">Message<span class="required">
										* </span>
										</label>
										
										<div class="col-md-9">
											<textarea rows="5" maxlength="621" class="form-control mymessage"></textarea>
										</div>
									</div>
									</div>
									<div class="col-md-12">
									<div class="form-group">
									<label class="control-label col-md-2">Character Count<span class="required">
										 </span>
										</label>
										
										<div class="col-md-9" id="charcount">
											
										</div>
									</div>
									</div>
									
									
									
									
									
								<div class="form-actions">
									<div class="row">
										<div class="col-md-offset-3 col-md-6 col-md-offset-3">
											<div class="col-md-12"><button type="submit" class="btn green form-control">Send Bulk SMS <i class="fa fa-send"></i></button></div>
									
										</div>
									</div>
								</div>
							</form>
							<!-- END FORM-->
						</div>
									</div>
									<div class="tab-pane" id="tab_5_2">
										
										
										
										
										
												<form action="" id="mail2" class="form-horizontal">
								<div class="form-body">
								<div id="displaymsg2">
								
								</div>
									
									<div class="col-md-6">
									<div class="form-group">
										<label class="control-label col-md-4">Subject<span class="required">
										* </span>
										</label>
										<div class="col-md-6">
											<div class="input-icon right">
												<i class="fa"></i>
												<input type="text" class="form-control" name="subject" id="subject2"/>
											</div>
										</div>
									</div>
									</div>
									
									<div class="col-md-6">
									<div class="form-group">
										<label class="control-label col-md-4">Mobile No <span class="required">
										* </span>
										</label>
										<div class="col-md-6">
											<div class="input-icon right">
												<i class="fa"></i>
												<input type="number" class="form-control" name="to" id="to"/>
											</div>
										</div>
									</div>
									</div>
									
									
									<div class="col-md-12">
									<div class="form-group">
									<label class="control-label col-md-2">Message<span class="required">
										* </span>
										</label>
										
										<div class="col-md-9">
											<textarea rows="5" maxlength="621" class="form-control" id="mymessage2">
											
											</textarea>
											
										</div>
									</div>
									</div>
									
									
									
									
									
								<div class="form-actions">
									<div class="row">
										<div class="col-md-offset-3 col-md-6 col-md-offset-3">
											<div class="col-md-12"><button type="submit" class="btn green form-control">Send Single SMS <i class="fa fa-send"></i></button></div>
									
										</div>
									</div>
								</div>
							</form>
										
										
										
										
										
										
										
										
										
										
									</div>
									
								</div>
							
							
							
							
							
							
					</div>
					<!-- END VALIDATION STATES-->
				</div>
			</div>
						
						
						
						
						
						<!-- end of table -->
						</div>
					</div>
				
				
				
				
				
				
                
                
                
                
                
			</div>
            
			<div class="clearfix">
			</div>
			
			
		</div>
	</div>
	<!-- END CONTENT -->
	<!-- BEGIN QUICK SIDEBAR -->
	
	
	<!-- END QUICK SIDEBAR -->
</div>
<!-- END CONTAINER -->
<!-- BEGIN FOOTER -->
<?php include('../footer/footer.php'); ?>
<!-- END FOOTER -->
<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
<!-- BEGIN CORE PLUGINS -->
<!--[if lt IE 9]>
<script src="../assets/global/plugins/respond.min.js"></script>
<script src="../assets/global/plugins/excanvas.min.js"></script> 
<![endif]-->
<script src="../assets/global/plugins/jquery.min.js" type="text/javascript"></script>
<script src="../js/sendsms.js"></script>
<script src="../assets/global/plugins/jquery-migrate.min.js" type="text/javascript"></script>
<!-- IMPORTANT! Load jquery-ui.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->
<script src="../assets/global/plugins/jquery-ui/jquery-ui.min.js" type="text/javascript"></script>
<script src="../assets/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="../assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js" type="text/javascript"></script>
<script src="../assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
<script src="../assets/global/plugins/jquery.blockui.min.js" type="text/javascript"></script>
<script src="../assets/global/plugins/jquery.cokie.min.js" type="text/javascript"></script>
<script src="../assets/global/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>
<script src="../assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js" type="text/javascript"></script>
<!-- END CORE PLUGINS -->
<!-- BEGIN PAGE LEVEL PLUGINS -->
<script src="../assets/global/plugins/bootstrap-summernote/summernote.min.js" type="text/javascript"></script>
<script type="text/javascript" src="../assets/global/plugins/jquery-validation/js/jquery.validate.min.js"></script>
<script type="text/javascript" src="../assets/global/plugins/jquery-validation/js/additional-methods.min.js"></script>
<script type="text/javascript" src="../assets/global/plugins/select2/select2.min.js"></script>
<script type="text/javascript" src="../assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
<script type="text/javascript" src="../assets/global/plugins/bootstrap-wysihtml5/wysihtml5-0.3.0.js"></script>
<script type="text/javascript" src="../assets/global/plugins/bootstrap-wysihtml5/bootstrap-wysihtml5.js"></script>
<script type="text/javascript" src="../assets/global/plugins/ckeditor/ckeditor.js"></script>
<script type="text/javascript" src="../assets/global/plugins/bootstrap-markdown/js/bootstrap-markdown.js"></script>
<script type="text/javascript" src="../assets/global/plugins/bootstrap-markdown/lib/markdown.js"></script>
<!-- END PAGE LEVEL PLUGINS -->
<!-- BEGIN PAGE LEVEL STYLES -->
<script src="../assets/global/scripts/metronic.js" type="text/javascript"></script>
<script src="../assets/admin/layout/scripts/layout.js" type="text/javascript"></script>
<script src="../assets/admin/layout/scripts/quick-sidebar.js" type="text/javascript"></script>
<script src="../assets/admin/layout/scripts/demo.js" type="text/javascript"></script>
<script src="../assets/admin/pages/scripts/form-validation.js"></script>
<script src="../assets/admin/pages/scripts/components-editors.js"></script>
<!-- END PAGE LEVEL STYLES -->
<script>
jQuery(document).ready(function() {   
   // initiate layout and plugins
   Metronic.init(); // init metronic core components
Layout.init(); // init current layout
QuickSidebar.init(); // init quick sidebar
Demo.init(); // init demo features
   FormValidation.init();
   ComponentsEditors.init();
});
</script>
<!-- END JAVASCRIPTS -->
</body>
<!-- END BODY -->
</html>