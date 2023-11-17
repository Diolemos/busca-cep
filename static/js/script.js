let searchBtn = document.querySelector("button");
let display = document.querySelector(".result-display");
let inputField = document.querySelector("input");

const updateDisplay = (display, data) => {
    display.innerText = JSON.stringify(data, null, 2);
};

async function getCep() {
    let cep = inputField.value;
    let Url = `https://viacep.com.br/ws/${cep}/json/`;
    let response = await fetch(Url, { mode: "cors" });
    let cepData = await response.json();
    updateDisplay(display, cepData);
}

searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    // Check if the input value contains only numbers
    if (!/^\d+$/.test(inputField.value)) {
        alert("Insira apenas números no cep");
        return;
    }

    await getCep();
});

