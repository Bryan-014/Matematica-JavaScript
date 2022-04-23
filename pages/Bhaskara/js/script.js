let haveErrors = false;
var txtResult = document.querySelector("#result");
txtResult.disabled = true;

function calculate() {
    haveErrors = false;
    validEmptyTextBoxes();

    let a = parseFloat(document.getElementById("inputA").value.replace(",", "."));
    let b = parseFloat(document.getElementById("inputB").value.replace(",", "."));
    let c = parseFloat(document.getElementById("inputC").value.replace(",", "."));

    if (a == 0) {
        txtResult.value = "O valor de \"A\" não pode ser 0";
        haveErrors = true;
    }

    if (haveErrors) {
        return;
    }

    let rootDelt = Math.sqrt(calculateDelt(a, b, c));

    if (haveErrors) {
        return;
    }

    let doubleA = 2 * a;

    let XOne = calculateX(b, rootDelt, doubleA, "positive");
    let XTwo = calculateX(b, rootDelt, doubleA, "negative");

    txtResult.value = "O valor de x¹ é: " + XOne + " e o valor de x² é: " + XTwo;
}
function calculateDelt(varA, varB, varC) {
    let squareB = varB * varB;
    let delt = squareB - 4 * varA * varC;
    if (delt < 0) {
        txtResult.value = "O valor de delta não pode ser negativo!";
        haveErrors = true;
    }
    return delt;
}
function calculateX(varB, delt, varA, operation) {
    let up = 0;
    if (operation == "positive") {
        up = - varB + delt;
    } else if (operation == "negative") {
        up = - varB - delt;
    }
    return up / varA;
}
function validEmptyTextBoxes() {
    if (document.getElementById("inputA").value == "") {
        document.getElementById("inputA").value = 0;
    }
    if (document.getElementById("inputB").value == "") {
        document.getElementById("inputB").value = 0;
    }
    if (document.getElementById("inputC").value == "") {
        document.getElementById("inputC").value = 0;
    }
}