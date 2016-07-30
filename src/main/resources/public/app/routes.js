"use strict";

/**
 *
 * @author vivek krishna varma
 */

App.config(["config","$routeProvider", function(config,$routeProvider)	{
	
	$routeProvider.
	when(config.USER_SERVICE_URL			,	{ templateUrl	:	config.USER_TEMPLATE_URL	, controller : "UserController"	}).
	when(config.USER_BY_ID_SERVICE_URL		,	{ templateUrl	:	config.USER_TEMPLATE_URL	, controller : "UserController"	}).
	when(config.LOGIN_SERVICE_URL			,	{ templateUrl	:	config.LOGIN_TEMPLATE_URL	, controller : "LoginController"}).
	when(config.LOGIN_BY_AUTH_SERVICE_URL	,	{ templateUrl	:	config.LOGIN_TEMPLATE_URL	, controller : "LoginController"}).
	otherwise(									{ redirectTo	:	config.HOME_URL												});

}]);