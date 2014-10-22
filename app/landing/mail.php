<?php 
session_start(); 
if($_POST['session_id'] != session_id() ) 
{ 
    exit("Отправкой сообщений можно пользоваться  
              только на  сайте ".$_SERVER['HTTP_HOST'].".");      
} 
else 
{ 
    // Обработка полей формы 
    $message_text = htmlspecialchars(trim($_POST['message_text'])); 
    $name = htmlspecialchars(trim($_POST['name'])); 
     
    // Проверяем длину сообщения, она не должна превышать $len знаков 
    $len = 200; 
    if(strlen($message_text) > $len) 
    { 
        exit("Ошибка. Сообщение не должно превышать ".$len. " знаков. "); 
    } 
     
    // здесь надо вставить email куда отправлять сообщение 
    $to = "sergej.s.romanov@gmail.com"; 
    $subject="Письмо от ".$name; 
     
    // конвертируем из windows-1251 в koi8-r 
    $subject = convert_cyr_string($subject,'w','k'); 
     
    // это само письмо 
    $message ="<html> 
               <head></head> 
               <body> 
               Письмо отправлено - <font color='red'>".date("d.m.Y H:i:s"). "</font><br> 
              <h3>Текст письма:</h3>". $message_text." 
               </body> 
               </html> 
               "; 
    // конвертируем из windows-1251 в koi8-r            
    $message = convert_cyr_string($message,'w','k'); 
    // заголовки письма 
    $headers = "Content-Type: text/html; charset=KOI8-R\r\n"; 
    // от кого письмо 
    $headers .= "From: server <LPHP.RU>\r\n\r\n"; 
    if(mail($to,$subject,$message,$headers)) 
    { 
      echo "Письмо успешно отправлено.";     
    } 
    else 
    { 
      echo "Ошибка. Письмо не отправлено.";     
    } 
} 
?>
