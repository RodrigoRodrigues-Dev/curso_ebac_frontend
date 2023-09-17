$(document).ready(function() {

    $('#CPF').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    })
    $('#telefone').mask('(00) 00000-0000',)
    $('#CEP').mask('00000-000', {
        placeholder: '_____-___'
    })

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            CPF: {
                required: true
            },
            CEP: {
                required: true
            },
            endereco: {
                required: true
            },
        },
        messages: {
            name: 'Por favor, Insira o seu nome',
            email: 'Por favor, Insira o seu E-mail',
            telefone: 'Por favor, Insira o seu Telefone',
            CPF: 'Por favor, Insira o seu CPF',
            CEP: 'Por favor, Insira o seu CEP',
            endereco: 'Por favor, Insira o seu Endereço Completo',
        },
    })
})