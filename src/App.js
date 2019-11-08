import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Quote from "./components/quotes/Quote";

import QuoteState from "./context/quote/QuoteState";

import "./App.css";

const App = () => {
  return (
    <QuoteState>
      <Router>
        <div className='App'>
          <div className='container'>
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Quote />
                  </Fragment>
                )}
              />
              {/* <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} /> */}
            </Switch>
          </div>
        </div>
      </Router>
      <span style={spanStyle}>
        <img
          src='http://api.paperquotes.com/static/images/paperquotes.png'
          height='20'
          width='20'
          alt='paperquotes.com'
        />
        <a
          href='http://paperquotes.com'
          title='Powered by quotes from paperquotes.com'
          style={aStyle}
        >
          paperquotes.com
        </a>
      </span>
    </QuoteState>
  );
};

const spanStyle = {
  zIndex: "50",
  fontSize: "0.9em"
};

const aStyle = {
  color: "#9fcc25",
  marginLeft: "4px",
  verticalAlign: "middle"
};

export default App;
