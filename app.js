alert("Dùng A D để di chuyển hoặc < > để di chuyển :V");

var canvas = document.querySelector('#myGame');
var context = canvas.getContext('2d');
var btn = document.querySelector('#btn');
var lose = document.querySelector('#lose');
var bx = document.querySelector('.bx');
var x = 20;
var y = 20;

var d = 20;
var z = 20;

var dd = 0.2;
var dz = 0.4;

var dx = 0.5;
var dy = 0.9;
var index = 0;
function run(){

    context.beginPath();
    context.arc(x,y,10,0,Math.PI*2)
    context.fillStyle = 'green';
    context.fill();
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(d,z,10,0,Math.PI*2)
    context.fillStyle = 'red';
    context.fill();
    context.stroke();
    context.closePath();

}
function  hihi(){
    context.clearRect(0,0,canvas.width, canvas.height);
    run();
    if(x < 10 || x > canvas.width - 10  ){
        dx = -dx;

    }
    if(y < 10 || y > canvas.height - 10  ){
        dy = -dy;

    }
    if(d < 10 || d > canvas.width - 10){dd = -dd;}
    if(z < 10 || z > canvas.height - 10){dz = -dz;}
    x+=dx;
    y+=dy;
    d+=dd;
    z+=dz;
    var hihi = btn.getBoundingClientRect();

    if(x >= (hihi.x+100) && y >= (canvas.height-10) || x <= (hihi.x) && y >= (canvas.height-10)){
        lose.style.transform = 'translateY(0)';
    }
    if(d >= (hihi.x+100) && z >= (canvas.height-10) || d <= (hihi.x) && z >= (canvas.height-10)){
        lose.style.transform = 'translateY(0)';
    }
}
setInterval(hihi,1);


addEventListener('keydown',function (e){

    if(e.code == "ArrowLeft" || e.code == "KeyA"){
        if( index >= 20){
            btn.style.transform = "translateX("+(index-=20)+"px)";
        }
    }

    if(e.code == "ArrowRight" || e.code == "KeyD"){
        if(index == canvas.clientWidth-110){
        }else {
            btn.style.transform = "translateX("+(index+=20)+"px)";
        }
    }
});
bx.addEventListener('click',function (){
    lose.style.transform = 'translateY(-300%)';
});





