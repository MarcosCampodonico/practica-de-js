let boton =document.getElementById("boton")
let nombre=document.getElementById("cuadro")

 nombre.addEventListener("input", ()=>{
     if(!nombre.value.includes("@")){
         nombre.className="colorfondo";
     }else{
         nombre.className ="blanco";
     }
});
boton.addEventListener("click", ()=>{
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Se ha logueado con exito',
        showConfirmButton: false,
        timer: 1500
        })
    window.location.href="masacorporal.html"
});

 boton.addEventListener("mouseenter", ()=>{
     boton.style.background = "red"
})
 boton.addEventListener("mouseleave", ()=>{
     boton.style.background = "purple"
});

let formulario = document.getElementById("form");
const clientes = [];
form.addEventListener('submit', function (event){
    event.preventDefault();
    const nombre = document.getElementById('cuadro').value;
    const cliente = {};
    console.log(nombre);

    cliente['nombre']=nombre;
    cliente.nombre=nombre;
    clientes.push(cliente);
    console.log(cliente);
    console.log(clientes);
    form.reset();
})

