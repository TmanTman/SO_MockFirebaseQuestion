(function() {
    'use strict';

    angular
        .module('app')
        .factory('myService', myService);

    myService.$inject = [];

    function myService() {
        var _data;
        var ref;

        var service = {
            start: startData,
            data: getData,
            getRef: function() { return ref; }
        };
        return service;

        function startData() {
            ref = new Firebase('mock://eg.firebaseio.com/data');
            ref.on('value', function(snapshot) {
                _data = snapshot.val();
            });
        }

        function getData() {
            return _data;
        }
    }
})();
