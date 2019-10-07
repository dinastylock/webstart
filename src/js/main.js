var button = document.querySelector('#button');
var modal = document.querySelector('#modal')
var close = document.querySelector('#close')

button.addEventListener('click', function () {
	modal.classList.add('modal_active');
	let timerId = setTimeout(function () {
		modal.classList.remove('modal_active');
	}, 5000);
});

close.addEventListener('click', function() {
	modal.classList.remove('modal_active');
});