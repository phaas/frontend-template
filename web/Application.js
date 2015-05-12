var landing;
(function (landing) {
    'use strict';
    var LandingCtrl = (function () {
        function LandingCtrl($scope) {
            this.$scope = $scope;
            $scope.message = 'Hello World!';
        }
        LandingCtrl.$inject = ['$scope'];
        return LandingCtrl;
    })();
    landing.LandingCtrl = LandingCtrl;
})(landing || (landing = {}));
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
var appName;
(function (_appName) {
    'use strict';
    var appName = angular.module('appName', ['landing', 'ngRoute']);
    appName.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/landing'
        });
    }]);
})(appName || (appName = {}));
//# sourceMappingURL=Application.js.map