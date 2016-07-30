"use strict";

/**
 *
 * @author vivek krishna varma
 */

App.factory("LoginService", ["config",	"$resource", function(config, $resource) { 
	return $resource(config.LOGIN_BY_AUTH_SERVICE_URL,
		{
			username:"@username",
			password:"@password"
		},
		{
			getLoginScreen	:	{
				method	:"GET"
			},
			validateLogin	:	{
				method	: "POST"
			}
		},
		{
			stripTrailingSlashes: false
		});
}]);