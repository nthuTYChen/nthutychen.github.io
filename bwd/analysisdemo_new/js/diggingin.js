$(document).ready(function () {
	$('p > span:first-of-type').on('click', function(event, selector) {
		$(this).next().show();
	});
});