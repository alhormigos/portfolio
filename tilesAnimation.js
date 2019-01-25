
$(document).ready(function(){

    for (let i = 0; i <= 5; i++) {
        $( "#" + i ).mouseenter(function(e) {
            $("#picture-title-" + i).fadeIn(500);
            $("#" + i).css("filter", "grayscale(100%)");
        });

        $( "#" + i ).mouseleave(function(e) {
            $("#picture-title-" + i).fadeOut(500);
            $("#" + i).css("filter", "grayscale(0%)");
        });
    }

});
