$('form').on('submit', function(e) {
    e.preventDefault();


const inputTarefa=$('#nova-tarefa').val();
const novaTarefa =$(`<li class="texto-tarefa">${inputTarefa}</li>`);

// document.querySelector('.lista-vazia').style.display = 'none';
$(".lista-vazia").css("display", "none");

    $(novaTarefa).appendTo('ul');
    $('#nova-tarefa').val('');
    $(novaTarefa).click(function(){
        $(novaTarefa).css("text-decoration", "line-through");
    })


})