"use strict";

/**
 *
 * @author vivek krishna varma
 */

App.controller("MenuItemController", ["$scope","MenuItemService","$controller",	function($scope, MenuItemService, $controller) {
	
	$scope.tab 		 = "";
		
	this.getAllMenuItems = function() {		
		return MenuItemService.getMenuItems();		
	}

	$scope.setTab = function(tab) {
		$scope.tab = tab;
    };

    $scope.isSet = function(tab) {
      return ($scope.tab === tab);
    };
    
    $scope.doLogout = function() {
    	var loginCtrl = $scope.$new();
    	console.log("calling menu for logout");
    	$controller('LoginController',{$scope : loginCtrl});
    	loginCtrl.doLogout();
    }
    
    $scope.menuItems = this.getAllMenuItems();
}]);

//    self.fetchAllMenuItems = function () {
//
//        WelcomeService.query(
//            function (result, responseHeaders) {
//                self.menuItems = result;
//            }, 
//            function (httpResponse) {
//                console.log('Error while fetching welcome items list');
//            }
//        );
//    };
//}]);