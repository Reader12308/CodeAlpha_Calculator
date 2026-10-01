const Buttons = document.querySelectorAll("button");
const Display = document.querySelector(".display");

const printableKeys = new Set([
    '0','1','2','3','4','5','6','7','8','9',
    '+','-','/','*'
]);


for (const button of Buttons) {
    button.addEventListener("click",function () {
        const val = button.innerText;

    if(val == "C") {
        Display.innerText = "";
    } else if(val == "=") {
        Display.innerText = eval(Display.innerText);
    } else if(val === "Back") {
        Display.innerText = Display.innerText.slice(0,-1);
    } else {
        Display.innerText += val;
    }
        });
}

        document.addEventListener("keydown",(e) => {
            // 5if(e.ctrlKey || e.metaKey || e.altKey) return;

            if(printableKeys.has(e.key) || e.key === 'Backspace' || e.key === 'Enter' || e.key === 'Escape' || e.key === '=') {
                e.preventDefault();
            }

            if(printableKeys.has(e.key)) {
                Display.innerText += e.key;
            } else if(e.key === 'Backspace') {
                Display.innerText = Display.innerText.slice(0,-1);
            } else if(e.key === 'Escape') {
                Display.innerText = "";
            } else if(e.key === 'Enter' || e.key === "=") {
                Display.innerText = eval(Display.innerText);
            }

        })
