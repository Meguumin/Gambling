let t;
let tic;
var kaching = new Audio('kaching.mp3');
var wah = new Audio('wah.mp3');
var click = new Audio('click.mp3');
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
    console.log(totalmoney);
    moneywon = Math.floor((Math.random() * moneymax));
    totalmoney = totalmoney + moneywon;    
    console.log(totalmoney);
	  const element = document.getElementById("id01");
	  element.innerHTML = "Total Money:" + totalmoney;
    t = totalmoney;
    if(moneywon > moneygamble)
    {
      kaching.play();
    }
    else{
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
},100)
  
}


function ChangeTheme() 
{ 
	let element = document.body;
	element.classList.toggle("coral");
}





   
