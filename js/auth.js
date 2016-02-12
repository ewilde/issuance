(function () {
  'use strict';

  // authenticate with github
  window.authorize = function (token) {
    // export API as global
    window.github = new Github({
      token: window.TOKEN,
      auth: 'oauth'
    });
  };
}());
