window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
    // if(form.onsubmit)
    // {
    //     alert("SSSS");
    // }
}




function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var Keep_ID = document.forms["myForm"]["username"];
    var Keep_Pass = document.forms["myForm"]["password"];
    var Keep_ConPass = document.forms["myForm"]["password2"];
    var x = document.getElementById("errormsg"); 

    if(Keep_Pass.value != Keep_ConPass.value)
    {
        x.innerHTML =  "password ไม่ตรงกัน";
        return false;
    }
    else
    {
        alert("Hello  " + Keep_ID.value);
    }
}