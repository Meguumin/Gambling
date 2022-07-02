let t;
let tic;
var sfx;
var kaching = new Audio('kaching.mp3');
var wah = new Audio('wah.mp3');
var click = new Audio('click.mp3');
interval = 50;
sfx = 1;
tic = 0;
t = 20;
document.getElementById("output").innerHTML = "You earned " + tic + "$";
let element = document.getElementById("id01");
element.innerHTML = "Total Money:" + t; 
const counters = document.querySelectorAll('.counter');
	let earned = document.Money;
 wah.volume = 0.4;
function perform(totalmoney, moneywon, moneygamble, moneymax)
{ 
 
  click.play();
  if(totalmoney >= moneygamble)
  {
    totalmoney = totalmoney - moneygamble;
   
    moneywon = Math.floor((Math.random() * moneymax));
    totalmoney = totalmoney + moneywon;    
    
	  const element = document.getElementById("id01");
	  element.innerHTML = "Total Money:" + totalmoney;
    t = totalmoney;
    if (moneywon > 20)
    {
      interval = 10;
    }
     if (moneywon <= 20)
    {
      interval = 50;
    }
    if(moneywon > moneygamble)
    {
   document.getElementById("output").style.color = "green";
      
      setTimeout(function(){
      document.getElementById("output").style.color = "black";
    }, 2000);
      kaching.play();     
     }
      
    
    else{
        document.getElementById("output").style.color = "red";
      
      setTimeout(function(){
      document.getElementById("output").style.color = "black";
    }, 2000);
       wah.play();
    }
    
  }
  

  // Counting animation
  var Money = document.querySelector(".Money")
var countOne = 0
function counterUp(){
    Money.innerHTML = "You earned " + countOne+ "$"
    countOne++
    if(countOne > moneywon){
        clearInterval(stop)
    }
}
var stop = setInterval(function(){
    counterUp()
},interval)
  
}


function ChangeTheme() 
{ 
  click.play();
	let element = document.body;
	element.classList.toggle("coral");
}

function sfxstate() 
{ 
  click.play();
 if (sfx == 0)//false
 {
   kaching.volume = 1;
   click.volume = 1;
   wah.volume = 0.4;
   sfx = 1;
   return;
 }
  if (sfx == 1)//true
 {
   kaching.volume = 0;
   click.volume = 0;
   wah.volume = 0;
   sfx = 0;
   return;
 }
}

function double(totalmoney){
  click.play();
  var x = document.getElementById("doublenum").value;
  var y;
   if(totalmoney >= x)
  {   
     y = Math.floor(Math.random() * 2 + 1); 
    if(y == 1){
       var Money = document.querySelector(".Money")
      Money.innerHTML = "you lost " + x + "$"
       totalmoney =  Number(totalmoney) - Number(x);     
      wah.play(); 
    }
    if(y == 2){
      var Money = document.querySelector(".Money")
      Money.innerHTML = "you earned " + x * 2 + "$"
      totalmoney = Number(totalmoney) + Number(x) * 2;
      kaching.play(); 
    }   
    t = totalmoney;
    const element = document.getElementById("id01");
	  element.innerHTML = "Total Money:" + totalmoney;  
  }
}





   
