'use strict';
/* require the modules needed */
	
	
angular.module('nightlifeCoordinationApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.search = function(location) {
      if (location === undefined) {
        return;
      }
      $http.get('/api/bars/' + location).success(function(data) {
        $scope.bars = data["businesses"];
      });
    }
});