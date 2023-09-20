//Contact Form in PHP
<?php
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $phone = htmlspecialchars($_POST['phone']);
  $website = htmlspecialchars($_POST['website']);
  $message = htmlspecialchars($_POST['message']);

  if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $receiver = "seuemail@gmail.com"; //enter that email address where you want to receive all messages
      $subject = "From: $name <$email>";//subject of the email address, subject looks like from: UmeidiIjate  <abc@gmail.com>
      $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\n\nMessage:\n$message\n\nRegards,\n$name";
      $sender = "From: $email";//sender email
      if(mail($receiver, $subject, $body, $sender)){
         echo "Sua mensagem foi enviada";
      }else{
         echo "Desculpe, não foi possível enviar sua mensagem!";
      }
    }else{
      echo "Digite um endereço de e-mail válido!";
    }
  }else{
    echo "O campo e-mail e mensagem é obrigatório!";
  }
?>