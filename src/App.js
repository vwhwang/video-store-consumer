import React, { Component , useState } from 'react';
import MovieList from './components/MovieList';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: {},
    };
  }

  setSelectedMovie(movie){
    this.setState({selectedMovie:movie})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Video Consumer App</h1>
        </header>
    
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/library">Library</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
            </ul>
          </nav>

          <p> {this.state.selectedMovie.title}</p>
          
          <Switch>
            <Route exact path="/">
              <h1>This is the home page!</h1>
            </Route>

            <Route path="/library">
              <MovieList setSelectedMovieCallBack = {this.setSelectedMovie.bind(this)} />
            </Route>

            <Route path="/search">
              <h1>/search page</h1>
            </Route>


            <Route path="/customers">
              <h1>/customers page</h1>
            </Route>
          </Switch>

        </Router>


       
      </div>
    );
  }
};



export default App;
