/// <reference path="../_all.ts" />

module landing {
    'use strict';

    var module = angular.module('landing', ['ngRoute']);

    module.controller('LandingCtrl', LandingCtrl);

    module.config(['$routeProvider', function($routeProvider: angular.route.IRouteProvider) {
        $routeProvider.when('/landing', {
            templateUrl: 'web/landing/landing.html',
            controller: landing.LandingCtrl
        });
    }]);



}