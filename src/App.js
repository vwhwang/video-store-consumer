import React, { Component , useState } from 'react';
import MovieList from './components/MovieList';
import CustomerList from './components/CustomerList';
import Search from './components/Search';
import Checkout from './components/Checkout';
import Return from './components/Return';
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
      selectedCustomer: {},
    };
  }

  setSelectedMovie(movie){
    this.setState({selectedMovie:movie})
  }

  setSelectedCustomer(customer){
    this.setState({selectedCustomer:customer})
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

          <h6>Checkout Place Holder</h6>
          <Checkout movie = {this.state.selectedMovie.title} customer = {this.state.selectedCustomer} />
          <Return movie = {this.state.selectedMovie.title} customer = {this.state.selectedCustomer} />
          <p> {this.state.selectedMovie.title}</p>
          <p> {this.state.selectedCustomer.name}</p>

          
          <Switch>
            <Route exact path="/">
              <h1>This is the home page!</h1>
            </Route>

            <Route path="/library">
              <MovieList setSelectedMovieCallBack = {this.setSelectedMovie.bind(this)} />
            </Route>

            <Route path="/search">
              <Search />
            </Route>


            <Route path="/customers">
            <CustomerList setSelectedCustomerCallBack = {this.setSelectedCustomer.bind(this)} />

              <h1>/customers page</h1>
            </Route>
          </Switch>

        </Router>


        <div>
          <h3>Details of Selected Movie from Library</h3>
          <p>Movie: {this.state.selectedMovie.title}, release date: {this.state.selectedMovie.release_date}</p>
          <p>Overview: {this.state.selectedMovie.overview}</p>
          <img src = {this.state.selectedMovie.image_url} alt="alt"/>
        </div>
     
       
      </div>
    );
  }
};



export default App;
