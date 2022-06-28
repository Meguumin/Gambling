let t;
let tic;
tic = 0;
t = 20;
document.getElementById("output").innerHTML = "You earned " + tic + "$";
let element = document.getElementById("id01");
element.innerHTML = "Total Money:" + t; 
const counters = document.querySelectorAll('.counter');

function perform(totalmoney, moneywon, moneygamble, moneymax)
{ 
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





   
