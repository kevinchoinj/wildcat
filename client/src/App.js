import React from 'react';
import {Route, Switch} from 'react-router-dom';

import 'App.css';
import 'styles/columnone.css';
import 'styles/customs.css';
import 'styles/links.css';
import 'styles/gallery.css';
import 'styles/admin.css';
import 'styles/menu.css';
import 'styles/about.css';
import 'styles/background.css';
import 'styles/contact.css';

import SiteRoutes from 'pages/SiteRoutesWrapper';
import AdminCheckLogin from 'admin/pages/AdminCheckLogin';
import SiteIcon from 'services/SiteIcon';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">

        <SiteIcon/>
        <Switch>
          <Route path="/shodyra/admin" component={AdminCheckLogin}/>
          <Route path="/" render={(props)=> <SiteRoutes {...props} />}/>
        </Switch>
      </div>
    );
  }
}
