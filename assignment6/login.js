window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
	
}


function checkLogin(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const ID = urlParams.get('username')
	const Pass = urlParams.get('password')
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var Check_ID = document.forms["myLogin"]["username"];
    var Check_Pass = document.forms["myLogin"]["password"];
	// alert(ID);
	if(Check_ID.value !=  ID)
	{
		alert("username หรือ password ไม่ถูกต้อง!!!");
		return false;
	}
	else if(Check_Pass.value != Pass)
	{
		alert("username หรือ password ไม่ถูกต้อง!!!");
		return false;
	}
	else{
		alert("Welcome back " + Check_ID.value + "!!!");
	}
}

			