/// <reference path='_all.ts' />

/**
 * The main TodoMVC app module.
 *
 * @type {angular.Module}
 */
module appName {
    'use strict';

    var appName = angular.module('appName', ['landing', 'ngRoute']);
    appName.config(['$routeProvider', function($routeProvider: angular.route.IRouteProvider) {
        $routeProvider.otherwise({
            redirectTo: '/landing'
        });
    }]);

}