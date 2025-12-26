document.addEventListener("DOMContentLoaded", () => {

    const bars = [
        { fillId: "xpFill", numId: "xpNum", current: 0, max: 100 },
        { fillId: "healthFill", numId: "healthNum", current: 0, max: 100 },
        { fillId: "hungerFill", numId: "hungerNum", current: 0, max: 100 }
    ];

    function updateBar(bar, amount) {
        bar.current = Math.min(bar.current + amount, bar.max);
        const percent = (bar.current / bar.max) * 100;

        const fillElem = document.getElementById(bar.fillId);
        const numElem = document.getElementById(bar.numId);

        fillElem.style.width = percent + "%";
        numElem.textContent = `${bar.current} / ${bar.max}`;

        if (bar.current === bar.max) {
            fillElem.classList.add("level-up");
            setTimeout(() => fillElem.classList.remove("level-up"), 300);
        }
    }

    updateBar(bars[0], 70);  // XP
    updateBar(bars[1], 50);  // Health
    updateBar(bars[2], 30);  // Hunger

});
