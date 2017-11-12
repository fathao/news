import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import ArticleList from './ArticleList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { articles: [] };
    this.getArticles = this.getArticles.bind(this);
  }
  getArticles() {
    axios.get('/api/scrape')
      .then((res) => {
        this.setState({ articles: res.data });
      });
  }
  render() {
    const { articles } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          I'm yoyo.
        </p>
        <button onClick={this.getArticles}>Get Articles</button>
        <ArticleList articles={articles}/>
      </div>
    );
  }
}

export default App;
