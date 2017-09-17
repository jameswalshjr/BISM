angular.module('app.controllers')
    .controller('cookieController', ['$scope', '$cookies', '$http', function ($scope, $cookies, $http) {
        this.bootMessage = 'Inside Cookie Controller / View';

     

        $scope.sendRequest = function () {
            var request = {
                method: 'GET',
                url: 'http://localhost:18090/api/DocumentUpload/Token',
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            $http(request)
                .then(function (response) {
                    var result = response;
                    console.log(result);
                    console.log($cookies.getAll());
                });

            
        };



        
    }]);