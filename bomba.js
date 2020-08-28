$(document).ready(function () {
    $("#formulario").validate({
        /* REGRAS DE VALIDAÇÃO DO FORMULÁRIO */
        rules: {
            nome: {
                required: true, /* Campo obrigatório */
                minlength: 5    /* No mínimo 5 caracteres */
            },
            email: {
                required: true, /* Campo obrigatório */
                email: true     /* Deverá ser um email válido */
            },

        },
        /* DEFINIÇÃO DAS MENSAGENS DE ERRO */
        messages: {
            nome: {
                required: "Preencha o campo <u>Nome</u>",
                minlength: "O campo <u>Nome</u> deve conter no mínimo 5 caracteres"
            },
            email: {
                required: "Preencha o campo <u>Email</u>",
                email: "O campo <u>Email</u> só aceita emails válidos"
            },

        }
    });
});
//MASCARA DE TELEFONE
$('#fone').inputmask('(99) 9999[9]-9999');

var tipo = $("#inputTipo");
var marca = $("#inputMarca");
var preco = $("#inputPreco");

$("#inputTipo").click(function () {
    if (tipo.val() == "A") {
        preco.val("20 a 30 mil");
        $(preco).prop("disabled", true);

        $(marca).empty();

        $(marca).append($('<option>', {
            value: 'piscina1',
            text: 'piscina1'
        }));


        $(marca).append($('<option>', {
            value: 'piscina2',
            text: 'piscina2'

        }));

        $(marca).append($('<option>', {
            value: 'piscina3',
            text: 'piscina3'
        }));


    }


});
