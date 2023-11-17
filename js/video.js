
const video=document.querySelector("#video");
const tiempoduration= document.querySelector(".tiempo");
let tiempoActual;
console.dir(video)

const transformacion=(tiempo)=>{
    //<60 -> menos de 1 min
    let minutos;
    let segundos;
    if(tiempo<60){
        minutos=0;
        segundos=tiempo.toFixed(0)//solo tomo los segundos y no los milisegundos que estan luego del punto
    }
    if(tiempo>=60)
    {
    	minutos=Math.floor(tiempo / 60);
    	segundos=Math.floor(tiempo % 60);
    }
    return minutos+":"+segundos //devolvemos los minutos y segundos
} 

window.addEventListener('load', ()=>{
console.log(video.duration)
tiempoduration.textContent=transformacion(video.duration)
})


const inicioVideo=()=>{
	video.play();
	tiempoActual= setInterval (()=>{
		console.log(video.currentTime)}, 1000)
}

const pausaVideo=()=>{
	video.pause();
	clearInterval(tiempoActual)
}