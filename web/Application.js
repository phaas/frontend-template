/// <reference path="angular/angular.d.ts" />
/// <reference path="angular/angular-route.d.ts" />
/// <reference path="jquery/jquery.d.ts" />
/// <reference path='../_all.ts' />
var landing;
(function (landing) {
    'use strict';
    var LandingCtrl = (function () {
        function LandingCtrl($scope) {
            this.$scope = $scope;
            $scope.message = 'Hello there!!';
            $scope.foo = '123';
        }
        LandingCtrl.$inject = ['$scope'];
        return LandingCtrl;
    })();
    landing.LandingCtrl = LandingCtrl;
})(landing || (landing = {}));
/// <reference path="../_all.ts" />
var landing;
(function (landing) {
    'use strict';
    var module = angular.module('landing', ['ngRoute']);
    module.controller('LandingCtrl', landing.LandingCtrl);
    module.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/landing', {
                templateUrl: 'web/landing/landing.html',
                controller: landing.LandingCtrl
            });
        }]);
})(landing || (landing = {}));
/// <reference path="LandingCtrl.ts" />
/// <reference path="LandingModule.ts" />
/// <reference path="libs/_all.ts" />
/// <reference path="landing/_all.ts" />
/// <reference path="Application.ts" />
/// <reference path='_all.ts' />
var appName;
(function (appName_1) {
    'use strict';
    var appName = angular.module('appName', ['landing', 'ngRoute']);
    appName.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({
                redirectTo: '/landing'
            });
        }]);
})(appName || (appName = {}));
//# sourceMappingURL=Application.js.map