angular.module('app.controllers')
    .controller('footerController', ['$scope', '$routeParams', '$interval', function ($scope, $routeparams, $interval) {


        var tick = function () {
            $scope.clock = Date.now();
        };

        tick();
        $interval(tick, 1000);


    }]);