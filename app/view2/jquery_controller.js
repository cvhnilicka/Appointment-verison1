var times = ['8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00',
'16:30','17:00'];

var hightimes = ['13:00','13:30','14:00','14:30','15:00','15:30','16:00',
'16:30','17:00']

var timesConverted = {
	"13:00" : "1:00",
	"13:30" : "1:30",
	"14:00" : "2:00",
	"14:30" : "2:30",
	"15:00" : "3:00",
	"15:30" : "3:30",
	"16:00" : "4:00",
	"16:30" : "4:30",
	"17:00" : "5:00",
	"17:30" : "5:30"
}

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var device_type = null;
var device_brand = null;
var consult_type = null;
var name = null;
var description = null;
var __temp_cookie = document.cookie;
var email = null;
var __date = null;
var __time = null;
var __secondtime = null;
var __times = null;
var __schedule = null;
var __realsecond = null;

function isInArray(value, array) {
	return array.indexOf(value) > -1;
}

var convertTime = function(time) {
	if(isInArray(time, hightimes)){
		return timesConverted[time];
	}
	return time;
}


$(document).ready(function(){
	if(__temp_cookie !== undefined){
		
		console.log(document.cookie)
		// alert(document.cookie)
		var array = __temp_cookie.split(';')
		
		for(var i = 0; i < array.length; i++){
			if(array[i].indexOf("time=") !== -1){
				__time = array[i].split("=")[1]
			}
			if(array[i].indexOf("date=") !== -1){
				__date = new Date(array[i].split("=")[1]);
			}
			if(array[i].indexOf("daysched=") !== -1){
				__schedule = JSON.parse(array[i].split("=")[1]);
			}
		}

		// debugger;
		// if(array.length > 2){
		// 	__date = new Date(array[array.length-2].split("=")[1]);
		// 	__time = array[array.length-1].split("=")[1];
		// }
		// else {
		// 	__date = new Date(array[0].split("=")[1]);;
		// 	__time = array[1].split("=")[1];
		// }
		var i = times.indexOf(__time)
		var _temp_time = convertTime(times[i+2])
		var arr = _temp_time.split(":")
		__realsecond = convertTime(times[i+1])
		if(arr[1] === "00"){
			__secondtime = __time.split(":")[0] + ":45"
		}
		else {
			__secondtime = arr[0] + ":15"
		}
		__times = __time + "-" + __secondtime
		// alert(__date)
		alert("You have chosen " + __times + " on " + __date.getDate() + " " + month[__date.getMonth()])

		// alert("You have chosen " + date + "for your Appointment")
		$('#date').text("Date: " + __date.getDate() + " " + month[__date.getMonth()]);
		$('#time').text("Time: " + __times)

	}
})


function grayedOut(id, cls){
	var children = $(cls);
	for(var i = 0; i < children.length; i++){
		if(children[i].id !== id){
			$(children[i]).addClass("grayed")
		// console.log(children[i])
	}
	else {
		if($(children[i]).hasClass("grayed")){
			$(children[i]).removeClass('grayed')
		}
	}
}
}

function deGray(cls){
	var children = $(cls);
	console.log(children)
	for(var i = 0; i < children.length; i++){
		if($(children[i]).hasClass("grayed")){
			$(children[i]).removeClass('grayed')
		}
	}
}

function displayById(id) {
	if (id === "desktop" || id === "laptop"){
		if($(".mobile-type").css("display") !== "none"){
			$(".mobile-type").css("display", "none");
			deGray(".brand")
			if($(".repair-type").css("display") !== "none") {
				$(".repair-type").css("display", "none");
				deGray('.consult-type')
			}
		}
		$(".laptop-desktop").css({
			"opacity":"0",
			"display":"table-row",
		}).show().animate({opacity:1})
		// .css("display", "table-row");
	}
	if(id === "mobile"){
		if($(".laptop-desktop").css("display") !== "none"){
			$(".laptop-desktop").css("display", "none");
			deGray('.brand')
			if($(".repair-type").css("display") !== "none") {
				$(".repair-type").css("display", "none");
				deGray('.consult-type')

			}
		}
		$(".mobile-type").css({
			"opacity":"0",
			"display":"table-row",
		}).show().animate({opacity:1})
	}
}


$(document).ready(function(){
	$(".devicetype").click(function(event){
		var id = $(this).attr("id");
		grayedOut(id, ".devicetype");
		device_type = id;
		displayById(id);
	});
});

$(document).ready(function(){
	$(".brand").click(function(event){
		device_brand = $(this).attr("id");
		// debugger;
		grayedOut(device_brand, ".brand");
		$(".repair-type").css({
			"opacity":"0",
			"display":"table-row",
		}).show().animate({opacity:1})

	});
});

$(document).ready(function(){
	$(".consult-type").click(function(event){
		consult_type = $(this).attr("id");
		grayedOut(consult_type, ".consult-type");
		$(".input-section").css({
			"opacity":"0",
			"display":"inline-block",
		}).show().animate({opacity:1})
	});
});

$(document).ready(function() {
	$(".submit").click(function(event){
		var _num_agents = __schedule[__time]
		var ran = Math.floor((Math.random() * _num_agents.length) + 1);
		var agent = _num_agents[ran-1]
		// debugger;
		name = $("#firstName").val() + " " + $("#lastName").val();
		description = $("#description").val();
		email = $("#email").val();
		
		//console.log(device_type + device_brand + consult_type + name + description + date);

		// alert(__times)
		$.ajax({
			type: "POST",
			url: "/api/appointments",
			data: {
				device_type: device_type,
				consult_type: consult_type,
				device_brand: device_brand,
				name: name,
				email: email,
				description: description,
				date: __date,
				time: __times
			},
			success: function(d) {
				console.log(d)
				$.ajax({
					type: "PUT",
					url: "/api/schedule",
					data : {
						time1 : __time,
						time2 : __realsecond,
						date : __date,
						agent : agent
					}
				})
				// document.cookie = null;
				alert("Appointment for " + cookie + " is successfully reserved.\n Description: " + $("#description").val() + "\n" + ($("#firstName").val() + " " + $("#lastName").val()))
			},
			error: function(jqXHR, textStatus, errorThrown) {

			}
		});
	})


})







