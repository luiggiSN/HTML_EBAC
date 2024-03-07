const form = document.getElementById('meuFormulario');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const campoA = parseInt(document.getElementById('campoA').value);
    const campoB = parseInt(document.getElementById('campoB').value);

    if (campoB > campoA) {
        mensagem.textContent = 'Formulário válido: Número B é maior que o número A.';
        mensagem.style.color = 'green';
    } else {
        mensagem.textContent = 'Formulário inválido: Número B precisa ser maior que o número A.';
        mensagem.style.color = 'red';
    }
});
