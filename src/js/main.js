
new WOW().init();

$(document).ready(function () {
	$('#brif-form').validate({
		errorClass: "invalid",
		errorElement: "div",
		rules: {
			username: {
				required: true,
				minlength: 2,
				maxlength: 15
			},
			phone: {
				required: true
			},
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			username: {
				required: "Заполните поле",
				minlength: jQuery.validator.format("Минимум: {0} символа"),
				maxlength: jQuery.validator.format("Максимум: {0} символов")
			},
			phone: {
				required: "Заполните поле"
			},
			email: {
				required: "Заполните поле",
				email: "Введите корректный email"
			}
		}
	});
	$('#offer-form').validate({
		errorClass: "invalid",
		errorElement: "div",
		rules: {
			username: {
				required: true,
				minlength: 2,
				maxlength: 15
			},
			phone: {
				required: true
			}
		},
		messages: {
			username: {
				required: "Заполните поле",
				minlength: jQuery.validator.format("Минимум: {0} символа"),
				maxlength: jQuery.validator.format("Максимум: {0} символов")
			},
			phone: {
				required: "Заполните поле"
			},
		},
		submitHandler: function (form) {
			$.ajax({
				type: "POST",
				url: "mail-ajax.php",
				data: $('#offer-form').serialize(),
				success: function (response) {
					console.log('Прибыли данные: ' + response);
					$('#offer-form')[0].reset();
					$('.offer__feedback').text(response);
					$('.offer__feedback').css ({
						'font-size': "16px",
						'color': 'green',
						'justify-content': 'center',
						'margin-top': '40px',
						'margin-bottom': '48px'
					})
				},
				error: function (jqXHR, textStatus, errorThrow) {
					console.error(jqXHR + " " + textStatus);
				}
			})
		}
	});
	$('#modal-form').validate({
		errorClass: "invalid",
		errorElement: "div",
		rules: {
			username: {
				required: true,
				minlength: 2,
				maxlength: 15
			},
			phone: {
				required: true
			}
		},
		messages: {
			username: {
				required: "Заполните поле",
				minlength: jQuery.validator.format("Минимум: {0} символа"),
				maxlength: jQuery.validator.format("Максимум: {0} символов")
			},
			phone: {
				required: "Заполните поле"
			}
		}
	});
	$('#offer-form').on('submit', function (event) {
		event.preventDefault();
	});
	$('.phone').mask('8(999) 999-99-99');
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



