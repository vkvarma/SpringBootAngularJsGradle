"use strict";

/**
 *
 * @author vivek krishna varma
 */

App.controller("WelcomeController", ["$scope","WelcomeService",	function($scope, WelcomeService) {
    $scope.menuItems = WelcomeService.query();
  }
]);

/*App.controller('WelcomeController', ['async','$scope', 'WelcomeService', function(async,$scope,WelcomeService) {
    var self       = this;
    self.menuItems = async;
}]);*/


//App.controller('WelcomeController', ['$scope', 'WelcomeService', function ($scope, WelcomeService) {
//        
//    var self          = this;
//    self.menuItem     = new WelcomeService();
//    self.menuItems    = [];
//                
//    self.fetchAllMenuItems = function () {     
//        self.menuItems = WelcomeService.query();
//    };
//    
//    self.fetchAllMenuItems();
//}]);


//
//App.controller('WelcomeController', ['$scope', 'WelcomeService', function ($scope, WelcomeService) {
//    var self          = this;
//    self.menuItem     = new WelcomeService();
//    self.menuItems    = [];
//
//
//
//
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