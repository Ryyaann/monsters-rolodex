import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users, activeMonsters: users}))
  }

  handleSearchBoxChange = (event) => this.setState({searchField: event.target.value});
  
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(
      (m) => m.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster's Rolodex</h1>
        <SearchBox 
          placeHolder="Search Monster's" 
          handleChange={this.handleSearchBoxChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
