import React from 'react';
import {Route, Switch} from 'react-router-dom';

import 'App.css';

import SiteRoutes from 'pages/SiteRoutesWrapper';
import SiteIcon from 'services/SiteIcon';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SiteIcon/>
        <Switch>
          <Route path="/" render={(props)=> <SiteRoutes {...props} />}/>
        </Switch>
      </div>
    );
  }
}
