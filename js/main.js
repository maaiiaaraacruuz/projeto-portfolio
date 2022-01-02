// Declarando Variáveis
var btnContact = document.querySelector('.jl-btn-contact');
var toggleModal = document.querySelectorAll('.jl-toggle-modal');

//Page Preloader
window.addEventListener('load', function () {
    var pagePreloder = document.querySelector('.jl-preloader');
    pagePreloder.classList.add('jl-fade-out');
 
    setTimeout(function () {
        pagePreloder.style.display = 'none';
    }, 2000);
});




// Lógica para abrir e fechar o quadrado de contato
btnContact.addEventListener('click', function(){
    var boxContact = document.querySelector('.jl-contact-info');

    boxContact.classList.toggle('jl-is-open');

    this.classList.toggle('jl-change-icon');

});


// Abrindo e Fechando o formulário de Orçamento
for (var i = 0; i< toggleModal.length; i++) {
   toggleModal[i].addEventListener('click', function(){
        var overlay = document.querySelector('.jl-overlay');
        var modalOrcamento = document.querySelector('#jl-modal-orcamento');

        overlay.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-is-open');
        modalOrcamento.classList.toggle('jl-slide-top-in');
   });

}


// Animando elementos dos conteúdos do portfólio com Waypoints

var myScrollDown = document.querySelector('.jl-scroll-down');
var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function() {
        myScrollDown.classList.toggle('jl-fade-out');
    },
    offset: '80%'
  });





