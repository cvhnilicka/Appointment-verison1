'use strict';

var view2cont = angular.module('myApp.view2', ['ngRoute']);
//var Appointment = require('/app/models/appointment');
view2cont.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view2', {
		templateUrl: 'view2/view2.html',
		controller: 'View2Ctrl'
	});
}])

view2cont.controller('View2Ctrl', function($scope, $route) {


		$scope.reserveAppt = function() {
			$route.reload();
		}
	
});