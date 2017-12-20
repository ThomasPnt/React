import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./Components/SearchBar";
import YTSearch from "youtube-api-search";
import VideoList from "./Components/VideoList";
const API_KEY = 'AIzaSyDF3Ay61LLhmXeI0BU_-AEajy0hEhnoVVg';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            videos : []
        };
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos});
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Formation</h1>
                </header>
                <SearchBar/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;
