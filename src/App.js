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
          <h3 className="App-customer-detail-title">Customer Details:</h3>
          <p><span className="App-customer-detail">Name:</span> {this.state.selectedCustomer.name},  <span className="App-customer-detail">Registered At: </span> {this.state.selectedCustomer.registered_at}</p>

          <ul>
            <li className="App-list-style"><span className="App-customer-detail">Address: </span> {this.state.selectedCustomer.address}</li>
            <li className="App-list-style"><span className="App-customer-detail">City: </span> {this.state.selectedCustomer.city}</li>
            <li className="App-list-style"><span className="App-customer-detail">State: </span> {this.state.selectedCustomer.state}</li>
            <li className="App-list-style"><span className="App-customer-detail">Postal Code: </span> {this.state.selectedCustomer.postal_code}</li>
            <li className="App-list-style"><span className="App-customer-detail">Phone: </span>Phone: {this.state.selectedCustomer.phone}</li>
            <li className="App-list-style"><span className="App-customer-detail">Account Credit: </span> {this.state.selectedCustomer.account_credit}</li>
            <li className="App-list-style"><span className="App-customer-detail">Movies Checked Out: </span> {this.state.selectedCustomer.movies_checked_out_count}</li>
          </ul>
        </div>) }
        
     
       
      </div>
    );
  }
};



export default App;
