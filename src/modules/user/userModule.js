define(['angular'], function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name demoApp.controller:MainCtrl
     * @description
     * # MainCtrl
     * Controller of the demoApp
     */
    angular.module('demoApp.user.module', [])
        .controller('MainCtrl', function () {

            var vm = this;

            vm.selectUser = function(){
                console.log('User selected old');
            }
        });
});
