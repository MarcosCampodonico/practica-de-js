document.getElementById('calculateBtn').addEventListener('click', calculateBMI);

function calculateBMI() {
  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');
  const resultDiv = document.getElementById('result');

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; // Convertir altura a metros
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultDiv.textContent = 'por favor ingrese datos validos.';
    resultDiv.style.color = '#f00';
    return;
  }

  const bmi = weight / (height * height);
  const bmiRounded = bmi.toFixed(2);

  let category;
  if (bmi < 18.5) {
    category = 'bajo peso';
  } else if (bmi < 25) {
    category = 'peso acorde';
  } else if (bmi < 30) {
    category = 'Exceso de peso';
  } else {
    category = 'Obeso';
  }

  resultDiv.innerHTML = 
  `Su IMC es: <span> ${bmiRounded}</span>.<br> Category: <span> ${category} </span>`;
  resultDiv.style.color = '#000';
  const resultSpan = resultDiv.querySelectorAll('span');
  resultSpan.forEach((item) => {

    if (bmi < 18.5) {
        item.style.color = 'red';
      } else if (bmi < 25) {
        item.style.color = 'rgba(0,213,255,1)';
      } else {
        item.style.color = 'red';
      }
  })
}

let botonPaciente = document.getElementById("calculateBtn");
const clientes = [];
calculateBtn.addEventListener("click", function (event){
  event.preventDefault();
  const pesoPaciente = document.getElementById("weight").value;
  const alturaPaciente = document.getElementById("height").value;
  const paciente = {};
  console.log(pesoPaciente);
  console.log(alturaPaciente);

  paciente['peso en kg']=pesoPaciente;
  //paciente.pesoPaciente=pesoPaciente;
  paciente['altura en cm']=alturaPaciente;
  //paciente.alturaPaciente=alturaPaciente;
  clientes.push(paciente);
  console.log(paciente);
  console.log(clientes);
  
})