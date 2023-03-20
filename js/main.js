let dontClickBTN = document.getElementById('botonBroma');

let x = 1


dontClickBTN.onmouseover = function () {
    if (x === 1) {
        x += 1
        dontClickBTN.style.left = "500px"
        dontClickBTN.style.transition = '0.4s'

    } else if (x === 2) {
        x += 1
        dontClickBTN.style.left = "100px"
        dontClickBTN.style.transition = '0.4s'

    } else if (x === 3) {
        x += 1
        dontClickBTN.style.left = "600px"
        dontClickBTN.style.transition = '0.4s'


    } else if (x === 4) {
        x -= 3
        dontClickBTN.style.left = "0px"
        dontClickBTN.style.transition = '0.4s'
    }
}

dontClickBTN.onclick = function() {
    alert('How? You are a cheater!')
} 
/* const button = document.getElementById("botonBroma");

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber(window.innerHeight - this.offsetHeight);
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);

    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
}; */