angular
  .module("app", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("landing", {
        url: "/",
        templateUrl: "./src/landing/landing.html",
        controller: "landingCtrl"
      })
      .state("about", {
        url: "/about",
        template: "<div>This is an about page <hr /> {{ test }}</div>",
        controller: function($scope) {
          $scope.test = "aboutTest";
        }
      })
      .state("person", {
        url: "/person/:id",
        templateUrl: "./src/person/person.html",
        controller: "personCtrl"
      });
  });
