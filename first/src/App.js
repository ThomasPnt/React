import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome';
import List from './component/List';
import TodoForm from './component/TodoForm';
import Rebase from 're-base';
import app from './Base';

var base = Rebase.createClass(app.database());

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    //Fonction qui permet de mettre un loading screen tant que le state de todos est vide (le temps que les éléments s'affichent)
    loading(){
        if(this.state.todos[0]){
            return (
                <List todos={this.state.todos} onTodoToggle={this.todoToggleState.bind(this)}
                      deleteItem={this.delete.bind(this)}/>
            )
        }else{
            return(
                <div className="loader">
                </div>
            )
        }
    }

    componentDidMount() {
        base.syncState(`/`, {
            context: this,
            state: 'todos',
            asArray: true
        });
    }

    onNewTodo(todo) {
        let newTodoList = this.state.todos;
        newTodoList.push(todo);
        this.setState({todos: newTodoList});
    }

    todoToggleState(todo, index) {
        let _todo = todo;
        _todo.done = !todo.done;
        let newTodos = this.state.todos;
        newTodos[index] = _todo;
        this.setState({todos: newTodos});
    }

    delete(todo) {
        let list = this.state.todos.filter((_todo) => {
            return _todo !== todo
        });
        this.setState({todos: list})
    }

    render() {
        return (
            <div className="App loader">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">ToDoList</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Welcome/>
                <TodoForm onNewTodo={this.onNewTodo.bind(this)}/>
                {this.loading()}
            </div>

        );
    }
}

export default App;