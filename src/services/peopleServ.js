angular.module("app").service("peopleServ", function($http) {
  // let peopleServ = {}
  // this = peopleServ
  var people = [];
  this.initPeople = function() {
    return $http
      .get("https://swapi.co/api/people")
      .then(response => {
        console.log(response);
        people = response.data.results;
        return people;
      })
      .catch(console.log);
  };
  this.getPeople = function() {
    return people;
  };
});
