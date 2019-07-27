import React from 'react';
import _ from 'lodash';

const SingleTodo = ({todoItem, deleteTodo, updateTodo, editPanelTodoFunction})  => {

    //console.log("SingleTODOITEM",todoItem)
    let updatedContentValue = todoItem.content;

    const onTodoClick = () => {
        deleteTodo(todoItem.id);
    }
    const todoHandleChange = (e) => {
        updatedContentValue = e.target.value;
    }
    const todoHandleSubmit = (e) => {
        e.preventDefault();
        updateTodo(todoItem.id, updatedContentValue);
    }
    const onEditPanelButtonClick = () => {
        editPanelTodoFunction(todoItem);
    }



    return (
           <div className="collection-item" >
               <div className="row">
                   <div className="col-md-8">
                   <form onSubmit={todoHandleSubmit}>
                        <input type="text" className="text center container" value={todoItem.content} onChange={todoHandleChange}/>
                    </form>
                   </div>
                   <div className="col-md-4">
                    <button type="button" className="btn btn-warning" onClick={onTodoClick}>Delete</button>
                    <button type="button" className="btn btn-warning" onClick={onEditPanelButtonClick}>Edit in Panel</button>
                   </div>
               </div>

                
                
           </div>
    )

} 
/*const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => <SingleTodo todoItem={todo} deleteTodo={deleteTodo}/>)
    ) : (
        <p className="center">Pingusta has reached challenger ^_^</p>
    )
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}*/

const Todos = ({todos, deleteTodo, updateTodo, editPanelTodoFunction}) => {
    //const todoList = (todos.length > 0) && todos.map(todo => <SingleTodo todoItem={todo} deleteTodo={deleteTodo}/>)
    //const challengerText = (todos.length===0) && <p className="center">Pingusta has reached challenger ^_^</p>
    const ifArray = _.isArray(todos);
    //console.log("TODOS in TODOS", todos)
    return(
        <div className="todos collection">
            {   
            
                ifArray && todos.length > 0 && 
                _.orderBy(todos, [ todo => todo.id ], "asc").map(todo => <SingleTodo todoItem={todo} deleteTodo={deleteTodo} key={todo.id} updateTodo={updateTodo} editPanelTodoFunction={editPanelTodoFunction}/>)
            }
            {
                (todos.length===0) && 
                <p className="center">pingusta has reached challenger ^_^</p>
            }
        </div>
    )
}


export default Todos;