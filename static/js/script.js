let searchBtn = document.querySelector("button");
let display = document.querySelector(".result-display");
let inputField = document.querySelector("input");

const updateDisplay = (display, data) => {
    // Display only specific properties in the HTML
    display.innerHTML = `
        <p><strong>Logradouro:</strong> ${data.logradouro}</p>
        <p><strong>UF:</strong> ${data.uf}</p>
        <p><strong>Bairro:</strong> ${data.bairro}</p>
        <p><strong>Localidade:</strong> ${data.localidade}</p>
    `;
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
        alert("Please enter only numeric values for the CEP.");
        return;
    }

    await getCep();
});
