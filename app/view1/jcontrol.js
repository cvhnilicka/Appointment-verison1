var times = ['8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00',
 	'16:30','17:00'];

 var hightimes = ['13:00','13:30','14:00','14:30','15:00','15:30','16:00',
 	'16:30','17:00']

 	var time_convert = {
	"13:00" : "1:00",
	"13:30" : "1:30",
	"14:00" : "2:00",
	"14:30" : "2:30",
	"15:00" : "3:00",
	"15:30" : "3:30",
	"16:00" : "4:00",
	"16:30" : "4:30",
	"17:00" : "5:00"
}

$(document).ready(function(){
	console.log("loaded fda ")
	$(".week").fadeIn();
	$(".row").fadeIn("slow");
});


$(document).ready(function(){
	$(".secondweek").click(function(){
		$(".firstweek").css("opacity", "1")
		$(".secondweek").css("opacity", "0")
	})
	$(".firstweek").click(function(){
		$(".secondweek").css("opacity", "1")
		$(".firstweek").css("opacity", "0")
	})
})

// $(document).on("mouseenter mouseleave", ".avail", function(event){
// 	var temp = null
// 	var ths = null
// 	var days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
// 	if(event.type === "mouseenter"){
// 	ths = this
// 	$(ths).addClass("hover")

// 	var this_hour = $(this).text()
// 	var this_class = $(this).attr("class")
// 	var day = this_class.split(this_hour + " avail")[0]
// 	// console.log(day)
// 	// console.log()
// 	var next_hour = times[(times.indexOf(this_hour)+1)]
// 	var next_highlight = day + next_hour 
// 	// console.log(next_highlight)
// 	// console.log(next_highlight.indexOf("undefined"))
// 	if(next_highlight.indexOf("undefined") === -1){
// 		var classCheck = next_highlight
// 		temp = document.getElementsByClassName(classCheck)[0]
// 		// console.log(temp)
// 		if($(temp).hasClass("avail")){
// 			$(temp).addClass("hover")
// 		}
// 	}
// 	else {
// 		console.log("nah bro")
// 	}
// }
// else if (event.type === "mouseleave"){
// 	$(this).removeClass("hover")
// 	var this_hour = $(this).text()
// 	var this_class = $(this).attr("class")
// 	var day = this_class.split(this_hour + " avail")[0]
// 	var next_hour = times[(times.indexOf(this_hour)+1)]
// 	var prev_hour = times[(times.indexOf(this_hour)-1)]
// 	var prev_highlight = day + prev_hour
// 	var next_highlight = day + next_hour 
// 	if(next_highlight.indexOf("undefined") === -1){
// 		var classCheck = next_highlight
// 		temp = document.getElementsByClassName(classCheck)[0]
// 		// console.log(temp)
// 		if($(temp).hasClass("avail")){
// 			$(temp).removeClass("hover")
// 		}
// 	}
// 	else {
// 		console.log("nah bro")
// 	}
// 	if(prev_highlight.indexOf("undefined") === -1){
// 		var classCheck = next_highlight
// 		temp = document.getElementsByClassName(classCheck)[0]
// 		console.log(temp)
// 		if($(temp).hasClass("avail")){
// 			$(temp).removeClass("hover")
// 		}
// 	}
// 	else {
// 		console.log("nah bro")
// 	}
	
// 	}

// })



$(document).ready(function(){
	$('a.redirect').click(function(){
		console.log("shit ya")
	})
})

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
    	var cookie = cookies[i];
    	var eqPos = cookie.indexOf("=");
    	var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    	document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

var passThrough = function(e) {
	debugger;
	deleteAllCookies()
	var date = e.split(",")[0]
	var time = e.split(",")[1]
	var sched = e.split("{")[1]
	document.cookie = "date=" + date;
	document.cookie = "time=" + time;
	document.cookie = "daysched=" + "{" + sched
}