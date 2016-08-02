"use strict";

/**
 *
 * @author vivek krishna varma
 */

App.config(["config","$routeProvider","$locationProvider", function(config,	$routeProvider,	$locationProvider)	{

	$routeProvider.	
	when(config.CONTEXT_URL    				,	{ templateUrl	:	config.LOGIN_TEMPLATE_URL	    , controller : "LoginController"    }).
	when(config.HOME_URL					,	{ 													  controller : "MenuItemController" }).
	when(config.USER_SERVICE_URL			,	{ templateUrl	:	config.USER_TEMPLATE_URL		, controller : "UserController"		}).
	when(config.USER_BY_ID_SERVICE_URL		,	{ templateUrl	:	config.USER_TEMPLATE_URL		, controller : "UserController"		}).
	otherwise(									{ redirectTo	:	config.CONTEXT_URL													});
	
}]);