import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./Components/SearchBar";
import YTSearch from "youtube-api-search";

const API_KEY = 'AIzaSyDF3Ay61LLhmXeI0BU_-AEajy0hEhnoVVg';

YTSearch({key: API_KEY, term:'surfboards'}, function(data){
    console.log(data);
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Formation</h1>
        </header>
          <SearchBar/>
      </div>
    );
  }
}

export default App;
