'use strict';

myApp.service('sharedProperties', function () {
	return {
		getData: function () {
			return angular.fromJson(sessionStorage.sharedProperties);
		},
		setData: function (value) {
			sessionStorage.sharedProperties = angular.toJson(value);
		},
	}
});