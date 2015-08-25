(function() {
    'use strict';

    angular
        .module('app', [])
        .controller('appCtrl', appCtrl);

    appCtrl.$inject = ['$scope', 'myService'];

    function appCtrl($scope, myService) {
        $scope.data = myService.data();
    }
    
})();
