var smallBox = document.getElementById("smallBox");
var tool = document.getElementById("tool");
var bigBox = document.getElementById("bigBox");
var bigImg = document.getElementById("bigImg");
var inner2=document.getElementById("inner2");

smallBox.onmouseenter = function(){
    tool.className = "tool active";
    bigBox.className = "big-box active";
    inner2.className="inner2-hidden"
}

smallBox.onmouseleave = function(){
    tool.className = "tool";
    bigBox.className = "big-box";
    inner2.className="inner2-visible"
}

smallBox.onmousemove = function(e){
    var _e = window.event||e;
    var x = _e.clientX-this.offsetLeft-tool.offsetWidth/2;
    var y = _e.clientY-this.offsetTop*3-tool.offsetHeight/2;
    if(x<0){
        x = 0;
    }
    if(y<0){
        y = 0;
    }
    if(x>this.offsetWidth-tool.offsetWidth){
        x = this.offsetWidth-tool.offsetWidth;
    }
    if(y>this.offsetHeight-tool.offsetHeight){
        y = this.offsetHeight-tool.offsetHeight;
    }
    tool.style.left = x + "px";
    tool.style.top = y + "px";
    bigImg.style.left = -x*2 + "px";
    bigImg.style.top = -y*2 + "px";
}

function addin() {
    alert("商品已加入购物车");
}

function wishlist() {
    alert("商品加入心愿单");
}

function author() {
    window.location.href="search.html";
}

function authorin() {
    window.location.href="search-in.html";
}