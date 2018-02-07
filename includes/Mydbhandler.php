<?php
class Mydbhandler
{	
private $connect;   
 

private function __contruct()
{	    
require_once 'Dbconnect.php';    
$dbconnect = new Dbconnect();
$this->connect = $dbconnect->connect();
return $this->connect;
}


public function redirect_to($location)
{
  exit(header("Location:{$location}"));  
}

public function sessionstart()
{
$sessionstart = session_start();	
}

public function getAllActiveUsers()
{
return $this->getActiveUsers();        
}
private function getActiveUsers()
{
$stmt = $this->__contruct()->prepare('select user_id from user_tbl where status=?');
$status = 1;
$stmt->bind_param('d',$status);
$stmt->execute();
$stmt->store_result();
$numrows = $stmt->num_rows();
return $numrows;
}
public function getAllActivePlans()
{
return $this->getActivePlans();    
}

private function getActivePlans()
{
$stmt = $this->__contruct()->prepare('select plan_id from plan_tbl');
$stmt->execute();
$stmt->store_result();
$numrows = $stmt->num_rows();
return $numrows;
}


public function getAllSuperAdmins()
{
    return $this->getSuperAdmins();  
}

private function getSuperAdmins()
{
$stmt = $this->__contruct()->prepare('select super_id from super_admin_tbl');
$stmt->execute();
$stmt->store_result();
$numrows = $stmt->num_rows();
return $numrows;
}

public function getAllRunningAds()
{
 return $this->getRunningAds();    
}
private function getRunningAds()
{
$stmt = $this->__contruct()->prepare('select ads_id from ads_tbl');
$stmt->execute();
$stmt->store_result();
$numrows = $stmt->num_rows();
return $numrows;
}

public function getAllInactiveUsers()
{
    return $this->getInActiveUsers();   
}

private function getInActiveUsers()
{
$status = 0;
$stmt = $this->__contruct()->prepare('select user_id from user_tbl where status = ?');
$stmt->bind_param('d',$status);
$stmt->execute();
$stmt->store_result();
$numrow = $stmt->num_rows();
return $numrow;
}

public function getAllActiveComplaints()
{
 return $this->getActiveComplaints();         
}

private function getActiveComplaints()
{
$read = 0;
$stmt = $this->__contruct()->prepare('select complaints_id from complaints_tbl where readcomplaints=?');
$stmt->bind_param('d',$read);
$stmt->execute();
$numrow = $stmt->num_rows();
return $numrow;       
}        





public function editSuper($firstname,$lastname,$email,$username,$password,$id)
{
   global $msg;
   $done = $this->updateSuper($firstname, $lastname, $email, $username, $password, $id);
if($done)
{
$msg = 'Super Admin Edited Successfully';    
}
else if($done == FALSE)
{
$msg = 'No Changes was made';    
}
  
}

private function updateSuper($firstname,$lastname,$email,$username,$password,$id)
{
 $edited = FALSE;	
if($password == "")
{
$stmt = $this->__contruct()->prepare('update super_admin_tbl set firstname=?,lastname=?,email=?,username=? where super_id=?');
$stmt->bind_param('ssssd',$firstname,$lastname,$email,$username,$id);	
}
else if($password != "")
{
$stmt = $this->__contruct()->prepare('update super_admin_tbl set firstname=?,lastname=?,email=?,username=?,password=? where super_id=?');
$password = hash('sha512',$password);
$stmt->bind_param('sssssd',$firstname,$lastname,$email,$username,$password,$id);		
}
$stmt->execute();
$affected = $stmt->affected_rows;
if($affected == 1)
{
$edited = TRUE;   
}
else if($affected == 0)
{
$edited = FALSE;   
}
return $edited;
}



public function checkemail($email,$tablename)
{
global $msg;	
if($this->checkIFExistEmail($email,$tablename))
{
$msg = "emailfound";
}
}


public function checkemail2($email,$tablename,$field,$id)
{
global $msg;	
if($this->checkIFExistEmail2($email,$tablename,$field,$id))
{
$msg = "emailfound";
}
}


private function checkIFExistEmail($email,$tablename)
{
$found = FALSE;
$stmt = $this->__contruct()->prepare('select email from '.$tablename.' where email=? LIMIT 1');	
$stmt->bind_param('s',$email);
$stmt->execute();
$stmt->bind_result($me);
$stmt->store_result();
$numrows = $stmt->num_rows();
if($numrows == 1)
{
$found = TRUE;	
}
return $found;
}

private function checkIFExistEmail2($email,$tablename,$field,$id)
{
$found = FALSE;
$stmt = $this->__contruct()->prepare('select email from '.$tablename.' where email=? and '.$field.'!=? LIMIT 1');	
$stmt->bind_param('sd',$email,$id);
$stmt->execute();
$stmt->bind_result($me);
$stmt->store_result();
$numrows = $stmt->num_rows();
if($numrows == 1)
{
$found = TRUE;	
}
return $found;
}

public function checkusername($username,$tablename)
{
global $msg;	
if($this->checkIFExistUsername($username,$tablename))
{
$msg = "usernamefound";
}
}

public function checkusername2($username,$tablename,$field,$id)
{
global $msg;	
if($this->checkIFExistUsername2($username,$tablename,$field,$id))
{
$msg = "usernamefound";
}
}



public function confirmoldpassword($oldpassword,$id)
{
global $msg;
$exist = $this->checkoldpassword($oldpassword, $id);
if($exist)
{
$msg = '';    
}
else if(!$exist)
{
$msg = 'Invalid Old Password';    
}
}

public function updatepassword($password,$id)
{
global $msg;
$this->updatesuperpassy($password, $id);
$msg = 'Password Update Successfully';
}

private function updatesuperpassy($password,$id)
{
$stmt = $this->__contruct()->prepare('update super_admin_tbl set password=? where super_id=?');
$password = hash('sha512',$password);
$stmt->bind_param('sd',$password,$id);
$stmt->execute();
}
        

private function checkoldpassword($oldpassword,$id)
{
global $found,$myid ;
$stmt = $this->__contruct()->prepare('select super_id from super_admin_tbl where super_id=? AND password=? LIMIT 1');   
$oldpassword = hash('sha512',$oldpassword);
$stmt->bind_param('ds',$id,$oldpassword);
$stmt->execute();
$stmt->bind_result($myid);
$stmt->store_result();
$numrows = $stmt->num_rows();
if($numrows == 1)
{
$found = TRUE;    
}
else if($numrows == 0)
{
 $found = FALSE;    
}
return $numrows;
}


public function addNewCustomer($firstname,$lastname,$gender,$mobileno,$address1,$email,$username,$password,$state,$country,$zipcode)
{
    global $msg;
    $this->addnewuser($firstname, $lastname, 
            $gender, $mobileno, $address1, $email, $username, $password, $state, $country, $zipcode);
$msg = $msg;
    
}



public function addNewPlan($planname,$plantitle,$assignuser)
{
global $msg;
$newadd = $this->addPlan($planname, $plantitle, $assignuser);
if($newadd == TRUE)
{
$msg = "New Plan Added Successfully";
}
else if ($newadd == FALSE)
{
$msg = "Unable to Add Plan. Try again later";    
}
}
private function addPlan($planname,$plantitle,$assignuser)
{
global $added;    
$stmt = $this->__contruct()->prepare('insert into plan_tbl (plan_name,plan_title,user_id)
    values (?,?,?)');
$stmt->bind_param('sss',$planname,$plantitle,$assignuser);
$stmt->execute();
$affected = $stmt->affected_rows;
if($affected == 1)
{
$added = TRUE;    
}
 else if($affected == 0)
    
 {
  $added = FALSE;   
 }
return $added;
}

public function getOptionMenu()
{
global $useroptionmenu;
$useroptionmenu = $this->getUserOptionMenu();   
}

private function getUserOptionMenu()
{
    global $usermenu;
    $stmt = $this->__contruct()->prepare('select user_id,firstname,lastname from user_tbl');
$stmt->execute();
$stmt->bind_result($userid,$firstname,$lastname);
$stmt->store_result();
$numrows = $stmt->num_rows();
for ($i=0;$i<$numrows;$i++)
{
 $stmt->fetch();
 $usermenu .= '<option value="'.$userid.'">'.$firstname.' '.$lastname.'</option>';
}
return $usermenu;
}

private function addnewuser($firstname,$lastname,$gender,$mobileno,
        $address1,$email,$username,$password,$state,$country,$zipcode)
{
global $msg;    
$stmt = $this->__contruct()->prepare('insert into user_tbl (firstname,lastname,sex,
    phone,address,state,country,zipcode,email,username,password,status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)');    
$password = hash('sha512',$password);
$status = 1;
$stmt->bind_param('ssssssssssss',$firstname,$lastname,$gender,$mobileno,
        $address1,$state,$country,$zipcode,$email,$username,$password,$status);
$stmt->execute();
$affected = $stmt->affected_rows;
if($affected == 1)
{
$stmt = $this->__contruct()->prepare('select user_id from user_tbl where email=? LIMIT 1');
$stmt->bind_param('s',$email);
$stmt->execute();
$stmt->bind_result($userid);
$stmt->store_result();
$numrows = $stmt->num_rows();
if($numrows == 1)
{
$stmt->fetch();    
$stmt = $this->__contruct()->prepare('insert into follow_tbl (user_id) values (?)');
$stmt->bind_param('d',$userid);
$stmt->execute();
}
$msg = 'User Added Successfully';    
}
else if($affected == 0)
{
$msg = 'Unable to add customer';    
}
}
private function checkIFExistUsername2($username,$tablename,$field,$id)
{
$found = FALSE;
$stmt = $this->__contruct()->prepare('select username from '.$tablename.' where username=? and '.$field.'!=? LIMIT 1');	
$stmt->bind_param('sd',$username,$id);
$stmt->execute();
$stmt->bind_result($me);
$stmt->store_result();
$numrows = $stmt->num_rows();
if($numrows == 1)
{
$found = TRUE;	
}
return $found;
}


private function checkIFExistUsername($username,$tablename)
{
$found = FALSE;
$stmt = $this->__contruct()->prepare('select username from '.$tablename.' where username=? LIMIT 1');	
$stmt->bind_param('s',$username);
$stmt->execute();
$stmt->bind_result($me);
$stmt->store_result();
$numrows = $stmt->num_rows();
if($numrows == 1)
{
$found = TRUE;	
}
return $found;
}

public function addNewSuper($firstname,$lastname,$email,$username,$password)
{
global $msg;	
$password = hash('sha512',$password);	
if($this->addsuper($firstname,$lastname,$email,$username,$password))
{
$msg = "Super Admin Added Succesully";
}
	
}

private function addsuper($firstname,$lastname,$email,$username,$password)
{
global $added;
$stmt = $this->__contruct()->prepare('insert into             super_admin_tbl (firstname,lastname,email,username,password) VALUES (?,?,?,?,?)');
$stmt->bind_param('sssss',$firstname,$lastname,$email,$username,$password);
$stmt->execute();
$affected = $stmt->affected_rows;
if($affected == 1)
{
$added = TRUE;	
}
return $added;
}

public function getAllSuper()
{
global $allsuper;
$allsuper = $this->getallsuperad();		
}

private function getallsuperad()
{
global $allsuper;

$stmt = $this->__contruct()->prepare('select super_id,firstname,lastname,email,type,username from super_admin_tbl');
$stmt->execute();
$stmt->bind_result($id,$firstname,$lastname,$email,$type,$username);
$stmt->store_result();
$noofmerchant = $stmt->num_rows();	
if($noofmerchant > 0)
{
$allsuper = '<table  class="table table-striped table-hover " id="sample_1">
										<thead>
											<tr>
											<th>S/N</th>
												<th> First Name</th>
												<th> Last Name</th>
													<th>Email</th>
 												<th>Username</th>
												
												
												<th >Action</th>
											</tr>
										</thead><tbody>';	
}
for($i=0; $i<$noofmerchant;$i++)
{
mysqli_stmt_fetch($stmt);
$s = $i + 1;	
if ($type == 1)
{
$button = 	
'<form method="post"><input type="hidden" name="id" value="'.$id.'" class="idall" /><button class="btn btn-primary edit"><i class="fa fa-edit"></i>Edit</button></form>&nbsp;';	
}
else if($type == 0 && $_SESSION['usrid'] != $id)
{
$button ='<form method="post" action=""><input type="hidden" name="id" value="'.$id.'" class="idall" /><button class="btn btn-primary edit"><i class="fa fa-edit"></i>Edit</button>&nbsp;&nbsp;<button class="btn btn-danger delete"><i class="fa fa-trash"></i>Delete</button></form>&nbsp;&nbsp;'; 	
}
else if($type == 0 && $_SESSION['usrid'] == $id)
{
$button ='<form method="post" action=""><input type="hidden" name="id" value="'.$id.'" class="idall" /><button class="btn btn-primary edit"><i class="fa fa-edit"></i>Edit</button></form>&nbsp;&nbsp;'; 	
}


$allsuper .= '<tr class="gradeX">

<td>'.$s.'</td>
												<td>'.ucwords($firstname).'</td>
												<td>'.ucwords($lastname).'</td>
											 
												<td class="sort alpha">'.$email.'</td>
												<td class="sort alpha">'.$username.'</td>
												
												<td>'.$button.'</td>
											</tr>';
}
if($noofmerchant > 0)
{
$allsuper .= '</tbody>
									</table>';	
}
if($noofmerchant == 0)
{
$allsuper = "No results found";	
}
return $allsuper;
}







private function getsingleuser($userid)
{
$stmt = $this->__contruct()->prepare('select firstname,lastname from user_tbl where user_id=?');
$stmt->bind_param('d',$userid);
$stmt->execute();
$stmt->bind_result($firstname,$lastname);
$stmt->store_result();
$numrows = $stmt->num_rows();
if($numrows == 1)
{
$stmt->fetch();
$namefull = $firstname.' '.$lastname;
}
return $namefull;
}


private function gettheactiveplans()
{
global $allplan;
$stmt = $this->__contruct()->prepare('select plan_id,plan_name,plan_desc,user_id from plan_tbl');       
$stmt->execute();
$stmt->bind_result($id,$planname,$plantitle,$userid);
$stmt->store_result();
$noofmerchant = $stmt->num_rows();	
if($noofmerchant > 0)
{
$allplan = '<table  class="table table-striped table-hover " id="sample_1">
<thead>
<tr>
<th>S/N</th>
<th> Plan Name</th>
<th>Plan Title</th>
<th>Plan Author</th>
<th></th>								
<th >Action</th>
</tr>
</thead><tbody>';	
}
for($i=0; $i<$noofmerchant;$i++)
{
mysqli_stmt_fetch($stmt);
$s = $i + 1;	

$button = '<form method="post" action=""><input type="hidden" name="id" value="'.$id.'" class="idall" />
        <button class="btn btn-primary btn-large edit" style="padding:4px;"><i class="fa fa-edit"></i>Edit</button>&nbsp;
&nbsp;<button style="padding:4px;" class="btn btn-danger delete"><i class="fa fa-trash"></i>Delete</button>&nbsp;&nbsp;
</form>';	

$allplan .= '<tr class="gradeX">

<td>-</td>
<td>'.ucwords($planname).'</td>
    						 
   <td class="sort alpha">'.$plantitle.'</td>
	
            <td>'.$this->getsingleuser($userid).'</td>	
               <td class="sort alpha"></td>
	<td>'.$button.'</td>
											</tr>';
}
if($noofmerchant > 0)
{
$allplan .= '</tbody>
									</table>';	
}
if($noofmerchant == 0)
{
$allplan = "No results found";	
}
return $allplan;
}

public function myactiveplans()
{
global $myactiveplanlist;
$myactiveplanlist = $this->gettheactiveplans();
}

public function myactiveusers()
{
global $myactiveuserslist;
$myactiveuserslist = $this->gettheactiveusers();
}

public function myinactiveusers()
{
global $myinactiveuserslist;
$myinactiveuserslist = $this->gettheinactiveusers();

}

private function gettheinactiveusers()
{
global $allinactive;
$stmt = $this->__contruct()->prepare('select user_id,firstname,lastname,email,
type,username,status from user_tbl where status=?');
$mestat = 0;
$stmt->bind_param('d',$mestat);        
$stmt->execute();
$stmt->bind_result($id,$firstname,$lastname,$email,$type,$username,$status);
$stmt->store_result();
$noofmerchant = $stmt->num_rows();	
if($noofmerchant > 0)
{
$allinactive = '<table  class="table table-striped table-hover " id="sample_1">
<thead>
<tr>
<th>S/N</th>
<th> Name</th>
<th>Email</th>
<th>Username</th>
<th>Status</th>								
<th >Action</th>
</tr>
</thead><tbody>';	
}
for($i=0; $i<$noofmerchant;$i++)
{
mysqli_stmt_fetch($stmt);
$s = $i + 1;	

$button = '<form method="post" action=""><input type="hidden" name="id" value="'.$id.'" class="idall" />
        <button class="btn btn-primary edit" style="padding:6px;"><i class="fa fa-edit"></i>Edit</button>&nbsp;
&nbsp;<button style="padding:6px;" class="btn btn-danger delete"><i class="fa fa-trash"></i>Delete</button>&nbsp;&nbsp;
</form>';	


if($status == 1)
{
$stat = 'Active';    
}
else if($status == 0)
{
 $stat = 'Inactive';   
}

$allinactive .= '<tr class="gradeX">

<td>-</td>
<td>'.ucwords($firstname).' '.ucwords($lastname).'</td>
    						 
   <td class="sort alpha">'.$email.'</td>
	<td class="sort alpha">'.$username.'</td>
            <td>'.$stat.'</td>									
	<td>'.$button.'</td>
											</tr>';
}
if($noofmerchant > 0)
{
$allinactive .= '</tbody>
									</table>';	
}
if($noofmerchant == 0)
{
$allinactive = "No results found";	
}
return $allinactive;
}

private function gettheactiveusers()
{
global $allactive;
$stmt = $this->__contruct()->prepare('select user_id,firstname,lastname,email,
type,username,status from user_tbl');
//$mestat = 1;
//$stmt->bind_param('d',$mestat);        
$stmt->execute();
$stmt->bind_result($id,$firstname,$lastname,$email,$type,$username,$status);
$stmt->store_result();
$noofmerchant = $stmt->num_rows();	
if($noofmerchant > 0)
{
$allactive = '<table  class="table table-striped table-hover " id="sample_1">
<thead>
<tr>
<th>S/N</th>
<th> Name</th>
<th>Email</th>
<th>Username</th>
<th>Status</th>								
<th >Action</th>
</tr>
</thead><tbody>';	
}
for($i=0; $i<$noofmerchant;$i++)
{
mysqli_stmt_fetch($stmt);
$s = $i + 1;	

$button = '<form method="post" action=""><input type="hidden" name="id" value="'.$id.'" class="idall" />
        <button class="btn btn-primary edit" style="padding:6px;"><i class="fa fa-edit"></i>Edit</button>&nbsp;
&nbsp;<button style="padding:6px;" class="btn btn-danger delete"><i class="fa fa-trash"></i>Delete</button>&nbsp;&nbsp;
</form>';	


if($status == 1)
{
$stat = 'Active';    
}
else if($status == 0)
{
 $stat = 'Inactive';   
}

$allactive .= '<tr class="gradeX">

<td>-</td>
<td>'.ucwords($firstname).' '.ucwords($lastname).'</td>
    						 
   <td class="sort alpha">'.$email.'</td>
	<td class="sort alpha">'.$username.'</td>
            <td>'.$stat.'</td>									
	<td>'.$button.'</td>
											</tr>';
}
if($noofmerchant > 0)
{
$allactive .= '</tbody>
									</table>';	
}
if($noofmerchant == 0)
{
$allactive = "No results found";	
}
return $allactive;
}
public function findAdmin($username,$password)
{
global $msg;
$msg = $this->findSuper($username,$password);	
}

private function findSuper($username,$password)
{
$stmt = $this->__contruct()->prepare('select firstname,lastname,email,super_id,type from super_admin_tbl where username = ? AND password = ? LIMIT 1');	
$password = hash('sha512',$password);
$stmt->bind_param('ss',$username,$password);
$stmt->execute();
$stmt->bind_result($firstname,$lastname,$email,$id,$type);
$stmt->store_result();
$numrows = $stmt->num_rows();
if($numrows == 1)
{
$stmt->fetch();
$this->sessionstart();
$_SESSION['namefull'] = $lastname.' '.$firstname;
$_SESSION['email'] = $email;
$_SESSION['usrid'] = $id;
$_SESSION['type'] = $type;
$msg = 'found';	
//insertSuperlog($_SESSION['namefull'].' logged in');
}
if($numrows == 0)
{
$msg = 'notfound';	
}	
return $msg;
}


public function selectsinglesuperuser($id)
{
global $firstname,$lastname,$email,$username;
$this->selectsinglesuper($id);
$firstname=$firstname;
$lastname=$lastname;
$email = $email;
$username = $username;		
}

private function selectsinglesuper($id)
{
global $firstname,$lastname,$email,$username;
$stmt = $this->__contruct()->prepare('select firstname,lastname,email,username from super_admin_tbl where super_id=?');
$stmt->bind_param('d',$id);
$stmt->execute();
$stmt->bind_result($firstname,$lastname,$email,$username);
$stmt->store_result();
$numrows = $stmt->num_rows();
if($numrows == 1)
{
$stmt->fetch();
$firstname=$firstname;
$lastname=$lastname;
$email = $email;
$username = $username;	
}
}

public function selectsinglecustomerdetails($id)
{
global $firstname2,$lastname2,$email2,$sex,$phone,$address,$username2,$state,$country,$zipcode;
$this->selectsinglecustomer($id);
$firstname2 = $firstname2;
$lastname2 = $lastname2;
$sex = $sex;
$phone = $phone;
$address = $address;
$state = $state;
$country = $country;
$zipcode = $zipcode;
$email2 = $email2;
$username2 = $username2;
}

private function selectsinglecustomer($id)
{
global $firstname2,$lastname2,$email2,$sex,$phone,$address,$username2,$state,$country,$zipcode;
$stmt = $this->__contruct()->prepare('select firstname,lastname,sex,phone,address,state,country,
    zipcode,email,username from user_tbl where user_id=? LIMIT 1');
$stmt->bind_param('d',$id);
$stmt->execute();
$stmt->bind_result($firstname2,$lastname2,$sex,$phone,$address,$state,$country,$zipcode,$email2,$username2);
$stmt->store_result();
$numrows = $stmt->num_rows();
if($numrows == 1)
{
$stmt->fetch();
$firstname2 = $firstname2;
$lastname2 = $lastname2;
$sex = $sex;
$phone = $phone;
$address = $address;
$state = $state;
$country = $country;
$zipcode = $zipcode;
$email2 = $email2;
$username2 = $username2;
}

}


public function updateCustomer($firstname,$lastname,$gender,$mobileno,$address1,
        $email,$username,$password,$state,$country,$zipcode,$id)	
{
 global $msg;
 $done = $this->editCustomer($firstname, $lastname, $gender, $mobileno, $address1, 
         $email, $username, $password, $state, $country, $zipcode, $id);
 if($done)
 {
 $msg = "User Updated Successfully";    
 }
 elseif(!$done)
 {
 $msg="No changes was made";    
 }
}

private function editCustomer($firstname,$lastname,$gender,$mobileno,$address1,
        $email,$username,$password,$state,$country,$zipcode,$id)
{
 global $edited;   
 if($password == "")
 {
 $stmt = $this->__contruct()->prepare('update user_tbl set firstname=?,lastname=?,sex=?,
     phone=?,address=?,email=?,username=?,state=?,country=?,zipcode=? where user_id=?');
 $stmt->bind_param('sssssssssss',$firstname,$lastname,$gender,$mobileno,$address1,
        $email,$username,$state,$country,$zipcode,$id);
 }
 else if($password != "")
 {
    $stmt = $this->__contruct()->prepare('update user_tbl set firstname=?,lastname=?,sex=?,
     phone=?,address=?,email=?,username=?,state=?,country=?,zipcode=?,password=? where user_id=?');
    $password = hash('sha512',$password);
 $stmt->bind_param('ssssssssssss',$firstname,$lastname,$gender,$mobileno,$address1,
        $email,$username,$state,$country,$zipcode,$password,$id);  
 }
 $stmt->execute();
 $affected = $stmt->affected_rows;

 if($affected == 1)
 {
 $edited = TRUE;
 }
 else if ($affected == 0)
 {
 $edited = FALSE;    
 }
 return $edited;    
 }


} // end of class 





?>