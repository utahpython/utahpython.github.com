'use strict';

angular.module('utahPython', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: "/"
      })
      .state('about', {
        url: "/about",
        templateUrl: "about.html"
      })
      .state('upcoming', {
        url: "/upcoming",
        templateUrl: "upcoming.html"
      })
      .state('past_present', {
        url: "/presentations",
        templateUrl: "presentations.html"
      })
      .state('license', {
        url: "/license",
        templateUrl: "license.html"
      });
  })
  .controller('MeetupCtrl', function($http) {
    var meetup = this;
    meetup.signed_url = "https://api.meetup.com/2/events?offset=0&format=json&limited_events=False&group_urlname=UtahPython&page=200&fields=&order=time&desc=false&status=upcoming&sig_id=10704711&sig=7eb0b440ac115c04d9133423ec0eb94c8d6ded89"

    meetup.events = [];

    meetup.loadGames = function loadGames () {
      $http.get(meetup.signed_url)
        .then(function success(result) {
          meetup.events = result.data;
          console.log(meetup.events);
        }, function error(error) {
          console.log(error);
        });  // .then promises to get games
    };

    meetup.loadGames();

  });
