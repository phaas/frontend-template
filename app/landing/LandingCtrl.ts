/// <reference path='../_all.ts' />

module landing {
    'use strict';

    export interface LandingCtrlScope extends ng.IScope {
        message: string;
    }

    export class LandingCtrl {

        public static $inject = ['$scope'];

        constructor(
            private $scope: LandingCtrlScope
            ) {
            $scope.message = 'Hello World!';
        }

    }
}