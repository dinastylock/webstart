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
});
