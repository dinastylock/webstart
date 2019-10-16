<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные, которые отправляет пользователь
$userName = $_POST['username'];
$userEmail = $_POST['email'];
$userPhone = $_POST['phone'];
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "Форма усешно отправлена";
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";                                          
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера GMAIL
    $mail->Username   = 'mironowmax1m@yandex.ru'; // Логин на почте
    $mail->Password   = 'qwerty12345'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('mironowmax1m@yandex.ru', 'Валерий'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('art_flamingo@mail.ru');
        // -----------------------
        // Само письмо
        // -----------------------
        $mail->isHTML(true);
    
        $mail->Subject = 'Новая заявка';
				$mail->Body    = "<b>Имя:</b> $userName <br>
				<b>Телефон:</b> $userPhone <br>
				<b>Почта:</b> $userEmail";
				
// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "Форма успешно отправлена";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}