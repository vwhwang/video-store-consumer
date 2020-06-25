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
import SearchDetail from './components/SearchDetail';

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
              <li className="App-nav-link-container">
                <Link className="App-nav-link" to="/">Home</Link>
              </li>
              <li className="App-nav-link-container">
                <Link className="App-nav-link"  to="/library">Library</Link>
              </li>
              <li className="App-nav-link-container">
                <Link className="App-nav-link"  to="/search">Search</Link>
              </li>
              <li className="App-nav-link-container">
                <Link className="App-nav-link"  to="/customers">Customers</Link>
              </li>
            </ul>
          </nav>


          <div className="CheckoutReturn">
            <Checkout movie = {this.state.selectedMovie.title} customer = {this.state.selectedCustomer} />
            <Return movie = {this.state.selectedMovie.title} customer = {this.state.selectedCustomer} />
            <p > {this.state.selectedMovie.title}</p>
            <p > {this.state.selectedCustomer.name}</p>
          </div>

          
          <Switch>
            <Route exact path="/">
              {/* we can add our photo here */}
            </Route>

            <Route path="/library">
              <MovieList setSelectedMovieCallBack = {this.setSelectedMovie.bind(this)} />
            </Route>

            <Route path="/search">
              <Search />
            </Route>


            <Route path="/customers">
            <CustomerList setSelectedCustomerCallBack = {this.setSelectedCustomer.bind(this)} />
            </Route>
          </Switch>

        </Router>


        <div>
          <SearchDetail movie={this.state.selectedMovie}/>
        </div>
        {/* hide customer */}
        {this.state.selectedCustomer.name && (
        <div className="App-selected-customer-container">
          <h3>Selected Customer</h3>
          <p>Customer: {this.state.selectedCustomer.name}, Registered At: {this.state.selectedCustomer.registered_at}</p>
          <h3>Customer Details:</h3>
          <ul>
            <li className="App-list-style">Address: {this.state.selectedCustomer.address}</li>
            <li className="App-list-style">City: {this.state.selectedCustomer.city}</li>
            <li className="App-list-style">State: {this.state.selectedCustomer.state}</li>
            <li className="App-list-style">Postal Code: {this.state.selectedCustomer.postal_code}</li>
            <li className="App-list-style">Phone: {this.state.selectedCustomer.phone}</li>
            <li className="App-list-style">Account Credit: {this.state.selectedCustomer.account_credit}</li>
            <li className="App-list-style"li>Movies Checked Out: {this.state.selectedCustomer.movies_checked_out_count}</li>
          </ul>
        </div>) }
        
     
       
      </div>
    );
  }
};



export default App;
