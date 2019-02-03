$.fn.typewriter = function(opt) {
    var typeone = function(self, text, content) {
      if (text.length > 0) {
        var next = text.match(/(\s*(<[^>]*>)?)*(&.*?;|.?)/)[0];
        text = text.substr(next.length);
        $(self).html(content+next);
        setTimeout(function(){
          typeone(self, text, content+next);
        }, opt['delay']);
      }
    }
    this.each(function() {
      opt = opt || { 'delay': 20 };
      $(this).height($(this).height());
      $(this).width($(this).width());
      typeone(this, $(this).html(), '');
    });
}
  
$(document).ready(function(){
  $(".typewriter").typewriter();
  $('#logo').fadeIn(2000);
  $('#big-title').fadeIn(5000);
  $('#little-title').fadeIn(5000);
  $('.nav').first().fadeIn(500, function afficheSuivante(){
      $(this).next('.nav').fadeIn(500, afficheSuivante);
  });
    
});
