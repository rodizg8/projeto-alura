const inputSenha = document.querySelector('#password');
const valorComprimento = document.querySelector('#comprimento');
const valorEntropia = document.querySelector('#entropia');
const statusSeguranca = document.querySelector('#status');

function calcularTamanhoAlfabeto(senha) {
    let tamanho = 0;
    if (/[a-z]/.test(senha)) tamanho += 26;
    if (/[A-Z]/.test(senha)) tamanho += 26;
    if (/[0-9]/.test(senha)) tamanho += 10;
    if (/[^a-zA-Z0-9]/.test(senha)) tamanho += 32;
    return tamanho;
}

inputSenha.addEventListener('input', () => {
    const senha = inputSenha.value;
    const tamanhoSenha = senha.length;
    valorComprimento.textContent = tamanhoSenha;

    if (tamanhoSenha === 0) {
        valorEntropia.textContent = "0.00";
        statusSeguranca.textContent = "Vazia";
        statusSeguranca.style.color = "#000";
        return;
    }

    const tamanhoAlfabeto = calcularTamanhoAlfabeto(senha);
    const entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    valorEntropia.textContent = entropia.toFixed(2);

    if (entropia < 35) {
        statusSeguranca.textContent = "Muito Fraca 🔴";
        statusSeguranca.style.color = "#ff4d4d";
    } else if (entropia >= 35 && entropia < 60) {
        statusSeguranca.textContent = "Média 🟡";
        statusSeguranca.style.color = "#ffaa00";
    } else {
        statusSeguranca.textContent = "Forte e Segura 🟢";
        statusSeguranca.style.color = "#00cc66";
    }
});
