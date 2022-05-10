var textoAEncriptar = document.getElementById('textoAEncriptar');

var textoCopiarEncriptado = false;
var textoCopiarDesencriptado = false;

//Desactivar area de texto y ocultar botones
document.getElementById("textoEncriptado_Desencriptado").disabled = true; 

document.getElementById("btnCopiar").style.display = "none";


//Desaparecer texto inicial

textoAEncriptar.addEventListener('focus', function(){
    if (textoAEncriptar.value == "Ingrese el texto aqui") {

        textoAEncriptar.value = "";
    }

    if (document.getElementById("textoEncriptado_Desencriptado").value == "") {
        document.getElementById("cajaSinTexto").style.display = "block";
        document.getElementById("btnCopiar").style.display = "none";

    }
});

function encriptar() {
    //Desactivando / activando textarea y botones
    
    document.getElementById("cajaSinTexto").style.display = "none";
    document.getElementById("btnCopiar").style.display = "block";
    
    // i = una sola g = toda una linea m = multiples lineas

    var textoAEncriptar = document.getElementById("textoAEncriptar").value;

    
    textoAEncriptar = textoAEncriptar.replace(/e/g , "enter");
    textoAEncriptar = textoAEncriptar.replace(/i/g , "imes");
    textoAEncriptar = textoAEncriptar.replace(/a/g , "ai");
    textoAEncriptar = textoAEncriptar.replace(/o/g , "ober");
    textoAEncriptar = textoAEncriptar.replace(/u/g , "ufat"); 


    document.getElementById("textoEncriptado_Desencriptado").value = textoAEncriptar;
    textoCopiarEncriptado = true;

}

function desencriptar() {
    //Desactivando / activando textarea y botones

    document.getElementById("cajaSinTexto").style.display = "none";
    document.getElementById("btnCopiar").style.display = "block";

    //Desencriptando el texto

    var textoADesencriptar = document.getElementById("textoAEncriptar").value;

    textoADesencriptar = textoADesencriptar.replace(/ai/g , "a");
    textoADesencriptar = textoADesencriptar.replace(/enter/g , "e");
    textoADesencriptar = textoADesencriptar.replace(/imes/g , "i");
    textoADesencriptar = textoADesencriptar.replace(/ober/g , "o");
    textoADesencriptar = textoADesencriptar.replace(/ufat/g , "u"); 

    document.getElementById("textoEncriptado_Desencriptado").value = textoADesencriptar;

}

function copiarTexto() {
    var textoCopiado = document.getElementById("textoEncriptado_Desencriptado").value;

    navigator.clipboard.writeText(textoCopiado).then(()=>{
        alert("copiado")
    })

    .catch(err => {
        alert("No es posible copiar");
    })
}