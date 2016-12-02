 'use strict';

 angular.module('myApp.dayViews', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
 	$routeProvider
 	.when('/monday', {
 		templateUrl: 'dayviews/monday.html',
 		controller: 'monCont'
 	})
 	.when('/tuesday', {
 		templateUrl: 'dayviews/tuesday.html',
 		controller: 'tueCont'
 	})
 	.when('/wednesday', {
 		templateUrl: 'dayviews/wednesday.html',
 		controller: 'wedCont'
 	})
 	.when('/thursday', {
 		templateUrl: 'dayviews/thursday.html',
 		controller: 'thuCont'
 	})
 	.when('/friday', {
 		templateUrl: 'dayviews/friday.html',
 		controller: 'friCont'
 	});
 }])

.controller('monCont', function($scope, $route) {
	console.log("mon")

})
.controller('tueCont', function($scope, $route) {
console.log("tue")



})
.controller('wedCont', function($scope, $route) {

console.log("wed")


})
.controller('thuCont', function($scope, $route) {

console.log("thu")


})
.controller('friCont', function($scope, $route) {


console.log("fri")

});