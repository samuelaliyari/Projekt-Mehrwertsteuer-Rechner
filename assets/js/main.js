
const nettoBrutto = document.body.querySelector("#nToB");
const bruttoNetto = document.body.querySelector("#bToN");
const inputModeText = document.body.querySelector("#inputMode");
const outputTitle = document.body.querySelector("#resultMode");




// ===============================================================
//                          ModeChanger
// ===============================================================

bruttoNetto.addEventListener("change", () => {
    let bToN = bruttoNetto.checked;
    if (bToN) {
        inputModeText.textContent = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro"
        outputTitle.textContent = "Nettobetrag"
    }
})

nettoBrutto.addEventListener("change", () => {
    const nToB = nettoBrutto.checked;
    if (nToB) {
        
        inputModeText.textContent = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro"
        outputTitle.textContent = "Bruttobetrag"
    }
})



// ===============================================================
//                          Calculator
// ===============================================================

const inputAmount = document.body.querySelector("#inputSumme");
const taxOutput = document.body.querySelector("#taxResult");
const result = document.body.querySelector("#betrag");
const button = document.body.querySelector("button");





button.addEventListener("click", () => {
    const nineTeen = document.body.querySelector("#nineTeen");
    const seven = document.body.querySelector("#seven");
    const userInput = Number(inputAmount.value); 
    if (nettoBrutto.checked) {
        if (nineTeen.checked) {
            taxOutput.textContent = parseFloat(userInput * 0.19).toFixed(2) + "€";
            result.textContent = parseFloat(((userInput * 0.19) + userInput )).toFixed(2) + "€"
        }
        if (seven.checked) {
            taxOutput.textContent = parseFloat(userInput * 0.07).toFixed(2) + "€";
            result.textContent = parseFloat(((userInput * 0.07) + userInput)).toFixed(2) + "€"
        }
    }
    if (bruttoNetto.checked){
        if (nineTeen.checked) {
            taxOutput.textContent = parseFloat((userInput- (userInput / 1.19))).toFixed(2) + "€"
            result.textContent = parseFloat(userInput / 1.19).toFixed(2) + "€";
        }
        if (seven.checked) {
            taxOutput.textContent = parseFloat(( userInput - (userInput / 1.07))).toFixed(2) + "€"
            result.textContent = parseFloat(userInput / 1.07).toFixed(2) + "€";
        }
    }
}
)
