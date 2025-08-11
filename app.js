// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos =[];

function agregarAmigo(amigo){

let HTMLamigo =  document.getElementById('amigo').value;

if(HTMLamigo === ""){
    alert("Por favor, inserte un nombre.");
   
}else{
       amigos.push(HTMLamigo);       
    }
limpiarCaja();
ListaAmigo();

}
//Limpiar Caja
function limpiarCaja(){
    document.querySelector('#amigo').value ='';
}

function ListaAmigo(){
//obtener elemento lista
    let lista= document.getElementById('listaAmigos');
//limpiar lista   
  lista.innerHTML= ""; 

//bucle para recorrer amigos
   for(let i=0;i<amigos.length;i++){
       //crear li
         let li = document.createElement("li");
         li.textContent= amigos[i];
         lista.appendChild(li);
         }
      
}
function sortearAmigo(){
   
    document. getElementById('listaAmigos').innerHTML='';
   
    let Resultado = document.getElementById('resultado');

    if(amigos.length===0){
     Resultado.innerHTML = "No hay nombres en la lista";
    return;
    }
    
    let Sorteo =  Math.floor(Math.random()*amigos.length);
    let AmigoSorteado = amigos[Sorteo];
    Resultado.innerHTML= `Amigo sorteado ${AmigoSorteado}`;
   
}