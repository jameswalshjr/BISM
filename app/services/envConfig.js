var envconfig = angular.module('envconfig', []);

envconfig.provider("EnvConfig", function () {
    this.$get = function () {
        var q = jQuery.ajax({
            type: 'GET', url: 'appsettings.json', cache: false, async: false, contentType: 'application/json', dataType: 'json'
        });
        if (q.status === 200) {
            angular.extend(envconfig, angular.fromJson(q.responseText));
        }
        return envconfig;
    };
});