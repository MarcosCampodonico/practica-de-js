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


localStorage.setItem("nombre","marcos");
localStorage.setItem("apellido","campodonico");
let n1 = prompt("ingrese el producto")
let n2 = prompt("ingrese el siguiente producto")
const productos = [
    {id: 1, producto: n1},
    {id: 2, producto: n2},
 ,
]
localStorage.setItem("carrito", JSON.stringify(productos));