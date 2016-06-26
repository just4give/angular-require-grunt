/*jshint unused: vars */
define(['angular', 'controllers/main']/*deps*/, function (angular, MainCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name demoApp
   * @description
   * # demoApp
   *
   * Main module of the application.
   */
  return angular
    .module('demoApp', ['demoApp.controllers.MainCtrl',
/*angJSDeps*/]);
});
