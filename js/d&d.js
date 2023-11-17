


function inicioTraslado ()
{
	 var imagenes=document.querySelectorAll('#cajasIma img');
     soltar1=document.getElementById('soltar1');  
     soltar2  =document.getElementById('soltar2'); 
     soltar3 = document.getElementById('soltar3'); 

    for(var i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', arrastrado, false);
}


 	soltar1.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    soltar1.addEventListener('dragover', function(e){
    e.preventDefault(); }, false)
      
    ;
    soltar1.addEventListener('drop', soltarElemento, false);

    soltar2.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar2.addEventListener('drop', soltarElemento, false);


    soltar3.addEventListener('dragenter', function(e){
        e.preventDefault(); }, false);
    soltar3.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar3.addEventListener('drop', soltarElemento, false);

}

function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

function soltarElemento (evento) {
	evento.preventDefault();
	console.log(evento)
	let id=evento.dataTransfer.getData('Text');
	let imagen=document.getElementById(id);
	imagen.style.display= 'none';
	evento.target.innerHTML='<img src="'+imagen.src+'" height="400px" width="275px">';
    contador++
	//destino.innerHTML='<img class="cajasIma" src="${id}"/>'
}


function reinicio() {
    window.location.reload();
}
inicioTraslado()
