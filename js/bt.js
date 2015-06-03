jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 1200,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 2400,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});


               $('.has-submenu > a ').click(function() {
               	    $menu = $(this).next('.submenu-container');
               	    $menu.toggleClass('open');
               	    return false;
               });

               var $input = $('form input, form textarea');

                      $input.focus(function(event) {
                      	var $list = $(this).parent(),
                      	       $label = $list.find('label:first');
                      	       $label.addClass('move-up');
                      });blur(function(event) {
                      	var $list = $(this).parent(),
                      	       $that = $(this);
                      	       $label = $list.find('label:first');
                      	       $that.val() == ' '  ?  ' '  :  $label.removeClass('move-up');
                      	      
                      });




});