require('babel-register');

require.extensions['.css', '.png', '.jpeg', '.jpg'] = function () {
  return null;
};


const router = require('./router.jsx').default;
const Sitemap = require('react-router-sitemap').default;

(
   new Sitemap(router)
       .build('http://www.ashleywildcat.com')
       .save('./sitemap.xml')
);