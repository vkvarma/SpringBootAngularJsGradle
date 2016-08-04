"use strict";

/**
 *
 * @author vivek krishna varma
 */

"use strict";

/**
 *
 * @author vivek krishna varma
 */

App.factory("LoginService", ["config",	"$resource", "$http", "Cookies", "DemoUtil", function(config, $resource, $http, Cookies ,DemoUtil) { 
	
	var loginResources = $resource(config.LOGIN_SERVICE_URL, {}, {
		options: {
			method: "OPTIONS",
			cache: false
		}
	});	
	
	var isCSRFTokenInvalidOrMissing = function (data, status) {
		return (status === 403 && data.message && data.message.toLowerCase().indexOf('csrf') > -1) || (status === 0 && data === null);
	};
	
	return {
		doLogin : function(username, password, successHandler, errorHandler) {
	
			// Obtain a CSRF token
			loginResources.options().$promise.then(function (response) {
				console.log('Obtained a CSRF token in a cookie', response);
	
				// Extract the CSRF token
				var csrfToken = Cookies.getFromDocument($http.defaults.xsrfCookieName);
				console.log('Extracted the CSRF token from the cookie', csrfToken);
	
				// Prepare the headers
				var headers = {
					'Content-Type': 'application/json'
				};
				headers[$http.defaults.xsrfHeaderName] = csrfToken;
	
				// Post the credentials for logging in
				
				console.log("DemoUtil.isNotNull(csrfToken)  = "+DemoUtil.isNotNull(csrfToken));
				var loginObj = {
						username        : username,
						password        : password,
						sessionId       : csrfToken,
						authenticated   : DemoUtil.isNotNull(csrfToken) 
				};
				
				$http.post(config.SIGN_IN_SERVICE_URL, loginObj, {
					headers: headers
				}).success(successHandler)	
				  .error(function (data, status, headers, config) {
	
						if (isCSRFTokenInvalidOrMissing(data, status)) {
							console.error('The obtained CSRF token was either missing or invalid. Have you turned on your cookies?');
	
						} else {
							// error handler...
							errorHandler(data, status, headers, config);
						}
					});
	
			}).
			catch(function(response) {
				console.error("Could not contact the server...", response);
			});
		},
		doLogout : function(successHandler, errorHandler) {
			
			// Extract the CSRF token
			var csrfToken = Cookies.getFromDocument($http.defaults.xsrfCookieName);
			console.log('Extracted the CSRF token from the cookie', csrfToken);

			// Prepare the headers
			var headers = {
				'Content-Type': 'application/json'
			};
			headers[$http.defaults.xsrfHeaderName] = csrfToken;
			
			$http.post(config.LOGOUT_SERVICE_URL, {
				headers: headers
			}).success(successHandler)	
			  .error(function (data, status, headers, config) {

					if (isCSRFTokenInvalidOrMissing(data, status)) {
						console.error('The obtained CSRF token was either missing or invalid. Have you turned on your cookies?');

					} else {
						// error handler...
						errorHandler(data, status, headers, config);
					}
				});
		}		
	 }
}]);