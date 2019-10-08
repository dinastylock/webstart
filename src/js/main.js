// var button = document.querySelector('#button');
// var modal = document.querySelector('#modal')
// var close = document.querySelector('#close')

// button.addEventListener('click', function () {
// 	modal.classList.add('modal_active');
// 	let timerId = setTimeout(function () {
// 		modal.classList.remove('modal_active');
// 	}, 5000);
// });

// close.addEventListener('click', function() {
// 	modal.classList.remove('modal_active');
// });


$(document).ready(function () {
	var button = $('#button');
	var modal = $('#modal');
	var close = $('#close');

	button.on('click', function () {
		modal.addClass('modal_active');
	});
	close.on('click', function () {
		modal.removeClass('modal_active');
	});

	function backToTop() {
		let top = $('#arrow');

		$(window).on('scroll', () => {
			if ($(this).scrollTop() >= 100) {
				top.fadeIn();
			} else {
				top.fadeOut();
			};
		});
		top.on('click', (e) => {
			e.preventDefault();
			$('html').animate({ scrollTop: 0 }, 1000);
		});
	};
	backToTop();

	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('.arrows__left'),
		nextArrow: $('.arrows__right'),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 810,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});
	
});

