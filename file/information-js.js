function incharge(){
    var num=prompt("充值金额：","");
    if(!isNaN(num)&&num!=0){
        alert("充值成功");
        var oldvalue=document.getElementById("remain");
        var value=oldvalue.innerHTML;
        oldvalue.innerHTML=parseInt(num)+parseInt(value);
    }else{
        alert("输入非法");
    }
}
