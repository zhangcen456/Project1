var i=2;
function deleteitem1() {
    alert("删除成功");
    document.getElementById("item1").style.display="none";
    i--;
    checkitem()
}
function deleteitem2() {
    alert("删除成功");
    document.getElementById("item2").style.display="none"
    i--;
    checkitem();
}
function checkitem() {
    if(i==1){
        document.getElementById("cashbutton").innerHTML="结款：$120";
    }
    if(i==0){
        document.getElementById("cashbutton").innerHTML="结款：$0";
    }
}