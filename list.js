var todos = ['buy new turtle' ]

var input = prompt("What do you want to do?")



while(input !== "quit"){
  //handle input
    if(input === 'list'){
      console.log(todos)
    } else if(input === "new"){
      var newTodo = prompt("Enter new todo");
      todos.push(newTodo)
      console.log(todos)
    }
    
  // ask for new input
  input = prompt("What do you want to do?")
}

console.log("ok you quit the app")