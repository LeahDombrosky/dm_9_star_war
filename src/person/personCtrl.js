angular
  .module("app")
  .controller("personCtrl", function($scope, peopleServ, $stateParams) {
    var people = peopleServ.getPeople();
    var index = $stateParams.id;
    $scope.person = people[index];
    console.log("$scope.person: ", $scope.person);
  });
