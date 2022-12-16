$(document).ready(function() {

        

    $('#telefone').mask('(00) 00000-0000');

    $('#cpf').mask('000.000.000-00');

    $('#cep').mask('00000-000');

    $('form').on('submit', function(e) {
        e.preventDefault();


    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required:true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome'
        },
        submitHandler: function(form) {
            document.querySelector('.success').style.display = "block"
                document.querySelector('.success').innerHTML = `Cadastro realizado com sucesso para <strong>${nome.value}</strong><br><br>E-mail: ${email.value}<br>Telefone: ${telefone.value}<br>CPF: ${cpf.value}<br><br>No seguinte endereço:<br><br>${endereco.value}<br>CEP: ${cep.value}<br><br><button type="button" class="concluir" onclick="botaoConcluir()">Concluir</button>`

        $('#nome').val('')
        $('#email').val('')
        $('#telefone').val('')
        $('#cpf').val('')
        $('#endereco').val('')
        $('#cep').val('')
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
                
            
        }
    })
})