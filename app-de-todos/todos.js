var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


//transformando de volta em array com o .parse / caso n tenha nenhum valor ele torna vazio
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';
    //for para arrays
    for(todo of todos){
        //Cria um elemento 'li'
        var todoElement = document.createElement('li');
        //pega o texto do todos
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a'); 

        linkElement.setAttribute('href', '#');

        //procura no array de todo a posição
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        //insere no todoElement (li) o texto do todo (todoText)
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        //insere no listElement o todoElement, no caso no corpo do 'ul'
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;
    //funçao do array para inserir no final
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    //splice remove um aqntde de itens do array a partir da posição que passar
    //todos.splice(posiçao, nItens)
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    //seta o valor no storage / grava chave ou valor string
    //JSON.stringify(todos), transforma vetores e objetos em string
    localStorage.setItem('list_todos', JSON.stringify(todos));
}