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
        preco.val("5 a 10 mil ");
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
    if (tipo.val() == "B") {
        preco.val("10 a 15 mil");
        $(preco).prop("disabled", true);

        $(marca).empty();

        $(marca).append($('<option>', {
            value: 'bomba-poço1',
            text: 'bomba-poço1'
        }));

        $(marca).append($('<option>', {
            value: 'bomba-poço2',
            text: 'bomba-poço2'
        }));

        $(marca).append($('<option>', {
            value: 'bomba-poço3',
            text: 'bomba-poço3'
        }));

    }
    if (tipo.val() == "C") {
        preco.val("20 a 50 mil");
        $(preco).prop("disabled", true);

        $(marca).empty();

        $(marca).append($('<option>', {
            value: 'bomba-Hidraulica1',
            text: 'bomba-Hidraulica1'
        }));

        $(marca).append($('<option>', {
            value: 'bomba-Hidraulica2',
            text: 'bomba-Hidraulica2'
        }));

        $(marca).append($('<option>', {
            value: 'bomba-Hidraulica3',
            text: 'bomba-Hidraulica3'
        }));

    }
});
$("#botao").click(function () {

// $.ajax({
//     url: "http://localhost:9090",
// })


})