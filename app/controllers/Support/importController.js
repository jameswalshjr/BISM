angular.module('app.controllers')
    .controller('importController', ['$scope', '$routeParams', '$http', '$cookies', 'EnvConfig', function ($scope, $routeParams, $http, $cookies, EnvConfig) {
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

                    })
                    .catch(function (error) {
                        if (error.status === -1) {
                            $scope.usageResponse = 'The service is currently unavailable.'
                        }
                    });
            };

            $scope.resetUsage = function (form) {
                var usageInput = $('#fileUsage')
                usageInput.replaceWith(usageInput.val('').clone(true));
                form.$setPristine();
                form.$dirty = false;
                form.$invalid = true;
                form.$valid = false;
                form.formdata = {};
                $scope.usageResponse = null;
                $files = null;
                $scope.UsageUpload = null;
            };

            $scope.resetUsageRate = function () {

            };

        } else {
            alert(' The File APIs are not fully supported in this browser.');
        }
    }])
    .directive('validFile', function () {
        return {
            require: 'ngModel',
            link: function (scope, el, attrs, ngModel) {
                el.bind('change', function () {
                    scope.$apply(function () {
                        ngModel.$setViewValue(el.val());
                        ngModel.$render();
                    })
                })
            }
        }
    })
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