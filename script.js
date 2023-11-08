//Navbar active state stylings
$(document).ready(function(){

    $('.nav').click(function(){

        $('a').removeClass('active');
        $('.contact-btn').removeClass('active');
        
        $(this).addClass('active');


    });
});


//Resume functinality
function showDesc(id){

    var descId = "desc"+id[5];

    for(var i = 1; i <= 7; i++){

        if(i == parseInt(id[5])){
            document.getElementById(descId).classList = descId+" "+"d-inline";
            document.getElementById(id).classList = id+" "+"fw-bold active-timeline";
        
        }
        else{
            document.getElementById("desc"+i.toString()).classList = "desc"+i.toString()+" "+"d-none";
            /*document.getElementById(id).classList = id+" "+"fw-bold";*/
            
        }
        
        
    }
}

//Testing

$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "3%"); 
	$(".section-content-1").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "16.6%");
	$(".section-content-2").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "33.2%");
	$(".section-content-3").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "49.8%");
	$(".section-content-4").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "66.46%");
	$(".section-content-5").addClass("active").siblings().removeClass("active");
});

$(".step06").click( function() {
	$("#line-progress").css("width", "83%");
	$(".section-content-6").addClass("active").siblings().removeClass("active");
});

$(".step07").click( function() {
	$("#line-progress").css("width", "100%");
	$(".section-content-7").addClass("active").siblings().removeClass("active");
});

 
