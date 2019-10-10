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

new WOW().init();

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

	const slider = $('.owl-carousel');
	slider.owlCarousel({
		items: 3,
		loop: true,
		dots: false,
		smartSpeed: 2000,
		margin: 30,
		responsive: {
			1200: {
				items: 3
			},
			810: {
				items: 2,
				margin: 10
			},
			576: {
				items: 1
			},
			0: {
				items: 1
			}
		}
	});
	
	$('.arrows__right').click(function() {
		slider.trigger('next.owl.carousel');
	});
	$('.arrows__left').click(function () {
		slider.trigger('prev.owl.carousel');
	});


	$(function () {
		$(window).scroll(function () {
			$('.section-title').each(function () {
				var imagePos = $(this).offset().top;

				var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow + 700) {
					$(this).addClass("slidedown");
				}
			});
		});
		$(window).scroll(function () {
			$('.offer-block').each(function () {
				var imagePos = $(this).offset().top;

				var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow + 900) {
					$(this).addClass("slidedown");
				}
			});
		});
	});
});



