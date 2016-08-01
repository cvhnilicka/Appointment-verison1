'use strict';


var apiview = angular.module('myApp.apiview', ['ngRoute']);
//var Appointment = require('/app/models/appointment');
apiview.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/api/appointments', {
		templateUrl: '/api/appointments',
		controller: 'ApiViewCont'
	});
}])

apiview.controller('ApiViewCont', function($scope, $route) {

});