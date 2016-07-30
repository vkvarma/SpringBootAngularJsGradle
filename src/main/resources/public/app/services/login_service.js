"use strict";

/**
 *
 * @author vivek krishna varma
 */

App.factory("LoginService", ["$resource", function($resource){ 
	return $resource("/login/:username/:password",{username:"@username",password:"@password"}, {
		 get	: {  
            method  : "GET"
	     },
	     save	: { 
	        method  : "POST"
	     }
    },
    {
        stripTrailingSlashes: false
    });
}]);