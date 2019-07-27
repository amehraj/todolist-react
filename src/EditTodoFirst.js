import React, {Component} from 'react';

class EditTodoFirst extends Component{

    state = {
        todoToEdit: {},
        content: ""
    }
    componentDidMount = () => {
        this.setState({
            todoToEdit: this.props.todoToEdit,
            content: this.props.todoToEdit.content
        })
    }
    componentDidUpdate = (prevProps, prevState, snapshot) => {
        //console.log(prevProps.todoToEdit.content!==this.props.todoToEdit.content)
        if(prevProps.todoToEdit.content!==this.props.todoToEdit.content){
            this.setState({
                todoToEdit : this.props.todoToEdit,
                content: this.props.todoToEdit.content
            })
        }
    }
    handlOnSubmit = (e) => {
        e.preventDefault()
        //console.log("edit panel submitted")
        this.props.updateTodo(this.state.todoToEdit.id, this.state.content)
        this.setState({
            todoToEdit: {},
            content: ""
        })
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    render(){
        //console.log('rendered', this.props)
        return (
            <div>
                <form onSubmit={this.handlOnSubmit}> 
                    <label>First Edit Panel</label>
                    <input type="text" value={this.state.content} onChange={this.handleChange}/>
                  
                </form>
            </div>
        )
    }
}

export default EditTodoFirst