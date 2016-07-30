"use strict";

/**
 *
 * @author vivek krishna varma
 */
	
App.factory("UserService", ["config", "$resource", function(config, $resource) {
	return $resource(config.USER_BY_ID_SERVICE_URL, 
		{
			id:"@id"
		},
		{
			getUserById	:	{
				method	:"GET"
			},
			fetchAllUsers :	{
				method	:"GET",
				isArray	:true
			},
			saveUser	:	{
				method	:"POST"
			},
			deleteUser	:	{
				method	:"DELETE"
			},
			updateUser	:	{
				method	:"PUT"
			}
		},
		{
			stripTrailingSlashes: false
		}
	);
}]);


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