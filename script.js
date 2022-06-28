let t;
let tic;
tic = 0;
t = 20;
document.getElementById("output").innerHTML = "you earned " + tic + "$";
let element = document.getElementById("id01");
element.innerHTML = "Total Money:" + t; 
const counters = document.querySelectorAll('.counter');

function perform(m, mw, mg, mm)
{ 
  if(m >= mg)
  {
    m = m - mg;
    mw = Math.floor((Math.random() * mm) + 1);
    m = mw + m;
	  document.getElementById("output").innerHTML = "You earned " + mw + "$";
	  const element = document.getElementById("id01");
	  element.innerHTML = "Total Money:" + m;
  }

  
  var workExperience = document.querySelector(".Money")
var countOne = 0
function counterUp(){
    workExperience.innerHTML = countOne
    countOne++
    if(countOne > workExperience.dataset.textone){

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





   
