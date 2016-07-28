"use strict";

/**
 *
 * @author vivek krishna varma
 */

App.controller("LoginController", ["$scope","LoginService",	function($scope, LoginService) {

	$scope.login = new LoginService;

	$scope.getLoginScreen = function() {
		$scope.login = LoginService.get();
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
		$scope.login.$save(function() {});
	};

	$scope.reset = function() {
		$scope.login = new LoginService();
		$scope.loginForm.$setPristine();
	};

	$scope.getLoginScreen();
}]);

/*
 * App.controller('LoginController', ['async', function(async) {
 * 
 * var self = this; self.login = async; }]);
 */