<?php

$nombre = $_POST ['nombre'];
$email = $_POST ['email'];
$mensaje = $_POST ['textarea'];



$mensaje = "este mensaje fue enviado por ". $nombre ."\r\n"  ;
$mensaje .= "su email es:" . $email . "\r\n"  ;
$mensaje .= "Mensaje". $_POST["mensaje"] . "\r\n" ;
$mensaje .= "Enviado el :" . date("d/m/Y", time());


$para = "leandromartini86@gmail.com";
$asunto = "este mail fue enviado desde la web";

mail($para, $asunto, utf8_decode($mensaje), $header);  


header("location: contact.js");

?>
