import React from 'react';
import Item from './Items';

export default class List extends React.Component {

    constructor(props) {
        super();
        this.state = {
            selectedTodos: []
        };
    }

    showTodos(todos) {
        return (
            todos.map((todo, index) => {
                return (
                    <Item
                        key={index}
                        todoItem={todo}
                        todoIndex={index}
                        toggleTodo={this.toggleTodo.bind(this)}
                        addToList={this.addToList.bind(this)}
                        delete={this.deleteOne.bind(this)}
                    />
                )
            })
        )
    }
    
    deleteOne(todo){
        this.props.deleteItem(todo);
    }

    toggleTodo(todoDone, index) {
        this.props.onTodoToggle(todoDone, index);
    }

    addToList(index, event){
        let _list = this.state.selectedTodos;
        let _todo = this.props.todos[index];
        if(event){
            _list.push(_todo)
        }else{
            _list.splice(_list.indexOf(_todo), 1);
        }
        this.setState({
            selectedTodos: _list
        })
    }

    processTodo(){
        let list = this.state.selectedTodos;
        list.forEach(item => item.done = !item.done)
        this.setState({
            selectedTodos: list
        })
    }

    render() {
        const afficher = this.state.selectedTodos.length > 0;
        var todos = this.props.todos
        return (
            <div className="liste">
                Todo : {todos.length}
                {this.showTodos(todos)}
                {afficher ? <button onClick={this.processTodo.bind(this)}> Traiter </button> : null }
            </div>
        );
    }
}
