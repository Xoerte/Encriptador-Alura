
var boton1 = document.getElementById('bto-1');
var boton2 = document.getElementById("bto-2");
var span = document.getElementById("text")
var boton3 = document.getElementById("copiar")
document.getElementById("copiar").style.display = "none"
document.getElementById("text").style.display = "none"
//var span = document.querySelector("textarea");

function mayusculas(e) {
    e.value = e.value.toLowerCase();
}

boton1.addEventListener("click", function() {
var usuario = document.getElementById("tex1").value.toLowerCase() 
var codificado = usuario.replace(/e/igm,"enter");
 codificado = codificado.replace(/i/igm,"imes");
 codificado = codificado.replace(/a/igm,"ai");
 codificado = codificado.replace(/o/igm,"ober");
 codificado = codificado.replace(/u/igm,"ufat");
span.innerHTML = codificado
document.getElementById("copiar").style.display = "initial"
document.getElementById("text").style.display = "initial"
document.getElementById("img1").style.display = "none"
document.getElementById("h1").style.display = "none"
document.querySelector("p").style.display = "none"
})

boton2.addEventListener("click", function() {
var usuario = document.getElementById("tex1").value.toLowerCase() 
var codificado = usuario.replace(/enter/igm,"e");
 codificado = codificado.replace(/imes/igm,"i");
 codificado = codificado.replace(/ai/igm,"a");
 codificado = codificado.replace(/ober/igm,"o");
 codificado = codificado.replace(/ufat/igm,"u");
span.innerHTML = codificado
document.getElementById("copiar").style.display = "initial"
document.getElementById("text").style.display = "initial"
document.getElementById("img1").style.display = "none"
document.getElementById("h1").style.display = "none"
document.querySelector("p").style.display = "none"
})

boton3.addEventListener("click",function() {
navigator.clipboard.writeText(span.innerHTML)
alert("El texto se copio a su Portapapeles")
//document.getElementById("text").value.focus()
//document.execCommand("selectAll");
//document.execCommand("cut")
//document.execCommand("copy");
})

//boton3.addEventListener("click",function() {
//var contenido = document.getElementById("span")
//contenido.select()
//document.execCommand("copy")
//alert("Copiado")
//})

document.getElementById("tex1").addEventListener("keypress",verificar);
	
	function verificar(e) {
 
		// comprobamos con una expresion regular que el caracter pulsado sea
		// una letra, numero o un espacio
		if(e.key.match(/[a-z0-9ñçáéíóú\s]/i)===null) {
 
			// Si la tecla pulsada no es la correcta,se elimina
			e.preventDefault();
		}
	}
	


