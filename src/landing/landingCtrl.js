angular.module("app").controller("landingCtrl", function($scope, peopleServ) {
  // peopleServ = {test: 'this is ...'}
  peopleServ.initPeople().then(people => {
    $scope.people = people;
  });
  console.log("peopleServ.initPeople(): ", peopleServ.initPeople());
});
