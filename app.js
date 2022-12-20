(function($) {
	
	$('.btn-menu').on('click', function() {
		$('.modal').toggleClass('show');
	});

	$('.dropdown-toggle').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('show');
		$(this).parent().find('.dropdown-menu').toggleClass('show');
	});


})(jQuery);