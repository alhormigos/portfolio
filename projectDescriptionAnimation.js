$(document).ready(function(){
    
    $( "#quality-organisation").click(function(e) {
        $("#quality-perseverance-description").fadeOut(1);
        $("#quality-patience-description").fadeOut(1);
        $("#quality-pedagogie-description").fadeOut(1);
        $("#quality-organisation-description").fadeIn(500);
        
        $("#quality-persistence").css("transition-duration", `0.5s`);
        $("#quality-persistence").css("transform", `translateX(600px)`);
        $("#quality-patience").css("transition-duration", `0.5s`);
        $("#quality-patience").css("transform", `translateX(600px)`);
        $("#quality-organisation").css("transition-duration", `0.5s`);
        $("#quality-organisation").css("transform", `translateX(600px)`);
        $("#quality-pedagogie").css("transition-duration", `0.5s`);
        $("#quality-pedagogie").css("transform", `translateX(600px)`);

        $("#quality-organisation-description").css("transition-duration", `0.5s`);
        $("#quality-organisation-description").css("transform", `translateX(0px)`);
        $("#quality-organisation-description").css("opacity", `1`);

        $("#quality-organisation-description > ul > li > .menu-quality-organisation").addClass("link-clicked");

        $("#quality-persistence").fadeOut(1);
        $("#quality-patience").fadeOut(1);
        $("#quality-pedagogie").fadeOut(1);
        $("#quality-organisation").fadeOut(1);
    });

    $( "#quality-persistence").click(function(e) {
        $("#quality-organisation-description").fadeOut(1);
        $("#quality-patience-description").fadeOut(1);
        $("#quality-pedagogie-description").fadeOut(1);
        $("#quality-perseverance-description").fadeIn(500);

        $("#quality-persistence").css("transition-duration", `0.5s`);
        $("#quality-persistence").css("transform", `translateX(600px)`);
        $("#quality-patience").css("transition-duration", `0.5s`);
        $("#quality-patience").css("transform", `translateX(600px)`);
        $("#quality-organisation").css("transition-duration", `0.5s`);
        $("#quality-organisation").css("transform", `translateX(600px)`);
        $("#quality-pedagogie").css("transition-duration", `0.5s`);
        $("#quality-pedagogie").css("transform", `translateX(600px)`);

        $("#quality-perseverance-description").css("transition-duration", `0.5s`);
        $("#quality-perseverance-description").css("transform", `translateX(0px)`);
        $("#quality-perseverance-description").css("opacity", `1`);

        $("#quality-perseverance-description > ul > li > .menu-quality-persistence").addClass("link-clicked");

        $("#quality-persistence").fadeOut(1);
        $("#quality-patience").fadeOut(1);
        $("#quality-pedagogie").fadeOut(1);
        $("#quality-organisation").fadeOut(1);
    });

    $( "#quality-patience").click(function(e) {
        $("#quality-organisation-description").fadeOut(1);
        $("#quality-perseverance-description").fadeOut(1);
        $("#quality-pedagogie-description").fadeOut(1);
        $("#quality-patience-description").fadeIn(500);
        
        $("#quality-persistence").css("transition-duration", `0.5s`);
        $("#quality-persistence").css("transform", `translateX(600px)`);
        $("#quality-patience").css("transition-duration", `0.5s`);
        $("#quality-patience").css("transform", `translateX(600px)`);
        $("#quality-organisation").css("transition-duration", `0.5s`);
        $("#quality-organisation").css("transform", `translateX(600px)`);
        $("#quality-pedagogie").css("transition-duration", `0.5s`);
        $("#quality-pedagogie").css("transform", `translateX(600px)`);

        $("#quality-patience-description").css("transition-duration", `0.5s`);
        $("#quality-patience-description").css("transform", `translateX(0px)`);
        $("#quality-patience-description").css("opacity", `1`);

        $("#quality-patience-description > ul > li > .menu-quality-patience").addClass("link-clicked");

        $("#quality-persistence").fadeOut(1);
        $("#quality-patience").fadeOut(1);
        $("#quality-pedagogie").fadeOut(1);
        $("#quality-organisation").fadeOut(1);
    });

    $( "#quality-pedagogie").click(function(e) {
        $("#quality-organisation-description").fadeOut(1);
        $("#quality-perseverance-description").fadeOut(1);
        $("#quality-patience-description").fadeOut(1);
        $("#quality-pedagogie-description").fadeIn(500);
        
        $("#quality-persistence").css("transition-duration", `0.5s`);
        $("#quality-persistence").css("transform", `translateX(600px)`);
        $("#quality-patience").css("transition-duration", `0.5s`);
        $("#quality-patience").css("transform", `translateX(600px)`);
        $("#quality-organisation").css("transition-duration", `0.5s`);
        $("#quality-organisation").css("transform", `translateX(600px)`);
        $("#quality-pedagogie").css("transition-duration", `0.5s`);
        $("#quality-pedagogie").css("transform", `translateX(600px)`);

        $("#quality-pedagogie-description").css("transition-duration", `0.5s`);
        $("#quality-pedagogie-description").css("transform", `translateX(0px)`);
        $("#quality-pedagogie-description").css("opacity", `1`);

        $("#quality-pedagogie-description > ul > li > .menu-quality-pedagogie").addClass("link-clicked");

        $("#quality-persistence").fadeOut(1);
        $("#quality-patience").fadeOut(1);
        $("#quality-pedagogie").fadeOut(1);
        $("#quality-organisation").fadeOut(1);
    });

    //To Navigate between description 
    $(".menu-quality-organisation").click(function(e) {
        
        $("#quality-patience-description").fadeOut(1);
        $("#quality-perseverance-description").fadeOut(1);
        $("#quality-pedagogie-description").fadeOut(1);
        $("#quality-organisation-description").addClass('magictime slideDownReturn');
        $("#quality-organisation-description").css("display", `inline-block`);
        
        $("#quality-organisation-description > ul > li > .menu-quality-organisation").addClass("link-clicked");

    });

    $(".menu-quality-persistence").click(function(e) {
        
        $("#quality-organisation-description").fadeOut(1);
        $("#quality-patience-description").fadeOut(1);
        $("#quality-pedagogie-description").fadeOut(1);
        $("#quality-perseverance-description").addClass('magictime slideDownReturn');
        $("#quality-perseverance-description").css("display", `inline-block`);
        
        $("#quality-perseverance-description > ul > li > .menu-quality-persistence").addClass("link-clicked");

    });

    $(".menu-quality-patience").click(function(e) {
        
        $("#quality-organisation-description").fadeOut(1);
        $("#quality-perseverance-description").fadeOut(1);
        $("#quality-pedagogie-description").fadeOut(1);
        $("#quality-patience-description").addClass('magictime slideDownReturn');
        $("#quality-patience-description").css("display", `inline-block`);
        
        $("#quality-patience-description > ul > li > .menu-quality-patience").addClass("link-clicked");

    });

    $(".menu-quality-pedagogie").click(function(e) {
        
        $("#quality-organisation-description").fadeOut(1);
        $("#quality-perseverance-description").fadeOut(1);
        $("#quality-patience-description").fadeOut(1);
        $("#quality-pedagogie-description").addClass('magictime slideDownReturn');
        $("#quality-pedagogie-description").css("display", `inline-block`);
        
        $("#quality-pedagogie-description > ul > li > .menu-quality-pedagogie").addClass("link-clicked");

    });

    $( ".picture-detailled-description-close").click(function(e) {
        $("#quality-organisation-description").css("transition-duration", `0.4s`);
        $("#quality-organisation-description").css("transform", `translateX(600px)`);
        $("#quality-organisation-description").fadeOut(1);
        
        $("#quality-perseverance-description").css("transition-duration", `0.4s`);
        $("#quality-perseverance-description").css("transform", `translateX(600px)`);
        $("#quality-perseverance-description").fadeOut(1);
        
        $("#quality-patience-description").css("transition-duration", `0.4s`);
        $("#quality-patience-description").css("transform", `translateX(600px)`);
        $("#quality-patience-description").fadeOut(1);
        
        $("#quality-pedagogie-description").css("transition-duration", `0.4s`);
        $("#quality-pedagogie-description").css("transform", `translateX(600px)`);
        $("#quality-pedagogie-description").fadeOut(1);
        
        $("#quality-persistence").fadeIn(500);
        $("#quality-patience").fadeIn(500);
        $("#quality-organisation").fadeIn(500);
        $("#quality-pedagogie").fadeIn(500);

        $("#quality-persistence").css("transition-duration", `0.5s`);
        $("#quality-persistence").css("transform", `translateX(0px)`);
        $("#quality-patience").css("transition-duration", `0.5s`);
        $("#quality-patience").css("transform", `translateX(0px)`);
        $("#quality-organisation").css("transition-duration", `0.5s`);
        $("#quality-organisation").css("transform", `translateX(0px)`);
        $("#quality-pedagogie").css("transition-duration", `0.5s`);
        $("#quality-pedagogie").css("transform", `translateX(0px)`);
    });

    //To Navigate between project description

    $( "#1").click(function(e) {
        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-graphic-maj").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description").fadeIn(500);
        $("#projects-detailled-description-confidentiality").fadeIn(500);
        $("#projects-detailled-description-confidentiality").removeClass('animated bounceOutRight');
        //To freeze scroll bar
        $("body").css("overflow", "hidden");
    });

    $( "#2").click(function(e) {
        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-graphic-maj").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description").fadeIn(500);
        $("#projects-detailled-description-mini-framework").fadeIn(500);
        $("#projects-detailled-description-mini-framework").removeClass('animated bounceOutRight');
        //To freeze scroll bar
        $("body").css("overflow", "hidden");
    });

    $( "#3").click(function(e) {
        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-graphic-maj").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description").fadeIn(500);
        $("#projects-detailled-description-dynamic-searchBar").fadeIn(500);
        $("#projects-detailled-description-dynamic-searchBar").removeClass('animated bounceOutRight');
        //To freeze scroll bar
        $("body").css("overflow", "hidden");
    });

    $( "#4").click(function(e) {
        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description").fadeIn(500);
        $("#projects-detailled-description-graphic-maj").fadeIn(500);
        $("#projects-detailled-description-graphic-maj").removeClass('animated bounceOutRight');
        //To freeze scroll bar
        $("body").css("overflow", "hidden");
    });

    $( "#5").click(function(e) {
        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-graphic-maj").fadeOut(1);
        $("#projects-detailled-description").fadeIn(500);
        $("#projects-detailled-description-fructos-game").fadeIn(500);
        $("#projects-detailled-description-fructos-game").removeClass('animated bounceOutRight');
        //To freeze scroll bar
        $("body").css("overflow", "hidden");
    });

    $( "#picture-detailled-description-close").click(function(e) {
        $("#projects-detailled-description").fadeOut(500);
        //To restore scroll bar
        $("body").css("overflow", "auto");
    });

    // To navigate in skills description

    $( "#skills-detailled-description-close").click(function(e) {
        $("#skills-detailled-description").fadeOut(500);
        //To restore scroll bar
        $("body").css("overflow", "auto");
    });

    $( "#skill_1").click(function(e) {

        $("#skills-detailled-description-design-web").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-design-web").addClass('animated bounceInLeft');
        
        $("#skills-detailled-description-development").fadeOut(1);
        $("#skills-detailled-description-bdd").fadeOut(1);
        $("#skills-detailled-description-formation").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description-project").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);
        $("#skills-detailled-description-design-web").fadeIn(500);
        //To freeze scroll bar
        $("body").css("overflow", "hidden");
    });

    $( "#skill_2").click(function(e) {
        
        $("#skills-detailled-description-development").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-development").addClass('animated bounceInLeft');
        
        $("#skills-detailled-description-design-web").fadeOut(1);
        $("#skills-detailled-description-bdd").fadeOut(1);
        $("#skills-detailled-description-formation").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description-project").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);
        $("#skills-detailled-description-development").fadeIn(500);
        //To freeze scroll bar
        $("body").css("overflow", "hidden");
    });

    $( "#skill_3").click(function(e) {
        
        $("#skills-detailled-description-bdd").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-bdd").addClass('animated bounceInLeft');
        
        $("#skills-detailled-description-design-web").fadeOut(1);
        $("#skills-detailled-description-development").fadeOut(1);
        $("#skills-detailled-description-formation").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description-project").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);
        $("#skills-detailled-description-bdd").fadeIn(500);
        //To freeze scroll bar
        $("body").css("overflow", "hidden");
    });
    
    $( "#skill_4").click(function(e) {
        
        $("#skills-detailled-description-formation").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-formation").addClass('animated bounceInLeft');
        
        $("#skills-detailled-description-design-web").fadeOut(1);
        $("#skills-detailled-description-development").fadeOut(1);
        $("#skills-detailled-description-bdd").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description-project").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);
        $("#skills-detailled-description-formation").fadeIn(500);
        //To freeze scroll bar
        $("body").css("overflow", "hidden");
    });
    
    $( "#skill_5").click(function(e) {
        
        $("#skills-detailled-description-other").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-other").addClass('animated bounceInLeft');
        
        $("#skills-detailled-description-design-web").fadeOut(1);
        $("#skills-detailled-description-development").fadeOut(1);
        $("#skills-detailled-description-bdd").fadeOut(1);
        $("#skills-detailled-description-formation").fadeOut(1);
        $("#skills-detailled-description-project").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);
        $("#skills-detailled-description-other").fadeIn(500);
        //To freeze scroll bar
        $("body").css("overflow", "hidden");
    });
    
    $( "#skill_6").click(function(e) {
        
        $("#skills-detailled-description-project").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-project").addClass('animated bounceInLeft');
        
        $("#skills-detailled-description-design-web").fadeOut(1);
        $("#skills-detailled-description-development").fadeOut(1);
        $("#skills-detailled-description-bdd").fadeOut(1);
        $("#skills-detailled-description-formation").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);
        $("#skills-detailled-description-project").fadeIn(500);
        //To freeze scroll bar
        $("body").css("overflow", "hidden");
    });

    // To navigate between skills and realisation (circulate navigation)

    $( "#skill-design-web-to-graphic-maj").click(function(e) {
        $("#skills-detailled-description-design-web").addClass('animated bounceOutRight');

        $("#skills-detailled-description").fadeOut(1);
        $("#projects-detailled-description").fadeIn(1);

        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);

        $("#projects-detailled-description-graphic-maj").fadeIn(1);
        $("#projects-detailled-description-graphic-maj").removeClass('animated bounceOutRight');
        $("#projects-detailled-description-graphic-maj").addClass('animated bounceInLeft');
    });

    $( "#skill-development-to-mini-framework").click(function(e) {
        $("#skills-detailled-description-development").addClass('animated bounceOutRight');

        $("#skills-detailled-description").fadeOut(1);
        $("#projects-detailled-description").fadeIn(1);

        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-graphic-maj").fadeOut(1);
        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);

        $("#projects-detailled-description-mini-framework").fadeIn(1);
        $("#projects-detailled-description-mini-framework").removeClass('animated bounceOutRight');
        $("#projects-detailled-description-mini-framework").addClass('animated bounceInLeft');
    });

    $( "#skill-bdd-to-confidentiality").click(function(e) {
        $("#skills-detailled-description-bdd").addClass('animated bounceOutRight');

        $("#skills-detailled-description").fadeOut(1);
        $("#projects-detailled-description").fadeIn(1);

        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-graphic-maj").fadeOut(1);
        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);

        $("#projects-detailled-description-confidentiality").fadeIn(1);
        $("#projects-detailled-description-confidentiality").removeClass('animated bounceOutRight');
        $("#projects-detailled-description-confidentiality").addClass('animated bounceInLeft');
    });

    $( "#skill-bdd-to-searchBar").click(function(e) {
        $("#skills-detailled-description-bdd").addClass('animated bounceOutRight');

        $("#skills-detailled-description").fadeOut(1);
        $("#projects-detailled-description").fadeIn(1);

        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-graphic-maj").fadeOut(1);
        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        
        $("#projects-detailled-description-dynamic-searchBar").fadeIn(1);
        $("#projects-detailled-description-dynamic-searchBar").removeClass('animated bounceOutRight');
        $("#projects-detailled-description-dynamic-searchBar").addClass('animated bounceInLeft');
    });

    $( "#skill-formation-to-fructos-game").click(function(e) {
        $("#skills-detailled-description-formation").addClass('animated bounceOutRight');

        $("#skills-detailled-description").fadeOut(1);
        $("#projects-detailled-description").fadeIn(1);

        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-graphic-maj").fadeOut(1);
        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        
        $("#projects-detailled-description-fructos-game").fadeIn(1);
        $("#projects-detailled-description-fructos-game").removeClass('animated bounceOutRight');
        $("#projects-detailled-description-fructos-game").addClass('animated bounceInLeft');
    });

    $( "#skill-other-to-fructos-game").click(function(e) {
        $("#skills-detailled-description-other").addClass('animated bounceOutRight');

        $("#skills-detailled-description").fadeOut(1);
        $("#projects-detailled-description").fadeIn(1);

        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-graphic-maj").fadeOut(1);
        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        
        $("#projects-detailled-description-fructos-game").fadeIn(1);
        $("#projects-detailled-description-fructos-game").removeClass('animated bounceOutRight');
        $("#projects-detailled-description-fructos-game").addClass('animated bounceInLeft');
    });

    $( "#skill-project-to-maj-graphic").click(function(e) {
        $("#skills-detailled-description-project").addClass('animated bounceOutRight');

        $("#skills-detailled-description").fadeOut(1);
        $("#projects-detailled-description").fadeIn(1);

        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        
        $("#projects-detailled-description-graphic-maj").fadeIn(1);
        $("#projects-detailled-description-graphic-maj").removeClass('animated bounceOutRight');
        $("#projects-detailled-description-graphic-maj").addClass('animated bounceInLeft');
    });

    $( "#skill-project-to-mini-framework").click(function(e) {
        $("#skills-detailled-description-project").addClass('animated bounceOutRight');

        $("#skills-detailled-description").fadeOut(1);
        $("#projects-detailled-description").fadeIn(1);

        $("#projects-detailled-description-graphic-maj").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        
        $("#projects-detailled-description-mini-framework").fadeIn(1);
        $("#projects-detailled-description-mini-framework").removeClass('animated bounceOutRight');
        $("#projects-detailled-description-mini-framework").addClass('animated bounceInLeft');
    });

    // To navigate between realisation and skills (circulate navigation)

    $( "#graphic-maj-to-design-web").click(function(e) {
        $("#projects-detailled-description-graphic-maj").addClass('animated bounceOutRight');

        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeIn(1);

        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        
        $("#skills-detailled-description-development").fadeOut(1);
        $("#skills-detailled-description-bdd").fadeOut(1);
        $("#skills-detailled-description-formation").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description-project").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);

        $("#skills-detailled-description-design-web").fadeIn(1);
        $("#skills-detailled-description-design-web").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-design-web").addClass('animated bounceInLeft');
    });

    $( "#graphic-maj-to-gestion-project").click(function(e) {
        $("#projects-detailled-description-graphic-maj").addClass('animated bounceOutRight');

        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeIn(1);

        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        
        $("#skills-detailled-description-development").fadeOut(1);
        $("#skills-detailled-description-bdd").fadeOut(1);
        $("#skills-detailled-description-formation").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description-design-web").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);

        $("#skills-detailled-description-project").fadeIn(1);
        $("#skills-detailled-description-project").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-project").addClass('animated bounceInLeft');
    });

    $( "#research-bar-to-development").click(function(e) {
        $("#projects-detailled-description-dynamic-searchBar").addClass('animated bounceOutRight');

        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeIn(1);

        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-dynamic-graphic-maj").fadeOut(1);
        
        $("#skills-detailled-description-project").fadeOut(1);
        $("#skills-detailled-description-bdd").fadeOut(1);
        $("#skills-detailled-description-formation").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description-design-web").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);

        $("#skills-detailled-description-development").fadeIn(1);
        $("#skills-detailled-description-development").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-development").addClass('animated bounceInLeft');
    });

    $( "#research-bar-to-bdd").click(function(e) {
        $("#projects-detailled-description-dynamic-searchBar").addClass('animated bounceOutRight');

        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeIn(1);

        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-dynamic-graphic-maj").fadeOut(1);
        
        $("#skills-detailled-description-project").fadeOut(1);
        $("#skills-detailled-description-development").fadeOut(1);
        $("#skills-detailled-description-formation").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description-design-web").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);

        $("#skills-detailled-description-bdd").fadeIn(1);
        $("#skills-detailled-description-bdd").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-bdd").addClass('animated bounceInLeft');
    });

    $( "#mini-framework-to-project").click(function(e) {
        $("#projects-detailled-description-mini-framework").addClass('animated bounceOutRight');

        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeIn(1);

        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-dynamic-graphic-maj").fadeOut(1);
        
        $("#skills-detailled-description-bdd").fadeOut(1);
        $("#skills-detailled-description-development").fadeOut(1);
        $("#skills-detailled-description-formation").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description-design-web").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);

        $("#skills-detailled-description-project").fadeIn(1);
        $("#skills-detailled-description-project").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-project").addClass('animated bounceInLeft');
    });

    $( "#mini-framework-to-bdd").click(function(e) {
        $("#projects-detailled-description-mini-framework").addClass('animated bounceOutRight');

        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeIn(1);

        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-dynamic-graphic-maj").fadeOut(1);
        
        $("#skills-detailled-description-project").fadeOut(1);
        $("#skills-detailled-description-development").fadeOut(1);
        $("#skills-detailled-description-formation").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description-design-web").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);

        $("#skills-detailled-description-bdd").fadeIn(1);
        $("#skills-detailled-description-bdd").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-bdd").addClass('animated bounceInLeft');
    });

    $( "#mini-framework-to-development").click(function(e) {
        $("#projects-detailled-description-mini-framework").addClass('animated bounceOutRight');

        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeIn(1);

        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-dynamic-graphic-maj").fadeOut(1);
        
        $("#skills-detailled-description-project").fadeOut(1);
        $("#skills-detailled-description-bdd").fadeOut(1);
        $("#skills-detailled-description-formation").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description-design-web").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);

        $("#skills-detailled-description-development").fadeIn(1);
        $("#skills-detailled-description-development").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-development").addClass('animated bounceInLeft');
    });

    $( "#confidentiality-to-development").click(function(e) {
        $("#projects-detailled-description-confidentiality").addClass('animated bounceOutRight');

        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeIn(1);

        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-dynamic-graphic-maj").fadeOut(1);
        
        $("#skills-detailled-description-project").fadeOut(1);
        $("#skills-detailled-description-bdd").fadeOut(1);
        $("#skills-detailled-description-formation").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description-design-web").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);

        $("#skills-detailled-description-development").fadeIn(1);
        $("#skills-detailled-description-development").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-development").addClass('animated bounceInLeft');
    });

    $( "#confidentiality-to-project").click(function(e) {
        $("#projects-detailled-description-confidentiality").addClass('animated bounceOutRight');

        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeIn(1);

        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-dynamic-graphic-maj").fadeOut(1);
        
        $("#skills-detailled-description-development").fadeOut(1);
        $("#skills-detailled-description-bdd").fadeOut(1);
        $("#skills-detailled-description-formation").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description-design-web").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);

        $("#skills-detailled-description-project").fadeIn(1);
        $("#skills-detailled-description-project").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-project").addClass('animated bounceInLeft');
    });

    $( "#confidentiality-to-bdd").click(function(e) {
        $("#projects-detailled-description-confidentiality").addClass('animated bounceOutRight');

        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeIn(1);

        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-dynamic-graphic-maj").fadeOut(1);
        
        $("#skills-detailled-description-development").fadeOut(1);
        $("#skills-detailled-description-project").fadeOut(1);
        $("#skills-detailled-description-formation").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description-design-web").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);

        $("#skills-detailled-description-bdd").fadeIn(1);
        $("#skills-detailled-description-bdd").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-bdd").addClass('animated bounceInLeft');
    });

    $( "#fructos-game-to-development").click(function(e) {
        $("#projects-detailled-description-fructos-game").addClass('animated bounceOutRight');

        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeIn(1);

        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-dynamic-graphic-maj").fadeOut(1);
        
        $("#skills-detailled-description-bdd").fadeOut(1);
        $("#skills-detailled-description-project").fadeOut(1);
        $("#skills-detailled-description-formation").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description-design-web").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);

        $("#skills-detailled-description-development").fadeIn(1);
        $("#skills-detailled-description-development").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-development").addClass('animated bounceInLeft');
    });

    $( "#fructos-game-to-formation").click(function(e) {
        $("#projects-detailled-description-fructos-game").addClass('animated bounceOutRight');

        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeIn(1);

        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-dynamic-graphic-maj").fadeOut(1);
        
        $("#skills-detailled-description-bdd").fadeOut(1);
        $("#skills-detailled-description-project").fadeOut(1);
        $("#skills-detailled-description-development").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description-design-web").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);

        $("#skills-detailled-description-formation").fadeIn(1);
        $("#skills-detailled-description-formation").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-formation").addClass('animated bounceInLeft');
    });

    // To Navigate between soft skill and project

    $( "#soft-skill-perseverance-to-miniFrameWork").click(function(e) {
        $("#projects-detailled-description-mini-framework").addClass('animated bounceOutRight');

        $("#skills-detailled-description").fadeOut(1);
        $("#projects-detailled-description").fadeIn(1);

        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-graphic-maj").fadeOut(1);
        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);

        $("#projects-detailled-description-mini-framework").fadeIn(1);
        $("#projects-detailled-description-mini-framework").removeClass('animated bounceOutRight');
        $("#projects-detailled-description-mini-framework").addClass('animated bounceInLeft');

        //To freeze scroll bar
        $("body").css("overflow", "hidden");
    });

    $( "#soft-skill-perseverance-to-development").click(function(e) {
        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeIn(1);

        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-dynamic-graphic-maj").fadeOut(1);
        
        $("#skills-detailled-description-bdd").fadeOut(1);
        $("#skills-detailled-description-project").fadeOut(1);
        $("#skills-detailled-description-formation").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description-design-web").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);

        $("#skills-detailled-description-development").fadeIn(1);
        $("#skills-detailled-description-development").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-development").addClass('animated bounceInLeft');

        //To freeze scroll bar
        $("body").css("overflow", "hidden");
    });

    $( "#soft-skill-patience-to-dynamic-search-bar").click(function(e) {
        $("#projects-detailled-description-dynamic-searchBar").addClass('animated bounceOutRight');

        $("#skills-detailled-description").fadeOut(1);
        $("#projects-detailled-description").fadeIn(1);

        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-graphic-maj").fadeOut(1);
        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);

        $("#projects-detailled-description-dynamic-searchBar").fadeIn(1);
        $("#projects-detailled-description-dynamic-searchBar").removeClass('animated bounceOutRight');
        $("#projects-detailled-description-dynamic-searchBar").addClass('animated bounceInLeft');

        //To freeze scroll bar
        $("body").css("overflow", "hidden");
    });

    $( "#soft-skill-patience-to-formation").click(function(e) {
        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeIn(1);

        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-dynamic-graphic-maj").fadeOut(1);
        
        $("#skills-detailled-description-bdd").fadeOut(1);
        $("#skills-detailled-description-formation").fadeOut(1);
        $("#skills-detailled-description-development").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description-design-web").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);

        $("#skills-detailled-description-project").fadeIn(1);
        $("#skills-detailled-description-project").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-project").addClass('animated bounceInLeft');

        //To freeze scroll bar
        $("body").css("overflow", "hidden");
    });

    $( "#soft-skill-organisation-to-graphic-maj").click(function(e) {
        $("#projects-detailled-description-graphic-maj").addClass('animated bounceOutRight');

        $("#skills-detailled-description").fadeOut(1);
        $("#projects-detailled-description").fadeIn(1);

        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);

        $("#projects-detailled-description-graphic-maj").fadeIn(1);
        $("#projects-detailled-description-graphic-maj").removeClass('animated bounceOutRight');
        $("#projects-detailled-description-graphic-maj").addClass('animated bounceInLeft');

        //To freeze scroll bar
        $("body").css("overflow", "hidden");
    });

    $( "#soft-skill-organisation-to-bdd").click(function(e) {
        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeIn(1);

        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-dynamic-graphic-maj").fadeOut(1);
        
        $("#skills-detailled-description-formation").fadeOut(1);
        $("#skills-detailled-description-project").fadeOut(1);
        $("#skills-detailled-description-development").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description-design-web").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);

        $("#skills-detailled-description-bdd").fadeIn(1);
        $("#skills-detailled-description-bdd").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-bdd").addClass('animated bounceInLeft');

        //To freeze scroll bar
        $("body").css("overflow", "hidden");
    });

    $( "#soft-skill-pedagogie-to-fructos-game").click(function(e) {
        $("#projects-detailled-description-fructos-game").addClass('animated bounceOutRight');

        $("#skills-detailled-description").fadeOut(1);
        $("#projects-detailled-description").fadeIn(1);

        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-graphic-maj").fadeOut(1);

        $("#projects-detailled-description-fructos-game").fadeIn(1);
        $("#projects-detailled-description-fructos-game").removeClass('animated bounceOutRight');
        $("#projects-detailled-description-fructos-game").addClass('animated bounceInLeft');

        //To freeze scroll bar
        $("body").css("overflow", "hidden");
    });

    $( "#soft-skill-pedagogie-to-formation").click(function(e) {
        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeIn(1);

        $("#projects-detailled-description-confidentiality").fadeOut(1);
        $("#projects-detailled-description-dynamic-searchBar").fadeOut(1);
        $("#projects-detailled-description-fructos-game").fadeOut(1);
        $("#projects-detailled-description-mini-framework").fadeOut(1);
        $("#projects-detailled-description-dynamic-graphic-maj").fadeOut(1);
        
        $("#skills-detailled-description-bdd").fadeOut(1);
        $("#skills-detailled-description-project").fadeOut(1);
        $("#skills-detailled-description-development").fadeOut(1);
        $("#skills-detailled-description-other").fadeOut(1);
        $("#skills-detailled-description-design-web").fadeOut(1);
        $("#skills-detailled-description").fadeIn(500);

        $("#skills-detailled-description-formation").fadeIn(1);
        $("#skills-detailled-description-formation").removeClass('animated bounceOutRight');
        $("#skills-detailled-description-formation").addClass('animated bounceInLeft');

        //To freeze scroll bar
        $("body").css("overflow", "hidden");
    });

    // To Navigate between soft skills and technical skills

    $( "#skill-design-web-to-patience").click(function(e) {
        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeOut(1);

        $("#quality-organisation-description").fadeOut(1);
        $("#quality-perseverance-description").fadeOut(1);
        $("#quality-pedagogie-description").fadeOut(1);
        $("#quality-patience-description").fadeIn(500);
        
        $("#quality-persistence").css("transition-duration", `0.5s`);
        $("#quality-persistence").css("transform", `translateX(600px)`);
        $("#quality-patience").css("transition-duration", `0.5s`);
        $("#quality-patience").css("transform", `translateX(600px)`);
        $("#quality-organisation").css("transition-duration", `0.5s`);
        $("#quality-organisation").css("transform", `translateX(600px)`);
        $("#quality-pedagogie").css("transition-duration", `0.5s`);
        $("#quality-pedagogie").css("transform", `translateX(600px)`);

        $("#quality-patience-description").css("transition-duration", `0.5s`);
        $("#quality-patience-description").css("transform", `translateX(0px)`);
        $("#quality-patience-description").css("opacity", `1`);

        $("#quality-patience-description > ul > li > .menu-quality-patience").addClass("link-clicked");

        $("#quality-persistence").fadeOut(1);
        $("#quality-patience").fadeOut(1);
        $("#quality-pedagogie").fadeOut(1);
        $("#quality-organisation").fadeOut(1);
        
        //To Scroll on quality position
        $('html, body').stop().animate({
            scrollTop: $('#container-quality').offset().top
        }, 600, function() {
                location.hash = '#container-quality'; //attach the hash (#jumptarget) to the pageurl
        });
        
        //To unFreeze scroll bar
        $("body").css("overflow", "auto");
    });

    $( "#skill-development-to-perseverance").click(function(e) {
        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeOut(1);

        $("#quality-organisation-description").fadeOut(1);
        $("#quality-patience-description").fadeOut(1);
        $("#quality-pedagogie-description").fadeOut(1);
        $("#quality-perseverance-description").fadeIn(500);
        
        $("#quality-persistence").css("transition-duration", `0.5s`);
        $("#quality-persistence").css("transform", `translateX(600px)`);
        $("#quality-patience").css("transition-duration", `0.5s`);
        $("#quality-patience").css("transform", `translateX(600px)`);
        $("#quality-organisation").css("transition-duration", `0.5s`);
        $("#quality-organisation").css("transform", `translateX(600px)`);
        $("#quality-pedagogie").css("transition-duration", `0.5s`);
        $("#quality-pedagogie").css("transform", `translateX(600px)`);

        $("#quality-perseverance-description").css("transition-duration", `0.5s`);
        $("#quality-perseverance-description").css("transform", `translateX(0px)`);
        $("#quality-perseverance-description").css("opacity", `1`);

        $("#quality-perseverance-description > ul > li > .menu-quality-persistence").addClass("link-clicked");

        $("#quality-persistence").fadeOut(1);
        $("#quality-patience").fadeOut(1);
        $("#quality-pedagogie").fadeOut(1);
        $("#quality-organisation").fadeOut(1);
        
        //To Scroll on quality position
        $('html, body').stop().animate({
            scrollTop: $('#container-quality').offset().top
        }, 600, function() {
                location.hash = '#container-quality'; //attach the hash (#jumptarget) to the pageurl
        });
        
        //To unFreeze scroll bar
        $("body").css("overflow", "auto");
    });

    $( "#skill-formation-to-pedagogie").click(function(e) {
        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeOut(1);
        
        $("#quality-patience-description").fadeOut(1);
        $("#quality-perseverance-description").fadeOut(500);
        $("#quality-organisation-description").fadeOut(500);
        $("#quality-pedagogie-description").fadeIn(500);
        
        $("#quality-persistence").css("transition-duration", `0.5s`);
        $("#quality-persistence").css("transform", `translateX(600px)`);
        $("#quality-patience").css("transition-duration", `0.5s`);
        $("#quality-patience").css("transform", `translateX(600px)`);
        $("#quality-organisation").css("transition-duration", `0.5s`);
        $("#quality-organisation").css("transform", `translateX(600px)`);
        $("#quality-pedagogie").css("transition-duration", `0.5s`);
        $("#quality-pedagogie").css("transform", `translateX(600px)`);

        $("#quality-pedagogie-description").css("transition-duration", `0.5s`);
        $("#quality-pedagogie-description").css("transform", `translateX(0px)`);
        $("#quality-pedagogie-description").css("opacity", `1`);

        $("#quality-pedagogie-description > ul > li > .menu-quality-pedagogie").addClass("link-clicked");

        $("#quality-persistence").fadeOut(1);
        $("#quality-patience").fadeOut(1);
        $("#quality-pedagogie").fadeOut(1);
        $("#quality-organisation").fadeOut(1);
        
        //To Scroll on quality position
        $('html, body').stop().animate({
            scrollTop: $('#container-quality').offset().top
        }, 600, function() {
                location.hash = '#container-quality'; //attach the hash (#jumptarget) to the pageurl
        });
        
        //To unFreeze scroll bar
        $("body").css("overflow", "auto");
    });

    $( "#skill-other-to-patience").click(function(e) {
        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeOut(1);
        
        $("#quality-perseverance-description").fadeOut(500);
        $("#quality-organisation-description").fadeOut(500);
        $("#quality-pedagogie-description").fadeOut(500);
        $("#quality-patience-description").fadeIn(500);
        
        $("#quality-persistence").css("transition-duration", `0.5s`);
        $("#quality-persistence").css("transform", `translateX(600px)`);
        $("#quality-patience").css("transition-duration", `0.5s`);
        $("#quality-patience").css("transform", `translateX(600px)`);
        $("#quality-organisation").css("transition-duration", `0.5s`);
        $("#quality-organisation").css("transform", `translateX(600px)`);
        $("#quality-pedagogie").css("transition-duration", `0.5s`);
        $("#quality-pedagogie").css("transform", `translateX(600px)`);

        $("#quality-patience-description").css("transition-duration", `0.5s`);
        $("#quality-patience-description").css("transform", `translateX(0px)`);
        $("#quality-patience-description").css("opacity", `1`);

        $("#quality-patience-description > ul > li > .menu-quality-patience").addClass("link-clicked");

        $("#quality-persistence").fadeOut(1);
        $("#quality-patience").fadeOut(1);
        $("#quality-pedagogie").fadeOut(1);
        $("#quality-organisation").fadeOut(1);
        
        //To Scroll on quality position
        $('html, body').stop().animate({
            scrollTop: $('#container-quality').offset().top
        }, 600, function() {
                location.hash = '#container-quality'; //attach the hash (#jumptarget) to the pageurl
        });
        
        //To unFreeze scroll bar
        $("body").css("overflow", "auto");
    });

    $( "#skill-project-to-patience").click(function(e) {
        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeOut(1);
        
        $("#quality-perseverance-description").fadeOut(500);
        $("#quality-organisation-description").fadeOut(500);
        $("#quality-pedagogie-description").fadeOut(500);
        $("#quality-patience-description").fadeIn(500);
        
        $("#quality-persistence").css("transition-duration", `0.5s`);
        $("#quality-persistence").css("transform", `translateX(600px)`);
        $("#quality-patience").css("transition-duration", `0.5s`);
        $("#quality-patience").css("transform", `translateX(600px)`);
        $("#quality-organisation").css("transition-duration", `0.5s`);
        $("#quality-organisation").css("transform", `translateX(600px)`);
        $("#quality-pedagogie").css("transition-duration", `0.5s`);
        $("#quality-pedagogie").css("transform", `translateX(600px)`);

        $("#quality-patience-description").css("transition-duration", `0.5s`);
        $("#quality-patience-description").css("transform", `translateX(0px)`);
        $("#quality-patience-description").css("opacity", `1`);

        $("#quality-patience-description > ul > li > .menu-quality-patience").addClass("link-clicked");

        $("#quality-persistence").fadeOut(1);
        $("#quality-patience").fadeOut(1);
        $("#quality-pedagogie").fadeOut(1);
        $("#quality-organisation").fadeOut(1);
        
        //To Scroll on quality position
        $('html, body').stop().animate({
            scrollTop: $('#container-quality').offset().top
        }, 600, function() {
                location.hash = '#container-quality'; //attach the hash (#jumptarget) to the pageurl
        });
        
        //To unFreeze scroll bar
        $("body").css("overflow", "auto");
    });

    // To Navigate between project and soft skills

    $( "#confidentiality-to-organisation").click(function(e) {
        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeOut(1);
        
        $("#quality-perseverance-description").fadeOut(500);
        $("#quality-pedagogie-description").fadeOut(500);
        $("#quality-patience-description").fadeOut(500);
        $("#quality-organisation-description").fadeIn(500);
        
        $("#quality-persistence").css("transition-duration", `0.5s`);
        $("#quality-persistence").css("transform", `translateX(600px)`);
        $("#quality-patience").css("transition-duration", `0.5s`);
        $("#quality-patience").css("transform", `translateX(600px)`);
        $("#quality-organisation").css("transition-duration", `0.5s`);
        $("#quality-organisation").css("transform", `translateX(600px)`);
        $("#quality-pedagogie").css("transition-duration", `0.5s`);
        $("#quality-pedagogie").css("transform", `translateX(600px)`);

        $("#quality-organisation-description").css("transition-duration", `0.5s`);
        $("#quality-organisation-description").css("transform", `translateX(0px)`);
        $("#quality-organisation-description").css("opacity", `1`);

        $("#quality-organisation-description > ul > li > .menu-quality-organisation").addClass("link-clicked");

        $("#quality-persistence").fadeOut(1);
        $("#quality-patience").fadeOut(1);
        $("#quality-pedagogie").fadeOut(1);
        $("#quality-organisation").fadeOut(1);
        
        //To Scroll on quality position
        $('html, body').stop().animate({
            scrollTop: $('#container-quality').offset().top
        }, 600, function() {
                location.hash = '#container-quality'; //attach the hash (#jumptarget) to the pageurl
        });
        
        //To unFreeze scroll bar
        $("body").css("overflow", "auto");
    });

    $( "#mini-framework-to-perseverance").click(function(e) {
        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeOut(1);
        
        $("#quality-pedagogie-description").fadeOut(500);
        $("#quality-patience-description").fadeOut(500);
        $("#quality-organisation-description").fadeOut(500);
        $("#quality-perseverance-description").fadeIn(500);
        
        $("#quality-persistence").css("transition-duration", `0.5s`);
        $("#quality-persistence").css("transform", `translateX(600px)`);
        $("#quality-patience").css("transition-duration", `0.5s`);
        $("#quality-patience").css("transform", `translateX(600px)`);
        $("#quality-organisation").css("transition-duration", `0.5s`);
        $("#quality-organisation").css("transform", `translateX(600px)`);
        $("#quality-pedagogie").css("transition-duration", `0.5s`);
        $("#quality-pedagogie").css("transform", `translateX(600px)`);

        $("#quality-perseverance-description").css("transition-duration", `0.5s`);
        $("#quality-perseverance-description").css("transform", `translateX(0px)`);
        $("#quality-perseverance-description").css("opacity", `1`);

        $("#quality-perseverance-description > ul > li > .menu-quality-persistence").addClass("link-clicked");

        $("#quality-persistence").fadeOut(1);
        $("#quality-patience").fadeOut(1);
        $("#quality-pedagogie").fadeOut(1);
        $("#quality-organisation").fadeOut(1);
        
        //To Scroll on quality position
        $('html, body').stop().animate({
            scrollTop: $('#container-quality').offset().top
        }, 600, function() {
                location.hash = '#container-quality'; //attach the hash (#jumptarget) to the pageurl
        });
        
        //To unFreeze scroll bar
        $("body").css("overflow", "auto");
    });

    $( "#research-bar-to-patience").click(function(e) {
        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeOut(1);
        
        $("#quality-pedagogie-description").fadeOut(500);
        $("#quality-organisation-description").fadeOut(500);
        $("#quality-perseverance-description").fadeOut(500);
        $("#quality-patience-description").fadeIn(500);
        
        $("#quality-persistence").css("transition-duration", `0.5s`);
        $("#quality-persistence").css("transform", `translateX(600px)`);
        $("#quality-patience").css("transition-duration", `0.5s`);
        $("#quality-patience").css("transform", `translateX(600px)`);
        $("#quality-organisation").css("transition-duration", `0.5s`);
        $("#quality-organisation").css("transform", `translateX(600px)`);
        $("#quality-pedagogie").css("transition-duration", `0.5s`);
        $("#quality-pedagogie").css("transform", `translateX(600px)`);

        $("#quality-patience-description").css("transition-duration", `0.5s`);
        $("#quality-patience-description").css("transform", `translateX(0px)`);
        $("#quality-patience-description").css("opacity", `1`);

        $("#quality-patience-description > ul > li > .menu-quality-patience").addClass("link-clicked");

        $("#quality-persistence").fadeOut(1);
        $("#quality-patience").fadeOut(1);
        $("#quality-pedagogie").fadeOut(1);
        $("#quality-organisation").fadeOut(1);
        
        //To Scroll on quality position
        $('html, body').stop().animate({
            scrollTop: $('#container-quality').offset().top
        }, 600, function() {
                location.hash = '#container-quality'; //attach the hash (#jumptarget) to the pageurl
        });
        
        //To unFreeze scroll bar
        $("body").css("overflow", "auto");
    });

    $( "#graphic-maj-to-organisation").click(function(e) {
        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeOut(1);
        
        $("#quality-pedagogie-description").fadeOut(500);
        $("#quality-perseverance-description").fadeOut(500);
        $("#quality-patience-description").fadeOut(500);
        $("#quality-organisation-description").fadeIn(500);
        
        $("#quality-persistence").css("transition-duration", `0.5s`);
        $("#quality-persistence").css("transform", `translateX(600px)`);
        $("#quality-patience").css("transition-duration", `0.5s`);
        $("#quality-patience").css("transform", `translateX(600px)`);
        $("#quality-organisation").css("transition-duration", `0.5s`);
        $("#quality-organisation").css("transform", `translateX(600px)`);
        $("#quality-pedagogie").css("transition-duration", `0.5s`);
        $("#quality-pedagogie").css("transform", `translateX(600px)`);

        $("#quality-organisation-description").css("transition-duration", `0.5s`);
        $("#quality-organisation-description").css("transform", `translateX(0px)`);
        $("#quality-organisation-description").css("opacity", `1`);

        $("#quality-organisation-description > ul > li > .menu-quality-organisation").addClass("link-clicked");

        $("#quality-persistence").fadeOut(1);
        $("#quality-patience").fadeOut(1);
        $("#quality-pedagogie").fadeOut(1);
        $("#quality-organisation").fadeOut(1);
        
        //To Scroll on quality position
        $('html, body').stop().animate({
            scrollTop: $('#container-quality').offset().top
        }, 600, function() {
                location.hash = '#container-quality'; //attach the hash (#jumptarget) to the pageurl
        });
        
        //To unFreeze scroll bar
        $("body").css("overflow", "auto");
    });

    $( "#fructos-game-to-pedagogie").click(function(e) {
        $("#projects-detailled-description").fadeOut(1);
        $("#skills-detailled-description").fadeOut(1);
        
        $("#quality-perseverance-description").fadeOut(500);
        $("#quality-patience-description").fadeOut(500);
        $("#quality-organisation-description").fadeOut(500);
        $("#quality-pedagogie-description").fadeIn(500);
        
        $("#quality-persistence").css("transition-duration", `0.5s`);
        $("#quality-persistence").css("transform", `translateX(600px)`);
        $("#quality-patience").css("transition-duration", `0.5s`);
        $("#quality-patience").css("transform", `translateX(600px)`);
        $("#quality-organisation").css("transition-duration", `0.5s`);
        $("#quality-organisation").css("transform", `translateX(600px)`);
        $("#quality-pedagogie").css("transition-duration", `0.5s`);
        $("#quality-pedagogie").css("transform", `translateX(600px)`);

        $("#quality-pedagogie-description").css("transition-duration", `0.5s`);
        $("#quality-pedagogie-description").css("transform", `translateX(0px)`);
        $("#quality-pedagogie-description").css("opacity", `1`);

        $("#quality-pedagogie-description > ul > li > .menu-quality-pedagogie").addClass("link-clicked");

        $("#quality-persistence").fadeOut(1);
        $("#quality-patience").fadeOut(1);
        $("#quality-pedagogie").fadeOut(1);
        $("#quality-organisation").fadeOut(1);
        
        //To Scroll on quality position
        $('html, body').stop().animate({
            scrollTop: $('#container-quality').offset().top
        }, 600, function() {
                location.hash = '#container-quality'; //attach the hash (#jumptarget) to the pageurl
        });
        
        //To unFreeze scroll bar
        $("body").css("overflow", "auto");
    });

    // To Navigate with carrousel

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
