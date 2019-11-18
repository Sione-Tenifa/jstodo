var todos = ['buy new turtle' ]

var input = prompt("What do you want to do?")



while(input !== "quit"){
  //handle input
    if(input === 'list'){
      todos.forEach(function(todo, i){
        console.log(i + ": " + todo)
      });
    } else if(input === "new"){
      var newTodo = prompt("Enter new todo");
      todos.push(newTodo)
      console.log(todos)
    } else if (input === "delete"){
      //ask for index of todo to be deleted
      var index = prompt("Enter index of todo to delete");
      //delete that todo
      //splice
      todos.splice(index, 1)
    }
    
  // ask for new input
  input = prompt("What do you want to do?")
}

console.log("ok you quit the app")