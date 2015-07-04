/*global angular, app*/
/*jshint quotmark:false*/

(function () {
    'use strict';

    angular
        .module('app')
        .controller('AppCtrl', AppCtrl);

    function AppCtrl($scope, $mdSidenav, $rootScope) {
        $rootScope.home = true;

        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };

        $scope.getCalendar = function(evt, param) {
            var minVal = 0;
            var maxVal = 0;
            if(param === 'min') {
                minVal = new Date('January 1, 2013');
            }
            if(param === 'max') {
                maxVal = new Date('December 31, 2015');
            }
            if(param === 'both') {
                minVal = new Date('January 1, 2013');
                maxVal = new Date('December 31, 2015');
            }
            app.handleDates(evt.target, {min: minVal, max: maxVal});
        };
    }
})();
