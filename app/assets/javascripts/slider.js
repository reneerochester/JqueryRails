$(document).ready(function(){
  setTimeout(function() {
    var $slider = $('.slider');
    var $next = $slider.find('button.next')
    var $previous = $slider.find('button.previous');
    var $images = $slider.find('img')
    var $ul = $slider.find('ul.photos')
    var $innerslider = $slider.find('.inner-slider');

    // count the img widths
    var total_width = 0
    // loop over each img and add it's width to the total_width variable +=
    $images.each(function(){
      var image = $(this);
      console.log(image.width());
      total_width += image.width();
    });
    // set that total width to be the parent containers width
    $ul.css('width', total_width);
    
    var counter = 0;

    $next.click(function(){
      counter += 1;

      //if (counter > total number of images){
        // make it animate back to 0 so that it slides back to the first image
      //  instead of sliding to whitespace
        // and looking broken
      //}
      //else{
        // slide to the next one ( already done )
        $ul.animate({
          'margin-left':'-=400px'
        });
        
      //}
    });
    
  }, 100);

});