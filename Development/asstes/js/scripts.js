let counter = document.querySelector("#countButton");
const resetCount = document.querySelector("#reset");

// أكمل
// const athkar =

// const randomThekr = document.querySelector("#athkar");

// document.getElementById('btn-thekr').innerHTML = randomThekr
// // count عرف متغير
// document.getElementById('athkar').innerHTML = athkar;

// // decreaseCount.addEventListener("click", decrementCounter);
// resetCount.addEventListener("click", resetCounter);

// randomThekr.addEventListener("click", changeDisplayedThekr);
let athkars = ["سبحان الله", "الحمدلله", "الله اكبر"];


// 
let count = 10;
function decrementCounter() {
count = counter.innerHTML;

if (count != 0){
  count = count - 1;
}
counter.innerHTML = count;
  // أكمل
  // أضف خواص للقيمة داخل زر العداد حتى لا تظهر فجأة ولكن بالتدريج
}

// Hide


function resetCounter() {
  counter.innerHTML = 10 ;
}

// Hide

let count2 = 0
function changeDisplayedThekr() {
let random = Math.floor(Math.random() *athkars.length);
  document.getElementById('athkar').innerHTML = athkars[random];
  }
  
//  // let athkars = math.floor(math.floor()*athkars.length)
  // console.log(random)


  // let random = Math.floor(Math.random)()*athkars.length)