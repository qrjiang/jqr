	$.fn.submenu = function() {

	return this.each(function() {
		$(this).find('li').hover(

		function() {
			$(this).find('.sub-menu').removeClass('hide');
		}, 
		function() {
			$(this).find('.sub-menu').addClass('hide');
		})

	});
}
