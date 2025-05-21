// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicador");
const multiplicationTable = document.querySelector("#multiplication-operations");
const multiplicationTitle = document.querySelector("#multiplication-title span");

// Função para gerar a tabuada
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = ""; // Limpa a tabuada anterior

    for (let i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        const template = `<div class="row">
            <div class="operation">${number} x ${i} =</div>
            <div class="result">${result}</div>
         </div>`;

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerText = number;
};

// Evento no formulário
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) return;

    multiplicationTitle.textContent = multiplicationNumber;
    createTable(multiplicationNumber, multiplicatorNumber);
});
