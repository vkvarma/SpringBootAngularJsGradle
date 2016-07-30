"use strict";

/**
 *
 * @author vivek krishna varma
 */

App.controller("LoginController", ["$scope","LoginService",	function($scope, LoginService) {

	$scope.login = new LoginService;

	$scope.getLoginScreen = function() {
		$scope.login = LoginService.getLoginScreen();
	};

	$scope.submit = function() {
		if ($scope.login.username != null	&& $scope.login.password != null) {
			console.log("validating login", $scope.login);
			$scope.validateLogin();
		} 
		else {
			console.log("invalid entry");
		}
	};

	$scope.validateLogin = function() {
		$scope.login.$validateLogin(function() {});
	};

	$scope.reset = function() {
		$scope.login = new LoginService();
		$scope.loginForm.$setPristine();
	};

	$scope.getLoginScreen();
}]);