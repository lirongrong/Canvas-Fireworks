 
function Canvas (options) {
    var self = this;
    var defaults = {
        dot_number : 20,
        dot_r:5
    }
    self.options = $.extend(defaults,options);
};

Canvas.prototype.init = function(){
    var self = this;
    for(var i = 0; i< self.options.dot_number; i++){ 
        console.log(self.options.dot_r);
        firework = new Firework(i,20,20,this.options.dot_r);   
    } 
};
//绘制烟花
function Firework(i,x,y,r){
    this.c = document.getElementById("canvas");
    this.ctx = this.c.getContext("2d");
    this.ctx.beginPath();
    this.ctx.arc(x,y,r,0,2*Math.PI);
    this.ctx.stroke();
}


//随机生成十六进制颜色
function randomHexColor() { 
    var hex = Math.floor(Math.random() * 16777216).toString(16); //生成ffffff以内16进制数
    while (hex.length < 6) { //while循环判断hex位数，少于6位前面加0凑够6位
        hex = '0' + hex;
    }
    return '#' + hex; //返回‘#'开头16进制颜色
}
 