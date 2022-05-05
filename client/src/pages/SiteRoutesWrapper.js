import React, {useState, useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import * as transitionActions from 'actions/transition';
import SiteRoutes from 'pages/SiteRoutes';

const SiteRoutesContainer = ({location, startTransition, loadContent}) => {
  const [current, setCurrent] = useState(null);
  useCallback(() => {
    setCurrent(location.pathname);
    loadContent(current, true);
  }, [current, loadContent, location.pathname]);

  useEffect(() => {
    // no delay for animation when at homepage
    if (current === '/') {
      const newLocation = location.pathname;
      loadContent(newLocation, true);
      startTransition('end');
      const timer = setTimeout(() => {
        loadContent(current, false);
        startTransition('reset');
        setCurrent(newLocation);
      }, 100);
      return () => clearTimeout(timer);
    }
    // 400ms duration for current panel to close
    else {
      const newLocation = location.pathname;
      loadContent(newLocation, true);
      loadContent(current, 'leaving');
      startTransition('start');
      const timer = setTimeout(() => {
        loadContent(current, false);
        startTransition('end');
        setCurrent(newLocation);
        const timerTwo = setTimeout(() => {
          startTransition('reset');
        }, 599);
        return () => clearTimeout(timerTwo);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, loadContent, startTransition]);


  return (
    <SiteRoutes/>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadContent: (page, bool) => {
      dispatch(transitionActions.loadContent(page, bool));
    },
    startTransition: (status) => {
      dispatch(transitionActions.startTransition(status));
    }
  };
};

export default connect (null, mapDispatchToProps)(SiteRoutesContainer);
