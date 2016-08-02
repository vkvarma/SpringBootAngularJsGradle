"use strict";

/**
 *
 * @author vivek krishna varma
 */

var	App	=	angular.module("xrs",	[
	"ngResource",
	"ngRoute"
]);

App.config(["$httpProvider", function ($httpProvider) {

	$httpProvider.defaults.withCredentials = true;
	$httpProvider.defaults.xsrfCookieName  = 'CSRF-TOKEN'; // The name of the cookie sent by the server
	$httpProvider.defaults.xsrfHeaderName  = 'X-CSRF-TOKEN'; // The default header name picked up by Spring Security

}]);