
$(window).bind('load scroll', function ()
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
 
    var elemTop = $('.container-content').offset().top;
    var elemBottom = elemTop + $('.container-content').height(); 
    if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop))   
    {
      $(window).off('load scroll');
      $('.children-content').first().fadeIn(500, function afficheSuivante(){
        $(this).next('.children-content').fadeIn(500, afficheSuivante);
      });
    }
     
    var elemTopTitle = $('#skills-title').offset().top;
    var elemBottomTitle = elemTop + $('#skills-title').height();
    if ((elemBottomTitle <= docViewBottom) && (elemTopTitle >= docViewTop))   
    {
      $(window).off('load scroll');
      $('#skills-title').fadeIn(1000);
      $('#project-title').fadeIn(1000);
      $('h2').fadeIn(1000);
      $('hr').fadeIn(1000);
      $('h3').fadeIn(1000);
    }
});