import React, { Component } from 'react';

import {Switch, Route} from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';

import AdminMenu from 'admin/menu/AdminMenu';
import AdminMobileMenu from 'admin/menu/MenuWrapOne';

import Admin from 'admin/pages/AdminHome';
import AdminGalleryPage from 'admin/pages/AdminGalleryPage';
import AdminStatsPage from 'admin/pages/AdminStatsPage';
import AdminFightStylePage from 'admin/pages/AdminFightStylePage';
import AdminSessionTypePage from 'admin/pages/AdminSessionTypePage';
import GetAdminAboutText from 'admin/services/GetAdminAboutText';

class RoutesAdmin extends Component {
  componentDidMount() {
    Scrollbar.init(document.querySelector('#admin_panel'), {
      alwaysShowTracks: true,
      syncCallbacks: true,
    });
  }
  render() {
    return (
      <div className="admin_wrapper">
        <GetAdminAboutText/>

        <div className="admin_panel">
          <div className="admin_nav__left">
            <AdminMenu />
          </div>
          <div className = "admin_right" id="admin_panel">
            <div className="admin_right__content">
              <Switch>
                <Route exact path="/shodyra/admin"
                  render={(props)=>
                    <Admin {...props} />
                  }
                />
                <Route exact path="/shodyra/admin/gallery"
                  render={(props)=>
                    <AdminGalleryPage {...props} />
                  }
                />
                <Route exact path="/shodyra/admin/stats"
                  render={(props)=>
                    <AdminStatsPage {...props} />
                  }
                />
                <Route exact path="/shodyra/admin/fightstyle"
                  render={(props)=>
                    <AdminFightStylePage {...props} />
                  }
                />
                <Route exact path="/shodyra/admin/sessiontype"
                  render={(props)=>
                    <AdminSessionTypePage {...props} />
                  }
                />
              </Switch>
            </div>
          </div>
          <div className="admin_nav__right"/>
        </div>
        <AdminMobileMenu/>
      </div>
    );
  }
}

export default RoutesAdmin;
