window.addEventListener('load', () => {
    const contenedor_carga = document.querySelector('.contenedorCarga')
    contenedor_carga.style.opacity = 0
    contenedor_carga.style.visibility = 'hidden'
    
  });

  //menu desplegable
  
  const menu = document.querySelector("#menu");
  const logoNav = document.querySelector(".logoNav");
  const botonMenu = document.querySelector(".botonMenu");
var contador = 1;
botonMenu.addEventListener("click", ()=> {
if(contador == 1){
menu.style.left = 0;
menu.style.transition = ".5s";
logoNav.style.left = "-15%";
logoNav.style.display = "block";
logoNav.style.transition = "1s";


contador = 0;
}
else{
  contador = 1;
  logoNav.style.display = "none";
  menu.style.left = "-100%";
  logoNav.style.transition = "2s";
  logoNav.style.left = "-100%";
  
}
});
  

  

 