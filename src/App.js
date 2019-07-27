import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import _ from 'lodash';
import Navbar from './Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import EditTodoFirst from './EditTodoFirst'
//import EditTodoSecond from './EditTodoSecond'

class App extends Component{
  state = {
    todos : [
      { id: 1, content: "Play League"},
      { id: 2, content: "Win Ranked Games"},
      { id: 3, content: "Reach Challenger"}
    ],
    todoToEdit : {}
  }
  // componentDidUpdate(prevProps, prevState, snapshot){
  //   if (prevProps.editPaneltodoContent !== this.props.editPaneltodoContent) {
  //     console.log("changed")
  //   }
  // }
  editPanelTodoFunction = (todoToEdit) => {
    this.setState({
      todoToEdit,
    })
    console.log(this.state)
  
    //this.forceUpdate();
  }

  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos: newTodos
    })
  }
  updateTodo = (id, content) => {

    console.log(id,content)

    const targeTodo = this.state.todos.find(todo => todo.id===id)

    //console.log(targeTodo);
    
    let todoToEdit = _.cloneDeep(targeTodo)

    todoToEdit.content = content;

    //console.log(todoToEdit);

    const fileteredTodo = this.state.todos.filter(todo => todo.id !== id)
    fileteredTodo.push(todoToEdit);

    console.log(fileteredTodo)
    this.setState({
      todos: fileteredTodo
    })      

  }

  addTodo = (newTodo) => {
    newTodo.id = Math.random();
    //console.log(newTodo.id)
    let newTodos = [...this.state.todos, newTodo];
    this.setState({
      todos: newTodos
    })
  }
  render(){    
    //console.log(this.state.todoToEdit)
    return(
      <BrowserRouter>
        <div className="todo-app container center">
          <Navbar />
          <Route exact path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <h1 className="center purple-text">pingusta's Todo's</h1>
          <div className="row">
            <div className="col-md-8">
              <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} editPanelTodoFunction={this.editPanelTodoFunction}/>
            </div>
            <div className="col-md-4">
              <AddTodo addTodo={this.addTodo}/>
            </div>
          </div>
          
          {
            !_.isEmpty(this.state.todoToEdit) && 
            //Object.keys(this.state.todoToEdit).length>0 && 
            <div className = "row">
              <div className = "col-md-6">
              <EditTodoFirst todoToEdit={this.state.todoToEdit} updateTodo={this.updateTodo}/>
              </div>
            
            </div>
          }
         
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
