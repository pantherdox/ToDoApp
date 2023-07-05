const inputBox = document.getElementById('input-field');
const todoContainer = document.getElementById('todo-container');

function addTodo(){
    if(inputBox.value === ''){
        return;
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        todoContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }

    inputBox.value = '';
    saveData();
}

inputBox.addEventListener('keyup', (e) => {
    if(e.keyCode === 13){
        addTodo();
    }
    else{
        return;
    }
})

todoContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", todoContainer.innerHTML);
}

function showData(){
    todoContainer.innerHTML = localStorage.getItem("data");
}

showData();