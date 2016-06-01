var device_type = null;
var device_brand = null;
var consult_type = null;
var name = null;
var description = null;
var date = null;


function displayById(id) {
	if (id === "desktop" || id === "laptop"){
			if($(".mobile-type").css("display") !== "none"){
			$(".mobile-type").css("display", "none");
			if($(".repair-type").css("display") !== "none") {
				$(".repair-type").css("display", "none");
			}
		}
		$(".laptop-desktop").css("display", "table-row");
	}
	if(id === "mobile"){
		if($(".laptop-desktop").css("display") !== "none"){
			$(".laptop-desktop").css("display", "none");
			if($(".repair-type").css("display") !== "none") {
				$(".repair-type").css("display", "none");
			}
		}
		$(".mobile-type").css("display", "table-row");
	}
}


$(document).ready(function(){
	console.log("loaded")
});


$(document).ready(function(){
	$(".devicetype").click(function(event){
		var id = $(this).attr("id");
		console.log(id + "fucker");
		device_type = id;
		displayById(id);
	});
});

$(document).ready(function(){
	$(".brand").click(function(event){
		device_brand = $(this).attr("id");
		$(".repair-type").css("display", "table-row");

	});
});

$(document).ready(function(){
	$(".consult-type").click(function(event){
		consult_type = $(this).attr("id");
		$(".input-section").css("display", "block");
	});
});

$(document).ready(function() {
	$(".submit").click(function(event){
		name = $("#firstName").val() + $("#lastName").val();
		description = $("#description").val();
		date = $("#date").val();
		console.log(device_type + device_brand + consult_type + name + description + date);


		 $.ajax({
        type: "POST",
        url: "/api/appointments",
        data: {
            device_type: device_type,
            consult_type: consult_type,
            device_brand: device_brand,
            name: name,
            description: description,
            date: date
        },
        success: function(d) {
            console.log("fuck ya")
        },
        error: function(jqXHR, textStatus, errorThrown) {

        }
    });
	})
})


