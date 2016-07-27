'use strict';

/**
 *
 * @author vivek krishna varma
 */

var loginService = angular.module('loginService', ['ngResource']);

loginService.factory('LoginService', ['$resource', function($resource){ 
	return $resource('/login/:username/:password',{username:'@username',password:'@password'}, {
		 get    : {  
            method  : 'GET'
	     },
	     save: { 
	        method  : 'POST'
	     }
    },
    {
        stripTrailingSlashes: false
    });
}]);

/*loginService.factory('LoginService', ['$resource', function($resource){
    return $resource('/login/:username/:password',{username:'@username',password:'@password'}, {
        save: { 
        	method: 'POST',
        	params: {username:'@username',password:'@password'}
        }
    });
}]);*/

/*
App.factory('LoginService', ['$resource', function ($resource) {

        return $resource('http://localhost:8080/XRS/login/', {}, {
            get: {
                method: 'GET'
            },
            query: {
                method: 'GET',
                isArray: true
            }
        },
        {
            stripTrailingSlashes: false
        }
        );
    }]);*/