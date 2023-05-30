let boton =document.getElementById("boton")
let nombre=document.getElementById("cuadro")

nombre.addEventListener("input", ()=>{
    console.log(nombre.value)
    if(!nombre.value.includes("@")){
        nombre.className="colorfondo";
    }else{
        nombre.className ="blanco";
    }
});
boton.addEventListener("click", ()=>{
    alert(`Bienvenido`)
})

boton.addEventListener("mouseenter", ()=>{
    boton.style.background = "red"
})
boton.addEventListener("mouseleave", ()=>{
    boton.style.background = "purple"
})
