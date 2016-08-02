"use strict";

/**
 *
 * @author vivek krishna varma
 */

App.controller("LoginController", ["$scope","$rootScope","$location","config","LoginService",	function($scope, $rootScope, $location, config, LoginService) {

	$scope.login = {
			username: "",
			password: "",
			authenticated:false
	};

	$scope.doLogin = function () {
		console.log("processing doLogin() ");
		LoginService.doLogin($scope.login.username, $scope.login.password, function (data, status, headers) {
			// Success handler
			console.info('The user has been successfully logged in! ', data, status, headers);
			$rootScope.authenticated = data;
			$location.path(config.HOME_URL);
		}, 
		function(data, status, headers, config) {
			// Failure handler
			console.error('Something went wrong while trying to login... ', data, status, headers);
		});
	};
	
	$scope.submit = function() {
		if ($scope.login.username != null	&& $scope.login.password != null) {
			console.log("validating login", $scope.login);
			$scope.doLogin();
		} 
		else {
			console.log("invalid entry");
		}
	};

	$scope.reset = function() {
		$scope.login = {};
		$scope.loginForm.$setPristine();
	};
}]);