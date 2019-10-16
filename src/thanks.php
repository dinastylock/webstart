<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Практика. Ремонт квартир</title>
	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/owl.carousel.min.css">
	<link rel="stylesheet" href="css/owl.theme.default.min.css">
	<link rel="stylesheet" href="css/animate.css">
	<link rel="stylesheet" href="css/style.css">

</head>
<body>
	<nav class="navbar">
		<div class="container">
			<div class="navbar-block">
				<div class="navbar__logo">
					<img src="img/logo.png" alt="логотип">
				</div>
				<div class="navbar__info">
					<div class="navbar__contacts">
						<span class="navbar__adress">Калуга, Москва, МО</span>
						<a href="tel:+7 (495)42-251-31" class="navbar__phone">+7 (495) 42-251-31</a>
					</div>
					<a href="#" class="button navbar__button wow bounce" data-wow-delay="1s" id="button">Перезвоните мне</a>
				</div>
			</div>
		</div>
	</nav>
	<!-- /.navbar -->

	<main>
		<section class="hero">
			<div class="container">
				<div class="hero-block">
					<div class="hero-text slideleft">
						<h1 class="hero-text__title">Благодарим за заявку</h1>
						<span class="hero-text__subtitle">мы свяжемся с Вами в ближайшее время</span>
						<ul class="hero-list">
							<li class="hero-list__item">
								<div class="hero-list__image"><img src="img/hero/clock.png" alt="часы"></div>
								<span class="hero-list__text">Точно соблюдаем сроки</span>
							</li>
							<li class="hero-list__item">
								<div class="hero-list__image"><img src="img/hero/calculator.png" alt="калькулятор"></div>
								<span class="hero-list__text">Рассчитаем смету на работы <br> и материалы в день обращения</span>
							</li>
							<li class="hero-list__item">
								<div class="hero-list__image"><img src="img/hero/paint-board.png" alt="палитра"></div>
								<span class="hero-list__text">Предложим более 100 вариантов исполнения дизайна Вашего жилья</span>
							</li>
						</ul>
					</div>
					<div class="hero-image wow fadeInRight" data-wow-delay="0.1s">
						<img src="img/hero/hero-img.png" alt="План квартиры">
					</div>
				</div>
				<!-- /.hero-block -->
			</div>
			<!-- /.container -->
		</section>
		<!-- /.hero -->
	</main>

	<footer class="footer">
		<div class="map" id="map">
			<script type="text/javascript" charset="utf-8" async
				src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae4e394e5db832cec803e92c21cba6d5f5131323fd188576e64168ed6da16fa21&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false"></script>
		</div>
		<div class="container">
			<div class="contacts-block">
				<div class="contacts">
					<h3 class="contacts__title">Приезжайте к нам в гости! Проконсультируем Вас<br> по всем вопросам ремонта</h3>
					<ul class="contacts-list">
						<li class="contacts-list__item">
							<span class="contacts-list__icon">
								<img src="img/footer/map.png" alt="icons">
							</span>
							<span class="contacts-list__text">г. Москва <br> <span class="span-bold">ул. Ленина, д. 10, корпус 2, оф. 308</span></span>
						</li>
						<li class="contacts-list__item">
							<span class="contacts-list__icon">
								<img src="img/footer/clock.png" alt="icons">
							</span>
							<span class="contacts-list__text">Режим работы: <br> <span class="span-bold">с 9:00 до 18:00</span></span>
						</li>
						<li class="contacts-list__item">
							<span class="contacts-list__icon">
								<img src="img/footer/phone.png" alt="icons">
							</span>
							<span class="contacts-list__text">Телефон: <br><span class="span-bold"><a href="tel:+7(495)42-251-31">+ 7 (495) 42-251-31</a></span></span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
		<div class="modal" id="modal">
			<div class="modal-dialog">
				<button class="modal-dialog__close" id="close">&times</button>
				<h2 class="modal-dialog__title">Узнайте точную стоимость ремонта по телефону!</h2>
				<span class="modal-dialog__subtitle">Заполните поля ниже - мы свяжемся с Вами</span>
				<form action="#" id="modal-form" class="form modal-dialog__form">
					<div class="input-group">
						<input type="text" autocomplete="off" name="username" class="input modal-dialog__input"
							placeholder="Ваше имя">
					</div>
					<div class="input-group">
						<input type="tel" autocomplete="off" name="phone" class="input modal-dialog__input phone" placeholder="Ваш телефон">
					</div>
					<button class="button modal-dialog__button">Узнать стоимость</button>
				</form>
				<div class="modal-dialog__feedback">
					<p class="modal-dialog__text">Или Вы можете перезвонить нам сами по телефону:</p>
					<a href="tel:+7 (495)42-251-31" class="modal-dialog__phone">+7 (8182) 42-51-31</a>
				</div>
			</div>
		</div>
		<div class="arrow" id="arrow">
			<a href="#" class="arrow-up"></a>
		</div>

		<script src="js/jquery-3.4.1.min.js"></script>
		<script src="js/owl.carousel.min.js"></script>
		<script src="js/jquery.validate.min.js"></script>
		<script src="js/jquery.maskedinput.min.js"></script>
		<script src="js/wow.min.js"></script>
		<script src="js/main.js"></script>
</body>
</html>