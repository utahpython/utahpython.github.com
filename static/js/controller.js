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
  });
