const increase = document.querySelector(".btnIncrease");
const decrease = document.querySelector(".btnDecrease");
const reset = document.querySelector(".btnReset");
let label = document.querySelector(".label");

let total = 0;

increase.addEventListener("click", () => {
    total += 1;
    label.textContent = total;
    checkNumberApplyColor(Number.parseInt(label.textContent));
});

decrease.addEventListener("click", () => {
    total -= 1;
    label.textContent = total;
    checkNumberApplyColor(Number.parseInt(label.textContent));
});

reset.addEventListener("click", () => {
    total = 0;
    label.textContent = total;
    checkNumberApplyColor(Number.parseInt(label.textContent));
});

function checkNumberApplyColor(currentNumber) {
    if(currentNumber>0) {
        label.style.color = "green"
    } else if(currentNumber<0) {
        label.style.color = "red"
    } else {
        label.style.color = "black"
    }
}