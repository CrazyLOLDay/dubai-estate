<?php

  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $checks = $_POST['selected_checks'];
  $from = "admin@dubai.com";
  $to = "archiref@yahoo.com";
  $message = "Критерии поиска: ";

  for ($i = 0; $i < count($checks); $i++) {
    $message .= " $checks[$i]";
  }

  $subject = "=?utf-8?B?".base64_encode("Недвижимость в Дубаи - Новая заявка")."?=";
  $message = "<h1 style='font-size: 24px;'>Новая заявка от пользователя: <br> $name <br> Телефон: $phone</h1> <br> $message <br>";
  $headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";

  if (strlen($phone) < strlen("+7(921) 000-0000")) {
    echo $error = "номер телефона слишком короткий" . $phone;
  } else {
    mail($to, $subject, $message, $headers);
    echo "success";
  }



