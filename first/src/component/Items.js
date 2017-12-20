import React from 'react';

export default class Item extends React.Component {


    render() {
        const todo = this.props.todoItem;
        const index = this.props.todoIndex;
        let str = todo.done ? "Pas fait" : 'Fait';
        let color = todo.done ? "pasfait" : "fait";
        return (
            <div className="todo">
                <input type="checkbox" value={index} onClick={(e) => this.props.addToList(index, e.target.checked)}/>
                <p id="title">{todo.title}</p>
                <button id="delete" onClick={this.props.delete.bind(null,todo)}>Delete</button>
                <button id={color} onClick={() => this.props.toggleTodo(todo, index)}>
                    {str}
                </button>
            </div>
        )
    }
}