import './App.css';
import React, { Component } from 'react';
import Movies from './components/movies'
import NavBar from './components/navBar'
import Rentals from './components/rentals'
import MovieForm from './components/movieForm'
import NotFound from './components/notFound'
import Customers from './components/customers'
import LoginForm from './components/loginForm'
import Register from './components/register'
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css'

class App extends Component {
  state = {  }
  render() { 
    return (  
      <React.Fragment>
      <NavBar/>
      <main className="container">
      <Switch>
      <Route path="/login" component={LoginForm} ></Route>
      <Route path="/movies/:id" component={MovieForm}/>
        <Route path="/movies" component={Movies} ></Route>
        <Route path="/customers" component={Customers} ></Route>
        <Route path="/rentals" component={Rentals} ></Route>
        <Route path="/register" component={Register} ></Route>
        <Route path="/not-found" component={NotFound} ></Route>
        <Redirect from="/" exact to="/movies"></Redirect>
        <Redirect  to="/not-found"></Redirect>
   </Switch>
      </main>
      </React.Fragment>
    );
  }
}
 
export default App;