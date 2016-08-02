"use strict";

/**
 *
 * @author vivek krishna varma
 */

App.controller("MenuItemController", ["$scope","MenuItemService",	function($scope, MenuItemService) {
	
	$scope.menuItems = MenuItemService.getMenuItems();	
	$scope.tab = "user";

	$scope.setTab = function(tab) {
		$scope.tab = tab;
    };

    $scope.isSet = function(tab) {
      return ($scope.tab === tab);
    };
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