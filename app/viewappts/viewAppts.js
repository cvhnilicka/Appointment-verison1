'use strict';


var appointmentsView = angular.module('myApp.appointmentsView', ['ngRoute']);
//var Appointment = require('/app/models/appointment');
appointmentsView.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
	$routeProvider.when('/appointmentsView', {
		templateUrl: 'viewappts/viewAppts.html',
		controller: 'AppointmentsViewCont'
	});
}])

appointmentsView.controller('AppointmentsViewCont', function($scope, $http) {
	var url = 'http://localhost:8080/api/appointments';
	var appts = {};

	$scope.list = function() {
	
		$http.get(url).success(function(data){
			appts = data;
			$scope.appointments = data;
			console.log(appts);
		});
	};

	$scope.deleteAppt = function(event) {
		var id = event.target.id;
		console.log(id);
		$http.delete(url + "/" +  id).success(function(){
			console.log("matha fock");

		})
		$scope.list();

	}

	$scope.list();


});