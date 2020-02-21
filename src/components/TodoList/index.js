import React, { Component } from 'react';
import TodoForm from '../TodoForm';
import Todo from '../Todo';

class TodoList extends Component {

    state = {
        todos: [],
    };


    addTodo = todo => {
        this.setState(state => ({
            todos: [todo, ...state.todos]
        }));
    };


    render() {
        return (
            <div className="todo-header">
                <TodoForm onSubmit={this.addTodo} />
                {this.state.todos.map(todo => (
                
                <Todo key={todo.id} text={todo.text}/>
                ))}
            </div>
        );
    }
}




export default TodoList;