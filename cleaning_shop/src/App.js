import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './components/HomePage';
import Header from './components/Header';
import Powders from './components/Powders';
import Cleaners from './components/Cleaners';
import MyCart from './components/Cart';
import Page404 from './components/Page404';
import Products from './components/Products';
import CarCleaners from './components/CarCleaners';
import FeedBack from './components/FeedBack';
import Contacts from './components/Contacts';
import Modal from './components/Modal';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/cleaners" component={Cleaners} />
            <Route path="/car cleaners" component={CarCleaners} />
            <Route path="/powders" component={Powders} />
            <Route path="/cart" component={MyCart} />
            <Route path="/feedback" component={FeedBack} />
            <Route path="/contacts" component={Contacts} />
            <Route component={Page404} />
        </Switch>
      <Modal />
      </React.Fragment>
    );
  }
}

export default App;
