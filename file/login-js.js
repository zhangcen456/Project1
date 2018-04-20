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
    var inputCode = document.getElementById("codeinput").value.toUpperCase(); //取得输入的验证码并转化为大写
    if(username===""){
        alert("用户名为空");
    }
    else if(username!=="user123"){
        alert("用户名不存在");
    }
    else if(password===""){
        alert("密码为空");
    }
    else if(password!=="password"){
        alert("密码错误");
    }
    else if(inputCode.length <= 0){
        alert("请输入验证码！");
        createCode();
    }
    else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时
        alert("验证码输入错误！"); //则弹出验证码输入错误
        createCode();//刷新验证码
        document.getElementById("codeinput").value = "";//清空文本框
    }else {
        alert("登陆成功");
        document.getElementById("login-div").style.visibility="hidden";
        if(document.getElementById("headline-in")){
            document.getElementById("headline-in").style.visibility="hidden";
        }
        else{
            document.getElementById("headline").style.visibility="hidden";
        }
        document.getElementById("username-h").innerHTML="<i class='fa fa-user'></i> user123";
        document.getElementById("logout-h").onclick=logout;
    }
}

function logout() {
    if(document.getElementById("headline-in")){
        document.getElementById("headline-in").style.visibility="visible";
    }
    else{
        document.getElementById("headline").style.visibility="visible";
    }
    document.getElementById("username-h").innerHTML="<i class='fa fa-user'></i> 未登录";
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
    else if(password.length<6){
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
            var inputCode = document.getElementById("codeinput-s").value.toUpperCase(); //取得输入的验证码并转化为大写
            if(inputCode.length <= 0) { //若输入的验证码长度为0
                alert("请输入验证码！"); //则弹出请输入验证码
                createCodes();
            }else if(inputCode != codes ) { //若输入的验证码与产生的验证码不一致时
                alert("验证码输入错误！"); //则弹出验证码输入错误
                createCodes();//刷新验证码
                document.getElementById("codeinput-s").value = "";//清空文本框
            }else if(document.getElementsByName("username-s")[0].value==="user123"){
                alert("用户名已存在");
            }
            else{
                alert("注册成功");
                document.getElementById("sign").style.visibility="hidden";
            }
        }
    // if(checkphone()&&checkpassword2()&&checkpassword()&&checkname()){
    //     document.getElementById("sign").style.visibility="hidden";
    //     if(document.getElementById("headline-in")){
    //         document.getElementById("headline-in").style.visibility="hidden";
    //     }
    //     else{
    //         document.getElementById("headline").style.visibility="hidden";
    //     }
    //     document.getElementById("username-h").innerHTML="<i class='fa fa-user'></i> user123";
    //     document.getElementById("username-h").href="information-in.html";
    // }
}

function search() {
    window.event.returnValue=false;
    var input=document.getElementsByName("searchbox")[0].value;
    if(input===""||input===undefined){
        document.location.href="search-empty.html";
    }
    else{
        window.location.href="search.html";
    }
}

function searchin() {
    var box=document.getElementsByName("searchbox");
    var input=box[0].value;
    if(input===""||input===undefined){
        window.location.href="search-empty-in.html";
    }
    else{
        window.location.href="search-in.html";
    }
}

var code ; //在全局定义验证码
var codes;

function createCode(){
    code = "";
    var codeLength = 4;//验证码的长度
    var checkCode = document.getElementById("code");
    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
        'S','T','U','V','W','X','Y','Z');//随机数
    for(var i = 0; i < codeLength; i++) {//循环操作
        var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
        code += random[index];//根据索引取得随机数加到code上
    }
    checkCode.value = code;//把code值赋给验证码
}
function createCodes(){
    codes = "";
    var codeLength = 4;//验证码的长度
    var checkCode = document.getElementById("code-s");
    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
        'S','T','U','V','W','X','Y','Z');//随机数
    for(var i = 0; i < codeLength; i++) {//循环操作
        var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
        codes += random[index];//根据索引取得随机数加到code上
    }
    checkCode.value = codes;//把code值赋给验证码
}
//校验验证码
function validate(){
    var inputCode = document.getElementById("input").value.toUpperCase(); //取得输入的验证码并转化为大写
    if(inputCode.length <= 0) { //若输入的验证码长度为0
        alert("请输入验证码！"); //则弹出请输入验证码
    }else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时
        alert("验证码输入错误！@_@"); //则弹出验证码输入错误
        createCode();//刷新验证码
        document.getElementById("input").value = "";//清空文本框
    }else { //输入正确时
        alert("合格！^-^");
    }
}