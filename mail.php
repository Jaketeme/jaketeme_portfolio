<?php
    $nome       = $_POST["nome"];
    $email      = $_POST["email"];
    $telefone   = $_POST["telefone"];
    $mensagem    = $_POST["mensagem"];

    
    require 'PHPMailer/PHPMailerAutoload.php';

    $mail           = new PHPMailer;
    $mail->CharSet  = 'UTF-8';
    
    //$mail->SMTPDebug = 3;

//    $mail->isSMTP();                                      
//    $mail->Host         = 'smtp1.example.com;smtp2.example.com';
//    $mail->SMTPAuth     = true;
//    $mail->Username     = 'user@example.com';
//    $mail->Password     = 'secret';
//    $mail->SMTPSecure   = 'tls';
//    $mail->Port         = 587;

    $para = "jaketeme.zapelloni@gmail.com";
    

    
    $mail->setFrom("jaketeme@genericdesign.com.br", "Portfolio Jaketeme");
    $mail->addAddress($para);
    $mail->addBCC("jaketeme.zapelloni@gmail.com");
    $mail->addReplyTo($email, $nome);
    $mail->isHTML(true);

    $html   = "<p>";
    $html  .= "<b>Nome:</b> {$nome}<br />";
    $html  .= "<b>E-mail:</b> {$email}<br />";
    $html  .= "<b>Fone:</b> {$telefone}<br />";
    $html  .= "<b>Mensagem:</b> {$mensagem}<br />";
    $html  .= "</p>";
    
    $mail->Subject = 'Contato do Seu portfolio :)';
    $mail->Body    = $html;
    $mail->AltBody = $html;
    
    $ret            = new stdClass();
    $ret->status    = true;
    
    if(!$mail->send()) {
        $ret->status = true;
    } else {
        $ret->status = true;
    }
    
    echo json_encode($ret);