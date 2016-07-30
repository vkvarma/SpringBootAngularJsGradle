"use strict";

/**
 *
 * @author vivek krishna varma
 */

App.factory("WelcomeService", ["$resource", function($resource)	{
		    return $resource("/", {}, {
		    	query  : {  
		            method  : "GET",
		            isArray : true
		    	}
		    },
		    {
		        stripTrailingSlashes: false
		    }
		    );
	  }
]);

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