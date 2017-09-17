angular.module('app.controllers')
    .controller('importController', ['$scope', '$routeParams', '$http', 'EnvConfig', function ($scope, $routeParams, $http, EnvConfig) {
        this.bootMessage = 'Inside Import Controller / View';
       

        if (window.File && window.FileReader && window.FileList && window.Blob) {

            var formdata = new FormData();
            $scope.getTheFiles = function ($files) {
                angular.forEach($files, function (value, key) {
                    formdata.append(key, value);
                });
            };

            $scope.uploadFiles = function () {
                var request = {
                    method: 'POST',
                    url: EnvConfig.Environment + 'api/DocumentUpload/Usage',
                    data: formdata,
                    headers: {
                        'Content-Type': undefined
                    }
                };

                $http(request)
                    .then(function (response) {
                        var result = response.data;
                        console.log(response);
                    });
            };

        } else {
            alert(' The File APIs are not fully supported in this browser.');
        }
    }])
    .directive('ngFiles', ['$parse', function ($parse) {

        function fn_link(scope, element, attrs) {
            var onChange = $parse(attrs.ngFiles);
            element.on('change', function (event) {
                onChange(scope, { $files: event.target.files });
            });
        }

        return {
            link: fn_link
        };
    }]);