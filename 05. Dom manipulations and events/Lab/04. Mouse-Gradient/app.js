function attachGradientEvents() {
  let resultElement = document.getElementById('result');
  let gradientElement = document.getElementById('gradient');
  gradientElement.addEventListener('mousemove', gradientMousemoveHanddler);

  function gradientMousemoveHanddler (e){
      let percent = Math.floor((e.offsetX / 300) * 100);
      resultElement.textContent = `${percent}%`
  }
}

//e.target.offsetWidth