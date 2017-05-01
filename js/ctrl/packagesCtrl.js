angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $stateParams, mainSrv) {
  $scope.locations = mainSrv.travelInfo;
});
