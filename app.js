var app = angular.module('StarterApp', []);

app.controller('RepoCtrl', function($scope, $http) {
    $scope.repos = [];

    $http.get('https://api.github.com/users/thadafinser/repos').success(function(data, status, headers, config) {
        $scope.repos = data;
    }).error(function(data, status, headers, config) {
        // log error
    });
});