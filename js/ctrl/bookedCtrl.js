angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv) {
  // console.log($stateParams.id)
    for (var i in mainSrv.travelInfo) {
      if ($stateParams.id == mainSrv.travelInfo[i].id) {
        $scope.booked = mainSrv.travelInfo[i];
      }
    }
});
