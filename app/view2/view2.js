'use strict';


var view2cont = angular.module('myApp.view2', ['ngRoute']);
//var Appointment = require('/app/models/appointment');
view2cont.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view2', {
		templateUrl: 'view2/view2.html',
		controller: 'View2Ctrl'
	});
}])

view2cont.controller('View2Ctrl', function($scope) {
		
			var dt = null;
			var ct = null;

	$scope.ShowId = function(event)
	{
		if(event.target.id === "laptop" || event.target.id === "desktop" || event.target.id === "mobile") {
			dt = event.target.id;
		}
		if(event.target.id === "software" || event.target.id === "hardware"){
			ct = event.target.id;
		}
		console.log("device type: ", dt, "consult type: ", ct);
	};


	//var newAppt = new Appointment

});