"use strict";

/**
 *
 * @author vivek krishna varma
 */

var App = angular.module("xrs",[
    "ngResource",
	"ngRoute"
]);

App.config(["$routeProvider", function($routeProvider) {
     
    $routeProvider
     .when("/user/", {
        templateUrl	: "../../views/user.html",
        controller	: "UserController"
    }).when('/user/:id', {
		templateUrl	: "../../views/user.html",
		controller	: "UserController" 
    }).when("/login/",	{
       templateUrl	: "../../views/login.html",
       controller	: "LoginController"
    }).when("/login/:username/:password", {
        templateUrl	: "../../views/login.html",
        controller	: "LoginController"     
    }).otherwise({
        redirectTo	: "/"
    });
    
}]);
                            
/*var App = angular.module('xrs',['ngResource','ngRoute']);

App.config(['$routeProvider', function($routeProvider) {
     
    $routeProvider
      .when("/welcome", {
        templateUrl: "views/welcome.html",
        controller : "WelcomeController as wlCtrl",
        resolve    : {
                      async  : ['WelcomeService', function(WelcomeService) {
                          return WelcomeService.query();
                      }]
        }
    }).when("/user", {
        templateUrl: "views/user.html",
        controller : "UserController as usCtrl",
        resolve    : {
                     async: ['UserService', function(UserService) {
                          return UserService.query();
                     }]
        }
    }).when("/login", {
        templateUrl: "views/login.html"
    }).otherwise({
        redirectTo : "/welcome"
    });
    
}]);
*/
/*var App = angular.module('xrs', ['ngResource','ui.router']);
App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        
    $urlRouterProvider.otherwise("/welcome");
     
    $stateProvider.state('welcome', {
        url        : "/welcome",
        templateUrl: 'welcome',
        controller : "WelcomeController as wlCtrl",
        resolve    : {
                      async  : ['WelcomeService', function(WelcomeService) {
                          return WelcomeService.query();
                      }]
        }
    }).state('welcome.user', {
        url        : "/user",
        templateUrl: "user",
        controller : "UserController as usCtrl",
        resolve    : {
                     async: ['UserService', function(UserService) {
                          return UserService.query();
                     }]
        }
    }).state('welcome.login', {
        url        : "/login",
        templateUrl: "login"
    });
    
}]);*/