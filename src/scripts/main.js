/*jshint unused: vars */
require.config({
  paths: {
    angular: '../../lib/angular/angular',
    'angular-ui-router': '../../lib/angular-ui-router/release/angular-ui-router',
    'requirejs-domready': '../../lib/requirejs-domready/domReady'
  },
  shim: {
    angular: {
      exports: 'angular'
    }
  },
  priority: [
    'angular'
  ],
  packages: [

  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
  'requirejs-domready!',
  'angular',
  'app'
], function(document,angular, app) {
  'use strict';


  angular.element(document).ready(function(){

    angular.resumeBootstrap(document,[app.name]);

  });
});
