$(document).ready(function () {
	
	'use strict';

	$( '.toggle' ).click(function() {
		$('this').toggleClass('open');
	  	$( '.toggle-container' ).toggle();
	 });
	
});