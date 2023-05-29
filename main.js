let boton =document.getElementById("boton")
let nombre=document.getElementById("username")

nombre.addEventListener("input", ()=>{
    if(!nombre.value.includes("@")){
        nombre.className="colorfondo";
    }else{
        nombre.className ="blanco";
    }
});


