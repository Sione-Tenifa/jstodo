var todos = ['buy new turtle' ]

var input = prompt("What do you want to do?")



while(input !== "quit"){
  //handle input
    if(input === 'list'){
        listTodos();
    } else if(input === "new"){
      addTodos();
    } else if (input === "delete"){
      deleteTodos()
    }
   // ask for new input
  input = prompt("What do you want to do?")
}

function listTodos(){
  console.log("------")
  todos.forEach(function(todo, i){
    console.log(i + ": " + todo)
  })
  console.log("------")
}

function addTodos(){
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo)
  console.log(todos)
  console.log('Added todo')
}

function deleteTodos(){
  //ask for index of todo to be deleted
  var index = prompt("Enter index of todo to delete");
  //delete that todo
  //splice
  todos.splice(index, 1)
  console.log("Deleted Todo")
}

console.log("ok you quit the app")