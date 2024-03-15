$(document).ready(function () {
    $('#carrosel').slick({
        autoplay: true,
    });

    $('.hamb').click(function () {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DD)99999-9999'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: 'Sem pontos e traço'
    })

    $('#cep').mask('00000-000', {
        placeholder: 'Sem pontos e traço'
    })

    $('form').validate({
        rules: {
            nome: {required: true},
            email: {required: true, email: true},
            telefone: {required: true, minlength: 14},
            cpf: {required: true, minlength: 14},
            endereco: {required: true},
            cep: {required: true, minlength: 9}
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor, insira o seu telefone',
            email: 'Por favor, insira o seu E-mail'
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    });
})


document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const senha = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmarSenha').value;

        if (senha === confirmarSenha) {
            form.submit();
        } else {
            alert('As senhas não coincidem. Por favor, insira senhas iguais.');
        }
    });
});
