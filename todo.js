// let inputElement=document.createElement('input')
// inputElement.type="checkbox";
// inputElement.id="myCheckbox";

// document.body.appendChild(inputElement);


// let labelElement=document.createElement('label')
// labelElement.htmlFor="myCheckbox";
// labelElement.textContent="Graduated";
// labelElement.style.color="pink";
// document.body.appendChild(labelElement);


let todoItemsContainer=document.getElementById("todoItemsContainer");

let addtodobutton=document.getElementById("addtodobutton");



let todoList=[
{
    text:"Learn HTML",
    uniqueNo:1
},
{
    text:"Learn CSS",
    uniqueNo:2
},
{
    text:"Learn JS",
    uniqueNo:3
},
{
    text:"Learn S",
    uniqueNo:4
}
];



addtodobutton.onclick=function()
{

    onaddtodo();

}


function onTodoStatusChange(checkboxId, labelId)
{
    let checkboxElement=document.getElementById(checkboxId);
    let labelElement=document.getElementById(labelId);
    labelElement.classList.toggle("checked");
}


function onDeleteTodo(todoId)
{

    let todoElement=document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);

}


function createAndAppendTodo(todo)
{


let checkboxId="checkbox"+todo.uniqueNo;
let labelId="label"+todo.uniqueNo;
let todoId="todo"+todo.uniqueNo;


let todoElement=document.createElement("li");
todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
todoItemsContainer.appendChild(todoElement);
todoElement.id=todoId;

let inputElement=document.createElement('input');
inputElement.type="checkbox";
inputElement.id=checkboxId;
inputElement.classList.add("checkbox-input");
todoElement.appendChild(inputElement);

inputElement.onclick=function(){
    onTodoStatusChange(checkboxId,labelId);

};


let labelContainer=document.createElement("div");
labelContainer.classList.add("label-container", "d-flex", "flex-row");

todoElement.appendChild(labelContainer);

let labelElement=document.createElement("label");
labelElement.setAttribute("for",checkboxId);
labelElement.id=labelId;
labelElement.textContent=todo.text;
labelElement.classList.add("checkbox-label");
labelContainer.appendChild(labelElement);

let deleteContainer=document.createElement("div");
deleteContainer.classList.add("delete-icon-container");
labelContainer.appendChild(deleteContainer);


let deleteicon=document.createElement("i");
deleteicon.classList.add("far","fa-trash-alt","delete-icon");
deleteicon.onclick=function()
{
    onDeleteTodo(todoId);

};

deleteContainer.appendChild(deleteicon);

}

function onaddtodo()
{
    let todoCount=todoList.length;
    todoCount=todoCount+1;

    let userInputElement=document.getElementById("todoUserInput");
    let userInputValue=userInputElement.value;
    if (userInputValue==="")
    {
        alert("Enter valid text");
        return;
    }


    let newTodo=
    {
        text:userInputValue,
        uniqueNo:todoCount
    };
    createAndAppendTodo(newTodo);
    userInputElement.value="";
}



for (let eachTodo of todoList)
{
    createAndAppendTodo(eachTodo);
}



