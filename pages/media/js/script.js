const btnAdd = document.querySelector("#add");
const btnRmv = document.querySelector("#remove");
const btnCal = document.querySelector("#calc");
var txtAdd = document.querySelector("#addNumber");
var txtRes = document.querySelector("#resultado")
var pNum = document.querySelector("#numbers");

txtRes.disabled = true;

var numbers = [];

btnAdd.addEventListener("click", (event) => {
    event.preventDefault();
    txtAdd.focus();
    if (!txtAdd.value)
        return;
    numbers.push(parseFloat(txtAdd.value));
    pNum.innerHTML = numbers.join(", ");
    txtAdd.value = "";    
});

btnRmv.addEventListener("click", (event) => {
    event.preventDefault();
    txtAdd.focus();
    numbers.pop();
    pNum.innerHTML = numbers.join(", ");
});

btnCal.addEventListener("click", (event) => {
    event.preventDefault();
    if (numbers.length < 2) {
        txtRes.value = "Necessário mais de 2 números";
        return;
    }
    txtRes.value = media(numbers).toFixed(2);
});

function media(array) {
    let sum = 0;
    array.forEach((item) => {
        sum += item;
    });
    return sum / array.length;
}