function random(number){
  return Math.floor(Math.random() * (number + 1));
}

const btn = document.querySelector("button");


 btn.addEventListener("click", xyz);

function xyz(e){
setTimeout(function(){
		const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
    e.target.style.backgroundColor = rndCol;
    xyz(e);
}, 500);
}
