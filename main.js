
/*Realiza a função de esconder o form quando todo o documento estiver carregado.  
Quando o usuario clicar no botão de 'nova imagem' o form aparece.*/
$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
})

/* Quando o usuario  clicar no botão de 'cancelar' o form se esconde*/
    $('#botao-cancelar').click(function () {
        $('form').slideUp();
})

/* Quando o usuario clicar em 'adionar' será adicionado uma nova imagem a paritr da URL inserida. */
    $('form').on('submit', function(e){
        e.preventDefault();
            
        /* Retorna o valor html , ao clicar no 'ver em tamanho original, o usuario e encaminhado a pagina da imagem. */
            const enderecoNovaImagem = $('#endereco-nova-imagem').val();
            const novoItem = $('<li style= "display: none" ></li>');
            $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem);

            /* Adicionando uma nova imagem ao Layout. */
            $(`<div  class="overlay-imagem-link">
                <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real.">
                Ver imagem em tamanho real.
                </a>
            </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(2000); /*Efeito ao adicionar imagem */
            $('#endereco-nova-imagem').val('');
            /* Limpa o form ao adicionar uma nova imagem. */
    })
})