<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "phpmailer/src/Exception.php";
require "phpmailer/src/PHPMailer.php";
require "phpmailer/src/SMTP.php";


if (isset($_POST["send"])) {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com"
    $mail->SMTPAuth = true;
    $mail->Username = "Mój Gmail"; 
    $mail->Password = "Moje hasło";
    $mail->SMTPSecure = "ssl";
    $mail->Port = 465;

    $mail->setFrom("Mój Gmail");

    $mail->addAddress($_POST["email"]);

    $mail->isHTML(true);

    $mail->Subject = $_POST["number"];
    $mail->Body = $_POST["msg"];

    $mail->send();

    echo
    "
    <script>
        alert("Message sent");
        document.location.href = "index.html";
    </script>
    ";

}

// $name = $_POST["name"]; 
// $from = $_POST["email"]; 
// $number = $_POST["number"];
// $subject = "Wiadomość z formularza na stronie Pan Ekspres";
// $to = "inacokey@gmail.com"; 
// $message = $_POST["msg"]; 

// $txt = "Imię: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "Numer: " . $number . "\r\n" . "\r\n" . "Treść: " . $message;

// $headers = "MIME-Version: 1.0" . "\r\n";
// $headers .= "Content-Type: text/plain; charset=UTF-8" . "\r\n";
// $headers .= "From: " . $from . "\r\n";
// $headers .= "Reply-To: " . $from . "\r\n";

// $mail_status = mail($to, $subject, $txt, $headers);

// if ($mail_status) {
//     header("Location: /index.html?mail_status=sent");
// } else {
//     header("Location: /index.html?mail_status=error");
// }

?>