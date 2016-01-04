angular.module('MyApp')
    .factory('Twitter', ['$resource', function($resource) {
        return $resource("/api/trends/:id",{}, {
            'query': {
                method: 'GET',
                isArray: false
            }
        });
    }]);
