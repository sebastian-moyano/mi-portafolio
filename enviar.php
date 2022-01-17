<?php 
$destino = "sm.estamosdesarrollando@gmail.com";
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$mensaje = $_POST["mensaje"];
$contenido = "nombre: " . $nombre . "\ncorreo: " . $correo . "\nMensaje: " . $mensaje;
@mail($destino,"contacto",$contenido);
header("Location:index.html");
?>