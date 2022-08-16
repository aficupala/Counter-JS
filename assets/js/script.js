let count = document.createElement('count');
count.id= 'count';
count.innerText = '0';

let buttonPlus = document.createElement('button');
buttonPlus.id= 'buttonPlus';
buttonPlus.innerText = '+';


let buttonReset = document.createElement('button');
buttonReset.id= 'buttonReset';
buttonReset.innerText = 'ReseT';

let buttonMinus = document.createElement('button');
buttonMinus.id= 'buttonMinus';
buttonMinus.innerText = '-';


let countValue = 0;



  buttonPlus.addEventListener("click", function(event){
  countValue += 1;
  count.innerHTML= countValue;
  count.style.color='black';

})



  buttonReset.addEventListener("click", function(event){
  countValue = 0;
  count.innerHTML= countValue;
  count.style.color='white';

})



  buttonMinus.addEventListener("click", function(event){
  countValue -= 1;
  count.innerHTML= countValue;
  count.style.color='green';

})

document.getElementById("counter").appendChild(count);
document.getElementById("counter").appendChild(buttonPlus);
document.getElementById("counter").appendChild(buttonReset);
document.getElementById("counter").appendChild(buttonMinus);
