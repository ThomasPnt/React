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
            todos: []
        };
    }

    componentDidMount(){
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

    delete(todo){
        let list = this.state.todos.filter((_todo)=>{
            return _todo !== todo
        });
        this.setState({ todos : list })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Jambon</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Welcome/>
                <TodoForm onNewTodo={this.onNewTodo.bind(this)}/>
                <List todos={this.state.todos} onTodoToggle={this.todoToggleState.bind(this)} deleteItem={this.delete.bind(this)}/>
            </div>

        );
    }
}

export default App;
