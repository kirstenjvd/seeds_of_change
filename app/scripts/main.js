$(document).ready(function () {
	
	'use strict';

	$( '.toggle' ).click(function() {
		$(this).toggleClass('toggle-open');
	  	$(this).siblings('.toggle-container').toggle();
	 });

});