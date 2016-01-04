angular
    .module('MyApp')
    .controller('GMapsCtrl', ['$scope', 'Twitter', '$mdToast', '$animate', '$state', '$mdDialog', '$timeout', function($scope, Twitter, $mdToast, $animate, $state, $mdDialog, $timeout) {
        $scope.freqRefresh = 3;
        $scope.map = {
            center: {
                latitude: 43.068888,
                longitude: 0.439453
            },
            zoom: 5
        };


        Twitter.query(function(trends) {
            console.log(trends)
            var trendsSpain = "";
            var trendsPort = "";
            var trendsFrench = "";
            for (var i = 0; i < trends.spanishTweets[0].trends.length; i++) {
                trendsSpain += trends.spanishTweets[0].trends[i].name + '<br>';
            };

            for (var i = 0; i < trends.portTweets[0].trends.length; i++) {
                trendsPort += trends.portTweets[0].trends[i].name + '<br>';
            };

            for (var i = 0; i < trends.frenchTweets[0].trends.length; i++) {
                trendsFrench += trends.frenchTweets[0].trends[i].name + '<br>';
            };
            console.log(trends.spanishTweets[0].trends[0].name)
            console.log(trendsSpain)
            $scope.randomMarkers = [{
                id: 1,
                latitude: 40.4165000,
                longitude: -3.7025600,
                title: trendsSpain,
                show: false
            }, {
                id: 2,
                latitude: 38.736946,
                longitude: -9.142685,
                title: trendsPort,
                show: false
            }, {
                id: 3,
                latitude: 48.8534100,
                longitude: 2.3488000,
                title: trendsFrench,
                show: false
            }];
        });


        $scope.randomMarkers = [{
            id: 1,
            latitude: 40.00,
            longitude: 4.00,
            title: 'aaa',
            show: false
        }, {
            id: 2,
            latitude: 39.30,
            longitude: 8.00,
            title: 'aaa',
            show: false
        }, {
            id: 3,
            latitude: 46.00,
            longitude: 2.00,
            title: 'aaa',
            show: false
        }];





    }]);
