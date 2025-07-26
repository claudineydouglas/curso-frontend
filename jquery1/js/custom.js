// instancia jquery e evita conflitos
// jQuery (function($) {

$(document).ready(function() {

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag h4

    let itens = $('.featured') // class

    let destaques = $('#featured') // id

    console.log(titulos.first());

    // Cofiguração de produtos

$('.feature-item a').addClass('btn btn-dark stretch-link');

// $('feature-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
// $('feature-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
// $('feature-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
// $('.feature-item a').addClass('active'); // adicionar classe
// $('.feature-item a').removeClass('active'); // remover classe
// $('.feature-item a').addClass('active');
// $('.feature-item a').toggleClasse('active'); // pode ser ativado em algum evento
// $('.feature-item a').hide('active') //esconder elemento
// $('.feature-item a').show() // mostrar elemento
// $('.feature-item a').fadeIn(tempo) // efeito de transição (entrada)
// $('.feature-item a').fadeOut(tempo ex:2000=2segundos) // efeito de transição (saida)
// $('.feature-item a').css('color, #ff00') // controlar o css

$('.feature-item h4').dblclick(function(){

    $(this).css({ // passar mais propriedades como objeto
    'color': '#ff00',
    'background': '#ff00',
    'font-weight': '100',
});

});

//manipulação de evento

$('.featured-item a').on('blur', function(event){

    event.preventDefault();

    alert('pruduto esgotado');

})

})


