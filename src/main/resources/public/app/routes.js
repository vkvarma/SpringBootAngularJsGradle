"use strict";

/**
 *
 * @author vivek krishna varma
 */

App.config(["$routeProvider", function($routeProvider) {
    
    $routeProvider.    
      when("/user/"					    , { templateUrl : "views/user.html" , controller : "UserController"  }).
      when("/user/:id"				    , { templateUrl : "views/user.html" , controller : "UserController"  }).
      when("/login/"				    , { templateUrl : "views/login.html", controller : "LoginController" }).
      when("/login/:username/:password" , { templateUrl : "views/login.html", controller : "LoginController" }).    
      otherwise(                          { redirectTo  : "/"                                                });
    
}]);