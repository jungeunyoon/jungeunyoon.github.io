    var element_position = $('#contact').offset().top;
    
    var $doc = $(document),
    $win = $(window),
    $svg = $('svg').drawsvg(),
    max = ($doc.height() - element_position) - $win.height();


$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = element_position;

    if(y_scroll_pos > scroll_pos_test) {
          var p = ($win.scrollTop()-element_position) / max;
  $svg.drawsvg('progress', p);
    }
    
    
    
if (scrollPercentage >= 0.99) {
    path.style.strokeDasharray = "none";
    
  } else {
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
  }
  
     if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
      document.getElementById('hideaway').style.display='block';
      document.getElementById('hideaway1').style.display='block';
   }
});





