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
		alert("Phải điền đầy đủ thông tin không được để trống");
		isValid2 = false;
	}
	if ((lastName !=="") && (lastName.length >= 20))   
	{  
	   alert("Họ phải có ít hơn 20 ký tự!");
       isValid2 = false;
    }
	if ((firstName !=="") && (firstName.length >= 20))
    {
		alert("Tên phải có ít hơn 20 ký tự!");
        isValid2 = false;
	}		
	if (secondEmail !== firstEmail)
	{
		alert("Mail không trùng khớp !!!");
		isValid2 = false;
	}
	if ((newPassword !=="") && (newPassword.length < 8))
	{
		alert ("Mật khẩu phải có ít nhất 8 ký tự!! ");
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
	
	if ((emailPhone == "") && (typePassword ==""))	
	{  
	   alert("Lần đầu sử dụng hãy đăng ký");
           isValid = false;
        }
        else 
            {if ((emailPhone == "")||(typePassword ==""))
                 {
                     alert("Quên email hay mật khẩu ?");
                     isValid = false;
                 }
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
