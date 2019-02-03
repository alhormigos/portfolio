$(document).ready(function(){
    
    $( "#quality-organisation > h4" ).mouseenter(function() {
        $( "#quality-organisation > .material-icons-info" ).css("display", "inline-block");;
    });

    $( "#quality-organisation > h4" ).mouseleave(function() {
        $( "#quality-organisation > .material-icons-info" ).css("display", "none");;
    });

    $( "#quality-organisation > h4").click(function(e) {
        $("#quality-perseverance-description").fadeOut(1);
        $("#quality-patience-description").fadeOut(1);
        $("#quality-organisation-description").fadeIn(500);
        $("#quality-organisation > h4").addClass("link-clicked");
        $("#quality-patience > h4").removeClass("link-clicked");
        $("#quality-perseverance > h4").removeClass("link-clicked");
    });

    $( "#quality-persistence > h4" ).mouseenter(function() {
        $( "#quality-persistence > .material-icons-info" ).css("display", "inline-block");;
    });

    $( "#quality-persistence > h4" ).mouseleave(function() {
        $( "#quality-persistence > .material-icons-info" ).css("display", "none");;
    });

    $( "#quality-persistence > h4").click(function(e) {
        $("#quality-organisation-description").fadeOut(1);
        $("#quality-patience-description").fadeOut(1);
        $("#quality-perseverance-description").fadeIn(500);
        $("#quality-persistence > h4").addClass("link-clicked");
        $("#quality-patience > h4").removeClass("link-clicked");
        $("#quality-organisation > h4").removeClass("link-clicked");
    });

    $( "#quality-patience > h4" ).mouseenter(function() {
        $( "#quality-patience > .material-icons-info" ).css("display", "inline-block");;
    });

    $( "#quality-patience > h4" ).mouseleave(function() {
        $( "#quality-patience > .material-icons-info" ).css("display", "none");;
    });

    $( "#quality-patience > h4").click(function(e) {
        $("#quality-organisation-description").fadeOut(1);
        $("#quality-perseverance-description").fadeOut(1);
        $("#quality-patience-description").fadeIn(500);
        $("#quality-patience > h4").addClass("link-clicked");
        $("#quality-organisation > h4").removeClass("link-clicked");
        $("#quality-persistence > h4").removeClass("link-clicked");
    });

    $( ".picture-detailled-description-close").click(function(e) {
        $("#quality-organisation-description").fadeOut(500);
        $("#quality-organisation > h4").removeClass("link-clicked");
        $("#quality-perseverance-description").fadeOut(500);
        $("#quality-persistence > h4").removeClass("link-clicked");
        $("#quality-patience-description").fadeOut(500);
        $("#quality-patience > h4").removeClass("link-clicked");
    });

    $( "#2").click(function(e) {
        $("#projects-detailled-description").fadeIn(500);
    });

    $( "#picture-detailled-description-close").click(function(e) {
        $("#projects-detailled-description").fadeOut(500);
    });


    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;
    
    sync1.owlCarousel({
        items : 1,
        slideSpeed : 2000,
        nav: true,
        autoplay: false,
        dots: true,
        loop: true,
        responsiveRefreshRate : 200,
        startPosition : 1,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:white;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:white;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>']
    }).on('changed.owl.carousel', syncPosition);
    
    sync2
        .on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
        // items : slidesPerPage,
        items : 9,
        dots: true,
        nav: true,
        smartSpeed: 200,
        slideSpeed : 500,
        slideBy: slidesPerPage,
    //   slideBy: 1, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
        responsiveRefreshRate : 100
    }).on('changed.owl.carousel', syncPosition2);
    
    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        // var current = el.item.index;
        
        //if you disable loop you have to comment this block
        var count = el.item.count-1;
        var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
        if(current < 0) {
            current = count;
        }
        if(current > count) {
            current = 0;
        }
        
        //end block
    
        sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();
        
        if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }
    
    function syncPosition2(el) {
        if(syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
        }
    }
    
    sync2.on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});
