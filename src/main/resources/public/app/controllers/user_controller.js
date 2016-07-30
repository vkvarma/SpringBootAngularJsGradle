"use strict";

/**
 *
 * @author vivek krishna varma
 */

App.controller("UserController", ["$scope","UserService", function($scope, UserService) {

	$scope.user = new UserService();
	$scope.users = UserService.query();
	
	$scope.fetchAllUsers = function() {
		$scope.users = UserService.query();
	};
	
	$scope.createUser = function() {
		$scope.user.$save(function() {
			$scope.fetchAllUsers();
		});
	};
	
	$scope.updateUser = function() {
		$scope.user.$update(function() {
			$scope.fetchAllUsers();
		});
	};
	
	$scope.deleteUser = function(identity) {
		var user = UserService.get({
			id : identity
		}, function() {
			user.$delete(function() {
				console.log("Deleting user with id ", identity);
				$scope.fetchAllUsers();
			});
		});
	};
	
	$scope.submit = function() {
	
		if ($scope.user.id == null) {
			console.log("Saving New User", $scope.user);
			$scope.createUser();
		} else {
			console.log("Upddating user with id ", $scope.user.id);
			$scope.updateUser();
			console.log("User updated with id ", $scope.user.id);
		}
		$scope.reset();
	};
	
	$scope.edit = function(id) {
		console.log("id to be edited", id);
		for (var i = 0; i < $scope.users.length; i++) {
			if ($scope.users[i].id === id) {
				$scope.user = angular.copy($scope.users[i]);
				break;
			}
		}
	};
	
	$scope.remove = function(id) {
		console.log("id to be deleted", id);
		if ($scope.user.id === id) {
			$scope.reset();
		}
		$scope.deleteUser(id);
	};
	
	$scope.reset = function() {
		$scope.user = new UserService();
		$scope.regForm.$setPristine();
	};
}]);

/*
 * App.controller('UserController', ['async', '$scope', 'UserService',
 * function(async, $scope, UserService) {
 * 
 * var self = this; self.user = new UserService(); self.pager = {}; self.users =
 * async; self.pageItems = [];
 * 
 * self.range = function(start, end) { var result = []; for (var i = start; i <=
 * end; i++) { result.push(i); } return result; };
 * 
 * 
 * self.getPager = function(totalItems, currentPage, pageSize) { // default to
 * first page currentPage = currentPage || 1;
 *  // default page size is 10 pageSize = pageSize || 5;
 *  // calculate total pages var totalPages = Math.ceil(totalItems / pageSize);
 * 
 * var startPage, endPage;
 * 
 * startPage = currentPage;
 * 
 * endPage = startPage + currentPage; if(endPage >= totalPages) endPage =
 * totalPages;
 * 
 *  // calculate start and end item indexes var startIndex = (currentPage - 1) *
 * pageSize; var endIndex = startIndex + pageSize;
 *  // create an array of pages to ng-repeat in the pager control var pages =
 * self.range(1, totalPages);
 *  // return object with all pager properties required by the view return {
 * totalItems: totalItems, currentPage: currentPage, pageSize: pageSize,
 * totalPages: totalPages, startPage: startPage, endPage: endPage, startIndex:
 * startIndex, endIndex: endIndex, pages: pages }; };
 * 
 * self.setPage = function (page) { if (page < 1 || page >
 * self.pager.totalPages) { return; } // get pager object from service
 * self.pager = self.getPager(self.pageItems.length, page); //self.pager =
 * self.getPager(self.users.length, page); console.log(self.pager); // get
 * current page of items self.users =
 * self.pageItems.slice(self.pager.startIndex, self.pager.endIndex);
 * //self.users = self.users.slice(self.pager.startIndex, self.pager.endIndex);
 *  };
 * 
 * self.initPagination = function() { // initialize to page 1 self.pageItems =
 * self.users; self.setPage(1); };
 * 
 * self.fetchAllUsers = function() { self.users = UserService.query(); };
 * 
 * self.createUser = function() { self.user.$save(function() {
 * self.fetchAllUsers(); }); };
 * 
 * self.updateUser = function() { self.user.$update(function() {
 * self.fetchAllUsers(); }); };
 * 
 * self.deleteUser = function (identity) { var user = UserService.get({id:
 * identity}, function () { user.$delete(function () { console.log('Deleting
 * user with id ', identity); self.fetchAllUsers(); }); }); };
 * 
 * self.submit = function() {
 * 
 * if (self.user.id == null) { console.log('Saving New User', self.user);
 * self.createUser(); } else { console.log('Upddating user with id ',
 * self.user.id); self.updateUser(); console.log('User updated with id ',
 * self.user.id); } self.reset();
 *  };
 * 
 * self.edit = function(id) { console.log('id to be edited', id); for (var i =
 * 0; i < self.users.length; i++) { if (self.users[i].id === id) { self.user =
 * angular.copy(self.users[i]); break; } } };
 * 
 * self.remove = function(id) { console.log('id to be deleted', id); if
 * (self.user.id === id) { self.reset(); } self.deleteUser(id); };
 * 
 * self.reset = function() { self.user = new UserService();
 * $scope.regForm.$setPristine(); };
 * 
 * ///self.initPagination(); }]);
 */