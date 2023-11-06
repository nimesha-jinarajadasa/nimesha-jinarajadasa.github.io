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
