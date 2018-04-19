function showlogin() {
    document.getElementsByName("username-l")[0].value="";
    document.getElementsByName("password-l")[0].value="";
    document.getElementById("login-div").style.visibility="visible";
}

function showsignin() {
    document.getElementById("sign").style.visibility="visible";
}
function loginbutton() {
    var username=document.getElementsByName("username-l")[0].value;
    var password=document.getElementsByName("password-l")[0].value;
    if(username===""){
        alert("用户名为空");
    }
    else if(username!=="username"){
        alert("用户名不存在");
    }
    else if(password===""){
        alert("密码为空");
    }
    else if(password!=="password"){
        alert("密码错误");
    }
    else{
        document.getElementById("login-div").style.visibility="hidden";
        document.getElementById("header-login").innerHTML="<i class='fa fa-user'></i> user123";
        document.getElementById("header-login").onclick=null;
        document.getElementById("header-register").innerHTML="<i class='fa fa-sign-out'></i> 登出";
        document.getElementById("header-register").onclick=logout;
        document.getElementById()
    }
}

function logout() {
    document.getElementById("header-login").innerHTML="登陆";
    document.getElementById("header-login").onclick=showlogin;
    document.getElementById("header-register").innerHTML="注册";
    document.getElementById("header-register").onclick=showsignin;
}

function checkname() {
    var username=document.getElementsByName("username-s")[0].value;
    if(username===""){
        document.getElementById("username-r").innerHTML="用户名为空";
        document.getElementById("username-r").style.color="red";
        document.getElementById("username-r").style.fontSize="10px";
        return false;
    }
    else if(username.length<6){
        document.getElementById("username-r").innerHTML="用户名长度不足";
        document.getElementById("username-r").style.color="red";
        document.getElementById("username-r").style.fontSize="10px";
        return false;
    }
    else{
        var p = /[0-9]/; var b = p.test(username);
        var q = /[a-z]/i; var c = q.test(username);
        if(b&&c){
            document.getElementById("username-r").innerHTML="";
            document.getElementById("username-r").style.color="red";
            document.getElementById("username-r").style.fontSize="10px";
            return true;
        }
        else{
            document.getElementById("username-r").innerHTML="用户名不符合格式，示例：user123";
            document.getElementById("username-r").style.color="red";
            document.getElementById("username-r").style.fontSize="10px";
            return false;
        }
    }
}

function checkpassword() {
    var password=document.getElementsByName("password-s")[0].value;
    var username=document.getElementsByName("username-s")[0].value;
    if(password===""){
        document.getElementById("password-r").innerHTML="密码为空";
        document.getElementById("password-r").style.color="red";
        document.getElementById("password-r").style.fontSize="10px";
        return false;
    }
    else if(username.length<6){
        document.getElementById("password-r").innerHTML="密码长度不足";
        document.getElementById("password-r").style.color="red";
        document.getElementById("password-r").style.fontSize="10px";
        return false;
    }
    else if(password===username) {
        document.getElementById("password-r").innerHTML="密码不能与用户名相同,示例：password123";
        document.getElementById("password-r").style.color="red";
        document.getElementById("password-r").style.fontSize="10px";
        return false;
    }
    else{
        document.getElementById("password-r").innerHTML="";
        document.getElementById("password-r").style.color="red";
        document.getElementById("password-r").style.fontSize="10px";
        return true;
    }
}

function checkpassword2() {
    var password=document.getElementsByName("password-s")[0].value;
    var password2=document.getElementsByName("password2")[0].value;
    if(password2===""){
        document.getElementById("password2-r").innerHTML="确认密码为空";
        document.getElementById("password2-r").style.color="red";
        document.getElementById("password2-r").style.fontSize="10px";
        return false;
    }
    else if(password===password2){
        document.getElementById("password2-r").innerHTML="";
        document.getElementById("password2-r").style.color="red";
        document.getElementById("password2-r").style.fontSize="10px";
        return true;
    }
    else{
        document.getElementById("password2-r").innerHTML="密码与确认密码不一致";
        document.getElementById("password2-r").style.color="red";
        document.getElementById("password2-r").style.fontSize="10px";
        return false;
    }
}

function checkphone() {
    var phone=document.getElementsByName("phone")[0].value;
    var r=/[0-9]{3}-[0-9]{8}/;
    if(phone===""){
        document.getElementById("phone-r").innerHTML="电话为空";
        document.getElementById("phone-r").style.color="red";
        document.getElementById("phone-r").style.fontSize="10px";
        return false;
    }
    else if(r.test(phone)){
        document.getElementById("phone-r").innerHTML="";
        document.getElementById("phone-r").style.color="red";
        document.getElementById("phone-r").style.fontSize="10px";
        return true;
    }
    else{
        document.getElementById("phone-r").innerHTML="格式错误，示例：021-46468965";
        document.getElementById("phone-r").style.color="red";
        document.getElementById("phone-r").style.fontSize="10px";
        return false;
    }
}

function cancelbutton() {
    document.getElementById("login-div").style.visibility="hidden";
}

function registerbutton() {
    if(checkname()&&checkpassword()&&checkpassword2()&&checkphone()){
        if(document.getElementsByName("username-s")[0].value==="user123"){
            alert("用户名已存在");
        }
        else{
            alert("注册成功");
            document.getElementById("sign").style.visibility="hidden";
        }
    }
}

function changepicture() {
    var img1=document.getElementById("img1");
    var img2=document.getElementById("img2");
    var window=document.getElementsByTagName("section")[0];
    var img=document.getElementsByClassName("on")[0];
    if(img.id=="img1"){
        img2.style.zIndex="-5";
        img2.style.left=0;
        img1.className="off";
        img2.className="on";
        setTimeout(function(){img1.style.left=window.offsetWidth+"px";},5000);
    }
    else{
        img2.style.zIndex="-15";
        img1.style.left=0;
        img2.className="off";
        img1.className="on";
        setTimeout(function(){img2.style.left=window.offsetWidth+"px";},5000);
    }
}
setInterval(changepicture,10000)
