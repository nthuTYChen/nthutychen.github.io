$(document).ready(function () {
	$('p > span').on('click', function(event, selector) {
		showExplanation($(this).children('span').text());
	});

	$('body > div > p:first-of-type').on('click', function() {
		$('body > div > p:last-of-type').text('');
		$('body > div').animate({
			width: 0
		}, 500);
	});
});

function showExplanation(exp) {
	$('body > div > p:last-of-type').text(exp);
	$('body > div').animate({
		width: "50vw"
	}, 500);
}