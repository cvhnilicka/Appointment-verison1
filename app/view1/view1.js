 'use strict';

 angular.module('myApp.view1', ['ngRoute'])

 .config(['$routeProvider', function($routeProvider) {
 	$routeProvider.when('/view1', {
 		templateUrl: 'view1/view1.html',
 		controller: 'View1Ctrl'
 	});
 }]) 


 .controller('View1Ctrl', function($scope, $http, $route) {

 	Date.prototype.getWeek = function() {
 		var onejan = new Date(this.getFullYear(),0,1);
 		var today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
 		var dayOfYear = ((today - onejan + 86400000)/86400000);
 		return Math.ceil(dayOfYear/7)
 	};

 	function getDateOfISOWeek(w, y) {
 		var simple = new Date(y, 0, 1 + (w - 1) * 7);
 		var dow = simple.getDay();
 		var ISOweekStart = simple;
 		if (dow <= 4)
 			ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
 		else
 			ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
 		return ISOweekStart;
 	}
 	var __num_appts = {};
 	var avail_appt = [];
 	var threshold = 3;
 	var weeks = ["week1", "week2"];
 	var blackouts = {
 		"Mon" : {
 			"date" : "",
 			"times" : []
 		},
 		"Tue" : {
 			"date" : "",
 			"times" : []
 		},
 		"Wed" : {
 			"date" : "",
 			"times" : []
 		},
 		"Thu" : {
 			"date" : "",
 			"times" : []
 		},
 		"Fri" : {
 			"date" : "",
 			"times" : []
 		}

 	};
 	var schedule = {
 		"week1":{
 			"Mon" : {
 				'date': "",
 				'8:00': [],
 				'8:30': [],
 				'9:00': [],
 				'9:30': [],
 				'10:00': [],
 				'10:30': [],
 				'11:00': [],
 				'11:30': [],
 				'12:00': [],
 				'12:30': [],
 				'13:00': [],
 				'13:30': [],
 				'14:00': [],
 				'14:30': [],
 				'15:00': [],
 				'15:30': [],
 				'16:00': [],
 				'16:30': [],
 				'17:00': []
 			},
 			"Tue" : {
 				'date': "",
 				'8:00': [],
 				'8:30': [],
 				'9:00': [],
 				'9:30': [],
 				'10:00': [],
 				'10:30': [],
 				'11:00': [],
 				'11:30': [],
 				'12:00': [],
 				'12:30': [],
 				'13:00': [],
 				'13:30': [],
 				'14:00': [],
 				'14:30': [],
 				'15:00': [],
 				'15:30': [],
 				'16:00': [],
 				'16:30': [],
 				'17:00': []
 			},
 			"Wed" : {
 				'date': "",
 				'8:00': [],
 				'8:30': [],
 				'9:00': [],
 				'9:30': [],
 				'10:00': [],
 				'10:30': [],
 				'11:00': [],
 				'11:30': [],
 				'12:00': [],
 				'12:30': [],
 				'13:00': [],
 				'13:30': [],
 				'14:00': [],
 				'14:30': [],
 				'15:00': [],
 				'15:30': [],
 				'16:00': [],
 				'16:30': [],
 				'17:00': []
 			},
 			"Thu" : {
 				'date': "",
 				'8:00': [],
 				'8:30': [],
 				'9:00': [],
 				'9:30': [],
 				'10:00': [],
 				'10:30': [],
 				'11:00': [],
 				'11:30': [],
 				'12:00': [],
 				'12:30': [],
 				'13:00': [],
 				'13:30': [],
 				'14:00': [],
 				'14:30': [],
 				'15:00': [],
 				'15:30': [],
 				'16:00': [],
 				'16:30': [],
 				'17:00': []
 			},
 			"Fri" : {
 				'date': "",
 				'8:00': [],
 				'8:30': [],
 				'9:00': [],
 				'9:30': [],
 				'10:00': [],
 				'10:30': [],
 				'11:00': [],
 				'11:30': [],
 				'12:00': [],
 				'12:30': [],
 				'13:00': [],
 				'13:30': [],
 				'14:00': [],
 				'14:30': [],
 				'15:00': [],
 				'15:30': [],
 				'16:00': [],
 				'16:30': [],
 				'17:00': []
 			}
 		},
 		"week2": {
 			"Mon" : {
 				'date': "",
 				'8:00': [],
 				'8:30': [],
 				'9:00': [],
 				'9:30': [],
 				'10:00': [],
 				'10:30': [],
 				'11:00': [],
 				'11:30': [],
 				'12:00': [],
 				'12:30': [],
 				'13:00': [],
 				'13:30': [],
 				'14:00': [],
 				'14:30': [],
 				'15:00': [],
 				'15:30': [],
 				'16:00': [],
 				'16:30': [],
 				'17:00': []
 			},
 			"Tue" : {
 				'date': "",
 				'8:00': [],
 				'8:30': [],
 				'9:00': [],
 				'9:30': [],
 				'10:00': [],
 				'10:30': [],
 				'11:00': [],
 				'11:30': [],
 				'12:00': [],
 				'12:30': [],
 				'13:00': [],
 				'13:30': [],
 				'14:00': [],
 				'14:30': [],
 				'15:00': [],
 				'15:30': [],
 				'16:00': [],
 				'16:30': [],
 				'17:00': []
 			},
 			"Wed" : {
 				'date': "",
 				'8:00': [],
 				'8:30': [],
 				'9:00': [],
 				'9:30': [],
 				'10:00': [],
 				'10:30': [],
 				'11:00': [],
 				'11:30': [],
 				'12:00': [],
 				'12:30': [],
 				'13:00': [],
 				'13:30': [],
 				'14:00': [],
 				'14:30': [],
 				'15:00': [],
 				'15:30': [],
 				'16:00': [],
 				'16:30': [],
 				'17:00': []
 			},
 			"Thu" : {
 				'date': "",
 				'8:00': [],
 				'8:30': [],
 				'9:00': [],
 				'9:30': [],
 				'10:00': [],
 				'10:30': [],
 				'11:00': [],
 				'11:30': [],
 				'12:00': [],
 				'12:30': [],
 				'13:00': [],
 				'13:30': [],
 				'14:00': [],
 				'14:30': [],
 				'15:00': [],
 				'15:30': [],
 				'16:00': [],
 				'16:30': [],
 				'17:00': []
 			},
 			"Fri" : {
 				'date': "",
 				'8:00': [],
 				'8:30': [],
 				'9:00': [],
 				'9:30': [],
 				'10:00': [],
 				'10:30': [],
 				'11:00': [],
 				'11:30': [],
 				'12:00': [],
 				'12:30': [],
 				'13:00': [],
 				'13:30': [],
 				'14:00': [],
 				'14:30': [],
 				'15:00': [],
 				'15:30': [],
 				'16:00': [],
 				'16:30': [],
 				'17:00': []
 			}
 		}
 	};
 	var url = 'http://localhost:8080/api/schedule';
 	var times = ['8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00',
 	'16:30','17:00'];
 	var days = ["Mon", "Tue", "Wed", "Thu", "Fri"];


 	function addDays(date, days) {
 		var result = new Date(date);
 		result.setDate(result.getDate() + days);
 		return result;
 	}



 	function isInArray(value, array) {
 		return array.indexOf(value) > -1;
 	}

 	var hourCheck = function(day, time, agent){

 		var latehours = ['16:30','17:00']
 		if(time === '16:00' || time === "16:30"){
 			for(var i = 0; i < days.length; i++){
 				for(var j = 0; j < latehours.length; j++){
 				}
 			}
 		}
 		else {
 			return -1
 		}
 	}

 	function getDateOfISOWeek(w, y) {
 		var simple = new Date(y, 0, 1 + (w - 1) * 7);
 		var dow = simple.getDay();
 		var ISOweekStart = simple;
 		if (dow <= 4)
 			ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
 		else
 			ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
 		return ISOweekStart;
 	}

 	var linkThatUp = function(day, time, date, week){

 		var elementclass = day + time;
 		var element = document.getElementsByClassName(elementclass);

 		if(element[0].children.length < 1){

 			var link = document.createElement("a");
 			var txt = document.createTextNode(time);
 			link.appendChild(txt); 
 			var linktxt = "#!/view2"
 			link.setAttribute('href', linktxt);
 			link.setAttribute('class', 'linker');
 			// debugger;
 			var passingDay = JSON.stringify(schedule[week][day]);
 			link.setAttribute('onClick', 'passThrough(\'' + date +',' + time + ',' + passingDay + '\')')
 			element[0].className = elementclass + " " + "avail";
 			element[0].appendChild(link);

 		}

 	}

 	var deLinkIt = function(day, time){

 		var elementclass = day + time;

 		var element = document.getElementsByClassName(elementclass);
 		if(element[0].children.length > 0){
 			while (element[0].firstChild) {

 				element[0].className = elementclass + ' td unavail'
 				element[0].removeChild(element[0].firstChild);

 			}

 		}
 	}

 	var clearSched = function(){
 		for(var d = 0; d < days.length; d++){
 			for(var t = 0; t < times.length; t++){
 				deLinkIt(days[d], times[t]);
 			}
 		}
 	}



 	// $scope.setCookie = function (){

 	// 	$cookies.put("agent", )
 	// }


 	$scope.crossRef = function(week){
 		clearSched()
 		// console.log(blackouts, "<----")
 		for(var i = 0 ; i < days.length; i++){
 				var temp_hours = schedule[week][days[i]]
 				var today = new Date();
 				var temp_date = new Date(temp_hours["date"])
 				
 				var temp_day = temp_date.getDay()
 				var temp_string = String(temp_date.getMonth() + 1) +"/" + String(temp_date.getDate());
 			switch(temp_day){
 				case 1: 
 				$scope.monday = temp_string
 				break;
 				case 2: $scope.tuesday = temp_string
 				break;
 				case 3: $scope.wednesday = temp_string
 				break;
 				case 4: $scope.thursday = temp_string
 				break;
 				case 5: $scope.friday = temp_string
 				break;
 			};
 			if(temp_date.getDate() > today.getDate() || temp_date.getMonth() > today.getMonth()){
 				

 			// console.log(temp_hours)
 			// debugger;
 			for(var t = 0; t < times.length; t++){
 				// debugger;
 				// console.log(times[t], blackouts[days[i]])
 				var checkyo = blackouts[days[i]]["date"]
 				if(checkyo !== ""){
 					// debugger;
 					checkyo = new Date(checkyo)
 				}
 				// console.log(isInArray(times[t], blackouts[days[i]]["times"]))
 				// console.log(checkyo === temp_date)
 				if(isInArray(times[t], blackouts[days[i]]["times"]) &&  (checkyo.getMonth() === temp_date.getMonth() && checkyo.getDate() === temp_date.getDate())){
 					continue
 				}
 				else {
 					var apNum = 0
 					if(__num_appts[times[t]] !== undefined){
 						apNum = __num_appts[times[t]]
 					}
 					
 					if(temp_hours[times[t]].length > (threshold + apNum)){
 						debugger;
 						var appBefore = __num_appts[times[t-1]]
 						if(appBefore === undefined){
 							appBefore = 0;
 						}
 						var appAfter = __num_appts[times[t+1]]
 						if(appAfter === undefined){
 							appAfter = 0;
 						}
 						if(temp_hours[times[t-1]] !== undefined && (temp_hours[times[t-1]].length - appBefore)  > threshold){
 							linkThatUp(days[i], times[t], temp_date, week)
 						}
 						if(temp_hours[times[t+1]] !== undefined && (temp_hours[times[t+1]].length  - appAfter) > threshold){
 							linkThatUp(days[i], times[t], temp_date, week)
 						}

 					}
 					else {
 						deLinkIt(days[i], times[t])
 					}
 				}
 			}
 		}
 	}
 }

 $scope.list = function() {

 	var d = new Date();
 	var w = d.getWeek();
 	var y = d.getFullYear();
 	var week = getDateOfISOWeek(w, y)
 	// console.log(new Date(week))
 		$http.get('/api/appointments').success(function(data){
 			var count = 0;
 			// debugger;
 			for(var i = 0; i<data.length; i++){
 				var temp = new Date(data[i]['date'])
 				// debugger;
 				var ag = data[i]
 				// if(temp.getDate() === d.getDate() && temp.getMonth() === d.getMonth()){
 					// debugger;
 					var t1 = data[i]["time"].split("-")[0]
 					var t1_5 = times[times.indexOf(t1)+1]
 					var t2 = data[i]["time"].split("-")[1]
 					debugger;
 					if(__num_appts[t1] === undefined){
 						__num_appts[t1] = 1;
 					}
 					else {
 						__num_appts[t1] = __num_appts[t1] + 1
 					}
 					if(__num_appts[t2] === undefined){
 						__num_appts[t2] = 1;
 					}
 					else {
 						__num_appts[t2] = __num_appts[t1] + 1
 					}
 					if(__num_appts[t1_5] === undefined){
 						__num_appts[t1_5] = 1;
 					}
 					else {
 						__num_appts[t1_5] = __num_appts[t1] + 1
 					}
 				// }
 			}
 		})
 	
 	$http.get('/api/blackouts').success(function(data){
 		for(var i = 0; i < data.length; i++){
 			// console.log(data[i])
 			var temptimes = JSON.parse(data[i]['times'])
 			var date = new Date(data[i]['date'])
 			
 			// console.log(date, week)
 			// console.log("THIS IS THE OPPORTUNITY WE HAVE BEEN WAITING FOR")
 			// console.log(date)
 			if(date.getMonth() === week.getMonth() && date.getWeek() === date.getWeek()){
 				for(var d = 0; d < days.length; d++){
 					var tempday = temptimes[days[d]]
 					for(var t = 0; t < times.length; t++){
 						if(tempday[times[t]] === 1){
 							// console.log("MATHAFUKER")
 							// debugger;
 							var tempdate = new Date(tempday["date"])
 							blackouts[days[d]]["date"] = tempdate
 							blackouts[days[d]]["times"].push(times[t])
 							
 						}
 					}
 					
 				}
 			}
 		}
 	})


 	// Here is where we pull down available agents

 	$http.get(url).success(function(data){
 			for( var w = 0; w < weeks.length; w++){
 				for(var i = 0; i<days.length; i++){
 					var temp_day_data = data[weeks[w]][days[i]]
 					// console.log(temp_day_data)
 					for (var key in temp_day_data) {
 					if (temp_day_data.hasOwnProperty(key)) {
 						if(key === "date"){
 							var temp_date = data[weeks[w]][days[i]][key];
 							schedule[weeks[w]][days[i]]["date"] = temp_date

 						}	
 						else if(key === "agents"){
 							var temp_agents = temp_day_data[key];
 							for(var agent in temp_agents){
 								var temp_hours = temp_day_data['agents'][agent];
 								for (var t = 0; t < times.length; t++){
 									if(isInArray(times[t], temp_hours)){
 										schedule[weeks[w]][days[i]][times[t]].push(agent)
 									}
 								}
 							}
 						}
   							}
   						}
   					}
   				}
   				console.log(schedule)
   				$scope.crossRef("week1");

   			})

 }
 $scope.list();

 $scope.update = function() {
 	clearSched()
 	var val = parseInt(angular.element("#minimum").val())
 	if(threshold !== val){
 		threshold = val
 		for(var w = weeks.length-1; w>=0; w--){
 			$scope.crossRef(weeks[w])
 		}
 	}
 	else {
 		console.log("ITS THE SAME STUPID")
 	}

 }




});