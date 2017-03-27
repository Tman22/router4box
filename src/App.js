import React, { Component } from 'react';
import './App.css';
import { NavLink, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import CreateItemContainer from './createItemContainer.js';
import { NavBar }from './navBar.js';
import { Home }from './home.js';
import { ListItem }from './listItem.js';

class App extends Component {

  render() {
    const { ideas } = this.props
    return (
      <div className='App'>
        <div className='App-header'>
          <div className='App-title'>Idea & Thought Box</div>
          <NavBar />
        </div>

        <Route exact path='/' component={Home} />

        <Route exact path='/create-idea' render={({ match }) =>
          <CreateItemContainer/>
        } />

        <Route exact path='/ideas' render={({ match }) =>
          <div className='list'>
            {ideas.map((idea) => <ListItem key={idea.id} match={match} {...idea}/>)}
          </div>
        } />

        <Route path='/ideas/:id' render={({ match }) => {
          const idea = ideas.find((idea) => idea.id === parseInt(match.params.id));
          if (idea) {
            return <ListItem match={match} {...idea} />;
          }
          return (<div className='list-item'>That Idea could not be found </div>)
        }} />

      </div>
    );
  }
}

export default App;
