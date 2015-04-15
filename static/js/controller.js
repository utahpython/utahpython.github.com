'use strict';

angular.module('utahPython', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('about', {
        url: "/about",
        templateUrl: "about.html"
      }).
      .state('meetups' {
        url: "/meetups",
        templateUrl: "meetups.html"
      })
      .state('presentation', {
        url: "/presentations",
        templateUrl: "presentations.html"
      });
  });
