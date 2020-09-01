'use strict';

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');


const todoData = [];


const render = function (){
    todoList.textContent = '';
    todoCompleted.textContent = '';

    todoData.forEach(function(item){
        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' + 
        '<div class="todo-buttons">' + 
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
        '</div>';

       // let 
    
        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }
        
        const btnTodoComplete = li.querySelector('.todo-complete');
        btnTodoComplete.addEventListener('click', function(){
            item.completed = !item.completed;
            render();
        }); 
        
        const todoRemove = li.querySelector('.todo-remove');
        todoRemove.addEventListener('click', function(){
            let a = todoData.indexOf(item);
            todoData.splice(a, 1);
            render();
        });
        
    });


};

todoControl.addEventListener('submit', function (event){
    event.preventDefault();

    const newTodo = {
        value: headerInput.value,
        completed: false
    }
    if(headerInput.value !== ''){
    todoData.push(newTodo);
    headerInput.value = '';
    };

    render();

    console.log(todoData);

});

//render();






