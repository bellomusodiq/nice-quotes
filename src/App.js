import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import SideNav from './components/SideNav/SideNav';
import './App.css';
import SearchLanguage from './components/SearchLanguage/SearchLanguage';
import Footer from './components/Footer/Footer';
import QuoteList from './containers/QuoteList/QuoteList';
import QuoteDetail from './containers/QuoteDetail/QuoteDetail';

class App extends Component {
  state = {
    showSideNav: false,
  }
  render() {
    return (
      <Fragment>
        <SideNav showSideNav={this.state.showSideNav} closeSideNav={() => this.setState({showSideNav: false})} />
        <div className="App">
          <div></div>
          <section>
            <Header openSideNav={() => this.setState({showSideNav: true})}  />
            <SearchLanguage />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/search' exact component={QuoteList} />
              <Route path='/:id' exact component={QuoteDetail} />
            </Switch>
            <Footer />
          </section>
        </div>
      </Fragment>
    );
  }
}

export default App;
