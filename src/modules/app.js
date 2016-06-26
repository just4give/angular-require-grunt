define([
    'angular',
    'user/userModule'
    ], function(angular, userModule){

    return angular
        .module('demoApp', ['demoApp.user.module',
            /*angJSDeps*/]);

    });

