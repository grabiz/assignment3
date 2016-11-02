var $ = function(id){
	return document.getElementById(id);}
var signUp = function()
{
	var lastName = $("lastname").value;
	var firstName = $("firstname").value;
	var firstEmail = $("firstemail").value;
	var secondEmail = $("secondemail").value;
	var newPassword = $("newpassword").value;
	var isValid2 = true;
	if ((lastName == "") || (firstName == "") || (firstEmail== "") || (newPassword ==""))
	{
		alert("All field must be filled");
		isValid2 = false;
	}
	if ((lastName !=="") && (lastName.length >= 20))   
	{  
	   alert("Last name has maximum 20 characters !");
       isValid2 = false;
    }
	if ((firstName !=="") && (firstName.length >= 20))
    {
		alert("First name has maximum 20 characters !");
        isValid2 = false;
	}		
	if (secondEmail !== firstEmail)
	{
		alert("Two emails must be identical !!!");
		isValid2 = false;
	}
	if ((newPassword !=="") && (newPassword.length < 8))
	{
		alert ("Password must have at least 8 characters !! ");
		isValid2 = false;
	}
    if (isValid2)
	{
		
		alert("Welcome to facebook");
		$("reg2").submit();
	}
	
}
var logIn = function()
{
	var emailPhone = $("emailorphone").value;
	var typePassword = $("typepassword").value;
	var isValid = true;
	
	if ((emailPhone == "") || (typePassword ==""))	
	{  
	   alert("Quên mật khẩu ?");
       isValid = false;
    } 
    if (isValid)
	{
		
		alert("Đăng nhập thành công");
		$("reg").submit();
	    
	}
}
 window.onload = function()
{
	 $("signup").onclick = signUp; 
	 $("login").onclick = logIn; 
}
/* https://www.formget.com/how-to-create-pop-up-contact-form-using-javascript/ */