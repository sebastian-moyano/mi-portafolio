let canvas;
let ctx;
let efecto;
let efectoAnimado;
window.onload = function(){
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    efecto = new flowEfecto(ctx, canvas.width, canvas.height);
    efecto.animate(0);
}
window.addEventListener("resize", function(){
    cancelAnimationFrame(efectoAnimado);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    efecto = new flowEfecto(ctx, canvas.width, canvas.height);
    efecto.animate(0);
});
const mouse ={
    x: 0,
    y: 0,
}
window.addEventListener("mousemove", function(e){
    mouse.x = e.x;
    mouse.y = e.y;
})

class flowEfecto{
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height){
        this.#ctx = ctx;
        this.#ctx.lineWidth = 1;
        this.#width = width;
        this.#height = height;
        this.cadaTiempo = 0;
        this.interval = 1000/60;
        this.tiempo = 0;
        this.tallaCelda= 15;
        this.gradiante;
        this.#crearGradiante();
        this.#ctx.strokeStyle = this.gradiante;
        this.radio = 0;
        this.vr = 0.3;
    }
    #crearGradiante(){
        this.gradiante = this.#ctx.createLinearGradient(0, 0, this.#width, this.#height);
        this.gradiante.addColorStop("0.1", "rgb(122, 190, 206)");
        this.gradiante.addColorStop("0.2", "rgb(122, 190, 206)");
        this.gradiante.addColorStop("0.4", "rgb(122, 190, 206)");
        this.gradiante.addColorStop("0.6", "rgb(122, 190, 206)");
        this.gradiante.addColorStop("0.8", "rgb(122, 190, 206)");
        this.gradiante.addColorStop("0.9", "rgb(122, 190, 206)");
    }
    #dibujarLinea(angulo, x, y){
        let posisionX = x;
        let posisionY = y;
        let dx = mouse.x - posisionX;
        let dy = mouse.y - posisionY;
        let distancia = dx * dx + dy * dy;
        let longitud = distancia/1000;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x,y);
        this.#ctx.lineTo(x+ Math.cos(angulo) * longitud, y + Math.sin(angulo) * longitud);
        this.#ctx.stroke();
    }
    animate(tiempoSello){
        const deltaTime = tiempoSello - this.cadaTiempo;
        this.cadaTiempo = tiempoSello;
        if(this.tiempo > this.interval){
            this.#ctx.clearRect(0, 0, this.#width, this.#height);
            this.radio += this.vr;
            if(this.radio > 5 || this.radio < -5) this.vr *= -1;

            for(let y = 0; y < this.#height; y+=this.tallaCelda){
               for(let x = 0; x < this.#width; x+=this.tallaCelda){
                   const angulo = (Math.cos(x * 0.05) + Math.sin(y * 0.05) * this.radio);
                this.#dibujarLinea(angulo, x, y );
               }
            }
            
            this.tiempo = 0;
        }
        else{
            this.tiempo += deltaTime;
        }
        
        
        
        efectoAnimado = requestAnimationFrame(this.animate.bind(this));


    }
}