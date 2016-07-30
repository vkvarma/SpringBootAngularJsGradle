"use strict";

/**
 *
 * @author vivek krishna varma
 */

App.factory("MenuItemService", ["config", "$resource", function(config, $resource)	{
	return $resource(config.HOME_URL, 
	{},
	{
			getMenuItems	:	{
				method	:"GET",
				isArray	:true
			}
		},
		{
			stripTrailingSlashes: false
		}
	);
}]);

//App.factory('WelcomeService', ['$http', '$q', function ($http, $q) {
//    return {
//        fetchAllMenuItems : function () {
//            return $http.get('http://localhost:8080/XRS/menuitems/')
//                .then(
//                        function (response) {
//                            return response.data;
//                        },
//                        function (errResponse) {
//                            console.error('Error while fetching menu items');
//                            return $q.reject(errResponse);
//                        }
//                );
//        }
//    };
//}]);