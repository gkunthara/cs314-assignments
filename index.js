let showTodos = false
let showAlbums = false

$( document ).ready(function() {
    getData();
  });

function getData() {
    $.get('https://jsonplaceholder.typicode.com/users')
        .done((data) => {
        $.each(data, function(idx, el) {
            $('#users').append($(`
            <div class="user" id='main-${el.id}'>
                ${el.name} <br>
                ${el.email} <br>
                ${el.company.name} <br>
                <button id='${el.id}' class='todoBtn'>To Do</button>
                <button id='${el.id}' class='albumBtn'>Albums</button>
            </div>`));
        });
    })

    $('#users').on('click', '.todoBtn', function(){
        doTodo(this.id)
        
    });

    $('#users').on('click', '.albumBtn', function(){
        doAlbum(this.id)
    });
}

function doTodo(id){

    if(showTodos === false){
        let isCompleted = ""
        $.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .done((data) => {
            if(data.completed === false){
                isCompleted = "fas fa-times"
            }
            else{
                isCompleted = "fas fa-check"
            }
            $(`#main-${id}`).append($(`
            <div class='todos'>
            <h4>Todo</h4>
            ${data.title}<i class='${isCompleted}'></i>
            <br> <br>
             </div>`));
        })
        showTodos = true
        $(`.albums`).hide(500)
        showAlbums = false

    }
    else{
        $(`.todos`).hide(500)
        showTodos = false
    }
}

function doAlbum(id){

    if(showAlbums === false){
        $.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
        .done((data) => {
            $(`#main-${id}`).append($(`
            <div class='albums'>
            <h4>Albums</h4>

            ${data.title}
            <br> <br>
             </div>`));
        })
        showAlbums = true
        $(`.todos`).hide(500)
        showTodos = false

    }
    else{
        $(`.albums`).hide(500)
        showAlbums = false
    }
    
}