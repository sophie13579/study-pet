document.addEventListener("DOMContentLoaded", () => {
  const xpFill = document.getElementById("xpFill");
  const xpNum = document.getElementById("xpNum");


let currentXP = 0;
let maxXP = 100;

function updateXP(amount) {
  currentXP = Math.min(currentXP + amount, maxXP);
  const percent = (currentXP / maxXP) * 100;

  xpFill.style.width = percent + "%";
  xpNum.textContent = `${currentXP} / ${maxXP}`;

  // Level-up visual
  if (currentXP === maxXP) {
    xpFill.classList.add("level-up");
    setTimeout(() => xpFill.classList.remove("level-up"), 300);
  }
}

updateXP(70);
});