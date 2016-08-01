Date.prototype.getWeek = function() {
  var onejan = new Date(this.getFullYear(),0,1);
  var today = new Date(this.getFullYear(),this.getMonth(),this.getDate());
  var dayOfYear = ((today - onejan + 86400000)/86400000);
  return Math.ceil(dayOfYear/7)
};

var dates = [];
var thisweek = null;
var update = false;

var ids = ["#b_1_800", "#b_2_800", "#b_3_800", "#b_4_800", "#b_5_800", "#b_1_830", "#b_2_830", 
"#b_3_830", "#b_4_830", "#b_5_830", "#b_1_900", "#b_2_900", "#b_3_900", "#b_4_900", "#b_5_900", 
"#b_1_930", "#b_2_930", "#b_3_930", "#b_4_930", "#b_5_930",  "#b_1_1000", "#b_2_1000", "#b_3_1000", "#b_4_1000", "#b_5_1000", 
 "#b_1_1030", "#b_2_1030", "#b_3_1030", "#b_4_1030", "#b_5_1030", 
 "#b_1_1100", "#b_2_1100", "#b_3_1100", "#b_4_1100", "#b_5_1100", 
 "#b_1_1130", "#b_2_1130", "#b_3_1130", "#b_4_1130", "#b_5_1130", 
 "#b_1_1200", "#b_2_1200", "#b_3_1200", "#b_4_1200", "#b_5_1200", 
 "#b_1_1230", "#b_2_1230", "#b_3_1230", "#b_4_1230", "#b_5_1230", 
 "#b_1_1300", "#b_2_1300", "#b_3_1300", "#b_4_1300", "#b_5_1300", 
 "#b_1_1330", "#b_2_1330", "#b_3_1330", "#b_4_1330", "#b_5_1330", 
 "#b_1_1400", "#b_2_1400", "#b_3_1400", "#b_4_1400", "#b_5_1400", 
 "#b_1_1430", "#b_2_1430", "#b_3_1430", "#b_4_1430", "#b_5_1430", 
 "#b_1_1500", "#b_2_1500", "#b_3_1500", "#b_4_1500", "#b_5_1500", 
 "#b_1_1530", "#b_2_1530", "#b_3_1530", "#b_4_1530", "#b_5_1530", 
 "#b_1_1600", "#b_2_1600", "#b_3_1600", "#b_4_1600", "#b_5_1600", 
 "#b_1_1630", "#b_2_1630", "#b_3_1630", "#b_4_1630", "#b_5_1630", 
 "#b_1_1700", "#b_2_1700", "#b_3_1700", "#b_4_1700", "#b_5_1700" ];

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

var setWeek = function(week, year){

  var days = ["#mon", "#tue", "#wed", "#thu", "#fri"];

  var weekdate = getDateOfISOWeek(week, year)
  thisweek = weekdate;
  dates = [];
  var mo = new Date(year, weekdate.getMonth(), weekdate.getDate())
  dates.push(mo);
  var tu = new Date(year, weekdate.getMonth(), weekdate.getDate()+1)
  dates.push(tu)
  var we = new Date(year, weekdate.getMonth(), weekdate.getDate()+2)
  dates.push(we);
  var th = new Date(year, weekdate.getMonth(), weekdate.getDate()+3)
  dates.push(th);
  var fr = new Date(year, weekdate.getMonth(), weekdate.getDate()+4)
  dates.push(fr);
  // console.log(dates)

  for(var i = 0; i < days.length; i++){
    var m = dates[i].getMonth() + 1 
    var d = dates[i].getDate()
    // console.log(d)

    $(days[i]).text(m + "/" + d);
  }



}

function clearBlack() {
  for(var i = 0; i < ids.length; i++){

    $(ids[i]).css({background:"#0B0"});
    $(ids[i]).removeClass('blacked');
    $(ids[i]).addClass('not')
  }
}

$('#weekpicker').bind('input', function() { 
 var input = $(this).val()
 var w = input.split("-W")[1]
 var y = input.split("-W")[0]
 clearBlack()
 setWeek(w,y)

});


var saveBlackout = function() {
  var template = {
    "Mon" : {
      'date': dates[0],
      '8:00':0,
      '8:30':0,
      '9:00':0,
      '9:30':0,
      '10:00':0,
      '10:30':0,
      '11:00':0,
      '11:30':0,
      '12:00':0,
      '12:30':0,
      '13:00':0,
      '13:30':0,
      '14:00':0,
      '14:30':0,
      '15:00':0,
      '15:30':0,
      '16:00':0,
      '16:30':0,
      '17:00':0
    },
    "Tue" : {
      'date': dates[1],
      '8:00':0,
      '8:30':0,
      '9:00':0,
      '9:30':0,
      '10:00':0,
      '10:30':0,
      '11:00':0,
      '11:30':0,
      '12:00':0,
      '12:30':0,
      '13:00':0,
      '13:30':0,
      '14:00':0,
      '14:30':0,
      '15:00':0,
      '15:30':0,
      '16:00':0,
      '16:30':0,
      '17:00':0
    },
    "Wed" : {
      'date': dates[2],
      '8:00':0,
      '8:30':0,
      '9:00':0,
      '9:30':0,
      '10:00':0,
      '10:30':0,
      '11:00':0,
      '11:30':0,
      '12:00':0,
      '12:30':0,
      '13:00':0,
      '13:30':0,
      '14:00':0,
      '14:30':0,
      '15:00':0,
      '15:30':0,
      '16:00':0,
      '16:30':0,
      '17:00':0
    },
    "Thu" : {
      'date': dates[3],
      '8:00':0,
      '8:30':0,
      '9:00':0,
      '9:30':0,
      '10:00':0,
      '10:30':0,
      '11:00':0,
      '11:30':0,
      '12:00':0,
      '12:30':0,
      '13:00':0,
      '13:30':0,
      '14:00':0,
      '14:30':0,
      '15:00':0,
      '15:30':0,
      '16:00':0,
      '16:30':0,
      '17:00':0
    },
    "Fri" : {
      'date': dates[4],
      '8:00':0,
      '8:30':0,
      '9:00':0,
      '9:30':0,
      '10:00':0,
      '10:30':0,
      '11:00':0,
      '11:30':0,
      '12:00':0,
      '12:30':0,
      '13:00':0,
      '13:30':0,
      '14:00':0,
      '14:30':0,
      '15:00':0,
      '15:30':0,
      '16:00':0,
      '16:30':0,
      '17:00':0
    }
  }



  for(var i = 0; i < ids.length; i++){
    if($(ids[i]).hasClass("blacked")){
      var d = ids[i].split("_")[1]
      var t = ids[i].split("_")[2]
      var l = t.length - 2
      var tf = t.substring(0, l) + ":" + t.substring(l)

      switch(parseInt(d)){
        case 0: 
        template["Sun"][tf] = 1;
        break;
        case 1: template["Mon"][tf] = 1;
        break;
        case 2 : template["Tue"][tf] = 1;
        break;
        case 3 : template["Wed"][tf] = 1;
        break;
        case 4 : template["Thu"][tf] = 1;
        break;
        case 5 : template["Fri"][tf] = 1;
        break;
        case 6 : template["Sat"][tf] = 1;
        break;
      }
    }
  }
  console.log(template)
  $.ajax({
    type: "POST",
    url: "/api/blackouts",
    data: {
      date : thisweek,
      times : JSON.stringify(template)
    },
    success: function(d) {
      console.log("worked yo")
    },
    error: function(jqXHR, textStatus, errorThrown) {

    }
  });

}

$(document).ready(function(){
  var today = new Date();
  var week = today.getWeek();
  var year = today.getFullYear()
  document.getElementById("weekpicker").defaultValue = year + "-W" + week;
  setWeek(week, year);
})

var updateCounter = function(){

  var counter = 0;
  if(counter != 0){
    counter = 0;
  }
  for(var i = 0; i<ids.length; i++){
    var temp = $(ids[i])
    if(temp.hasClass("blacked")){
      counter = counter + 1;
    }

  }
  var temp = $("#count")
  temp.text(counter);
    // console.log(counter);
  };


  $(document).ready(function(){

  var isDown = false;   // Tracks status of mouse button

  $(document).mousedown(function() {
    isDown = true;      // When mouse goes down, set isDown to true
  })
  .mouseup(function() {
    isDown = false;    // When mouse goes up, set isDown to false
  });

  $(".selection").mouseover(function(){
    if(isDown) {        // Only change css if mouse is down
    	if($(this).css("background-color") === "rgb(0, 187, 0)"){
    		$(this).css({background:"#333333"});
        $(this).addClass('blacked');
        $(this).removeClass('not');
        update = true;

      }
      else{
        $(this).css({background:"#0B0"});
        $(this).removeClass('blacked');
        $(this).addClass('not')
        update = true;

      }
    }

    updateCounter();
  });
  $(".selection").click(function(){
    // console.log("clicked")
    if($(this).css("background-color") === "rgb(0, 187, 0)"){
      $(this).css({background:"#333333"});
      $(this).addClass('blacked');
      $(this).removeClass('not');
      update = true;
        // updateCounter();
      }
      else{
        $(this).css({background:"#0B0"});
        $(this).removeClass('blacked');
        $(this).addClass('not')
        update = true;

      }

      updateCounter();
    });

});
