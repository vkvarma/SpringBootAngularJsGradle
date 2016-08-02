"use strict";

App.factory("DemoUtil", function () {

	return {		
		isNotNull : function (objectVal) {
			return typeof objectVal != "undefined" && objectVal != null;
		}
	};
});