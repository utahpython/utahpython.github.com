'use strict';

angular.module('utahPython', ['ui.router', 'ngSanitize'])
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
    
    // The signed url shouldn't contains any provate key information
    // It's created by using the meetup js api features
    meetup.signed_url = meetup_signed_url;
    // Required for JSON callbacks
    meetup.signed_url = meetup.signed_url + "&callback=JSON_CALLBACK"

    meetup.events = [];

    meetup.loadMeetups = function loadMeetups() {
      $http.jsonp(meetup.signed_url)
        .then(function success(result) {
          // console.log(result.data.results);
          meetup.events = result.data.results;

          for (var i = meetup.events.length - 1; i >= 0; i--) {
            meetup.events[i]['gmap_url'] = "https://maps.google.com/maps?q="+meetup.events[i]['venue']['lat']+","+meetup.events[i]['venue']['lon']+"&hl=es;z=14&output=embed";
          };
        }, function error(error) {
          console.log(error);
        });
    };

    meetup.loadMeetups();

  });
