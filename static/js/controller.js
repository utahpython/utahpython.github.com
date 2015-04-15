'use strict';

angular.module('utahPython', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    // $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: "/"
      })
      .state('about', {
        url: "/about",
        templateUrl: "about.html"
      })
      // .state('meetups' {
      //   url: "/meetups",
      //   templateUrl: "meetups.html"
      // })
      .state('past_present', {
        url: "/presentations",
        templateUrl: "presentations.html"
      });
  });
