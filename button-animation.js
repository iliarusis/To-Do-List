const buttonClick = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(0) scale(0.9)" },
];

const buttonTiming = {
  duration: 100,
  iterations: 1,
};

const binButton = document.querySelector("#bin");

if (binButton) {
  binButton.addEventListener("click", () => {
    binButton.animate(buttonClick, buttonTiming);
  });
}
