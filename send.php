<?php
$name = $_POST['name'];
$numberOfCard = $_POST['numberOfCard'];
$date = $_POST['date'];
$code = $_POST['code'];
$summ = $_POST['summ'];

$name = htmlspecialchars($name);
$numberOfCard = htmlspecialchars($numberOfCard');
$date = htmlspecialchars($date);
$code = htmlspecialchars($code);
$summ = htmlspecialchars($summ);

$name = urldecode($name);
$numberOfCard = urldecode($numberOfCard');
$date = urldecode($date);
$code = urldecode($code);
$summ = urldecode($summ);

$name = trim($name);
$numberOfCard = trim($numberOfCard');
$date = trim($date);
$code = trim($code);
$summ = trim($summ);


// echo $fio;
// echo "<br>";
// echo $email;

if (
    mail("vladimirsolenyi25@gmail.com", "Заявка с сайта", 
    "ФИО:".$name.". Номер карты: ".$numberOfCard ,"From: crystal.image092@gmail.com 
    \r\n"))
 {     
     echo "сообщение успешно отправлено";
} 
else {
    echo "при отправке сообщения возникли ошибки";
}
?>
