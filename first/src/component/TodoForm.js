import React from 'react';

export default class TodoForm extends React.Component {
    AddToDo(event) {
        event.preventDefault();
        if (this.ToDoTitle.value === "") {
            alert("Pas de valeur");
        } else {
            const txt = this.ToDoTitle.value;
            this.props.onNewTodo({
                title: txt,
                createdAt: new Date()
            })
            this.ToDoTitle.value = "";
        }
    }


    render() {
        return (
            <div className="liste">
                <form>
                    <input type="text" ref={(input) => this.ToDoTitle = input}/>
                    <button onClick={this.AddToDo.bind(this)}> Ajouter</button>
                </form>
            </div>
        )
    }
}
