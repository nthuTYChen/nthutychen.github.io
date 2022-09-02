var menuOpen = false, touchMove = false;

$(document).ready(function () {
	$(document).on('touchmove', function () {
		touchMove = true;
		setTimeout(function () {
			touchMove = false;
		}, 500);
	});

	$(document).on('touchend click', function (event, selector) {
		event.stopPropagation();
		if(event.type === 'touchend') {
			selector.off('click');
		}
		if(menuOpen) {
			let menuItems = $('nav > a').not(':first-of-type'), delay = 0;
			menuItems.each(function (index) {
				setTimeout(function () {
					menuItems.eq(index).animate({opacity: 0}, 300, ()=>{
						menuItems.eq(index).css('display', 'none');
					});
				}, delay + (50 * index));
			});
			$('nav > a:first-of-type').removeClass('rotate');
			menuOpen = false;
		}
	});

	$('nav > a:first-of-type').on('touchend click', function (event, selector) {
		event.stopPropagation();
		if(event.type === 'touchend') {
			selector.off('click');
		}
		if(!touchMove) {
			let menuItems = $('nav > a').not(':first-of-type');
			let delay = 0;
			if(!menuOpen) {
				menuItems.each(function (index) {
					setTimeout(function () {
						menuItems.eq(index).css('display', 'grid');
						if($(document).width() < 1024) {
							menuItems.eq(index).animate({opacity: 0.95}, 300);
						}
						else {
							menuItems.eq(index).animate({opacity: 0.6}, 300);
						}
					}, delay + (50 * index));
				});
				$('nav > a:first-of-type').addClass('rotate');
			}
			else {
				menuItems.each(function (index) {
					setTimeout(function () {
						menuItems.eq(index).animate({opacity: 0}, 300, ()=>{
							menuItems.eq(index).css('display', 'none');
						});
					}, delay + (50 * index));
				});
				$('nav > a:first-of-type').removeClass('rotate');
			}
			menuOpen = !menuOpen;
		}
	});
});