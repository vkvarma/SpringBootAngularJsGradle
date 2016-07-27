'use strict';

/**
 *
 * @author vivek krishna varma
 */

var userService = angular.module('userService', ['ngResource']);

userService.factory('UserService', ['$resource', function($resource){
    return $resource('/user/:id', {id:'@id'}, {
    	 get    : {  
	            method  : 'GET'
	     },
	     query  : {  
	            method  : 'GET',
	            isArray : true
	     },
	     save   : {  
	            method  : 'POST'
	     },                
	     delete : {  
	            method  : 'DELETE'
	     },
	     update : {  
	            method  : 'PUT'
	     }
    },
    {
        stripTrailingSlashes: false
    }
   );
  }
]);

/*App.factory('UserService', ['$resource', function($resource) { 
        
    return $resource('http://localhost:8080/XRS/user/:id', {id:'@id'}, {
            get    : {  
                   method  : 'GET'
            },
            query  : {  
                   method  : 'GET',
                   isArray : true
            },
            save   : {  
                   method  : 'POST'
            },                
            delete : {  
                   method  : 'DELETE'
            },
            update : {  
                   method  : 'PUT'
            }
        },
        {
            stripTrailingSlashes: false
        }
    );
}]);
*/
//App.factory('UserService', ['$http', '$q', function ($http, $q) {
//        return {
//            fetchAllUsers: function () {
//                return $http.get('http://localhost:8080/XRS/user/')
//                        .then(
//                                function (response) {
//                                    return response.data;
//                                },
//                                function (errResponse) {
//                                    console.error('Error while fetching users');
//                                    return $q.reject(errResponse);
//                                }
//                        );
//            },
//            createUser: function (user) {
//                return $http.post('http://localhost:8080/XRS/user/', user)
//                        .then(
//                                function (response) {
//                                    return response.data;
//                                },
//                                function (errResponse) {
//                                    console.error('Error while creating user');
//                                    return $q.reject(errResponse);
//                                }
//                        );
//            },
//            updateUser: function (user, id) {
//                return $http.put('http://localhost:8080/XRS/user/' + id, user)
//                        .then(
//                                function (response) {
//                                    return response.data;
//                                },
//                                function (errResponse) {
//                                    console.error('Error while updating user');
//                                    return $q.reject(errResponse);
//                                }
//                        );
//            },
//            deleteUser: function (id) {
//                return $http.delete('http://localhost:8080/XRS/user/' + id)
//                        .then(
//                                function (response) {
//                                    return response.data;
//                                },
//                                function (errResponse) {
//                                    console.error('Error while deleting user');
//                                    return $q.reject(errResponse);
//                                }
//                        );
//            }
//
//        };



