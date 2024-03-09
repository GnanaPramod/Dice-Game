//FOR FIRST PLAYER
var istrue=true;
document.querySelectorAll(".game")[0].addEventListener("click",function(){  
if(istrue){
   var a=Math.floor(Math.random()*6)+1;
   var randomimage="Dice"+a+".png";
   var img1=document.querySelectorAll("img")[0];
   img1.setAttribute("src",randomimage);
   var p1='player1';
   var i=0;
   add(p1,a,i);
   document.querySelector(".first").style.visibility="hidden";
   document.querySelector(".second").style.visibility="visible";
   istrue=false;
}

});
//FOR SECOND PLAYER
document.querySelectorAll(".game")[1].addEventListener("click",function(){
    if(!istrue){  
    var a=Math.floor(Math.random()*6)+1;
    var randomimage="Dice"+a+".png";
    var img1=document.querySelectorAll("img")[1];
    img1.setAttribute("src",randomimage);
    var p2="player2";
    var i=1;
    add(p2,a,i);
    document.querySelector(".second").style.visibility="hidden";
    document.querySelector(".first").style.visibility="visible";
    istrue=true;
    }   
 });  
var sum=0;
var s=0;
function add(p,a,i){
     var s1=a;
     sum=sum+s1;
     if(sum<100){
          s=sum;  
     }   
     if(sum==100){
         s=sum;
         if(p=="player1"){
            p1();
         }
         else{
            p2();
         }
     }
     else{
         if(sum>100){
             sum=s;
         }
     }
     document.querySelectorAll("h4")[i].innerHTML="Your Score is "+ s;
 }
 function p1(){
    document.getElementById("1").innerHTML="Congratulations you have won";
    
 }
 function p2(){
    document.getElementById("2").innerHTML="Congratulations you have won";
 }