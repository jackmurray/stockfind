import React, { Component } from 'react';
import Home from './Home';
import Stock from './Stock';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { Get } from 'react-axios'
import BarchartAPIKey from './BarchartAPIKey' // You must create this file and export your API Key

import './App.css';

class NotFound extends Component {
  render() {
    return <div><h1>404 - Not Found</h1></div>;
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={withRouter(Home)}/>
          <Route exact path="/stocks/:stock" component={
            ({match, history}) => {
              return (
                <Get url='https://marketdata.websol.barchart.com/getQuote.json'
                     params={{apikey: BarchartAPIKey,
                              symbols: match.params.stock.toUpperCase()}}>
                  {(error, response, isLoading, onReload) => (
                    <Stock error={error}
                           data={response && response.data}
                           history={history}
                           stock={match.params.stock} />
                  )}
                </Get>
              );
            }
          }/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
