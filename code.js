/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let nombre = prompt('Ingresa tu nombre ')
  let anioNacimiento = prompt('Ingresa tu año de nacimiento')
  let ciudad = prompt('Ingresa tu ciudad')
  let interesEnJS = confirm('¿Te interesa JavaScript?')
  let anioCorriente = new Date().getFullYear();

  datosPersona.nombre = nombre;
  datosPersona.edad = anioCorriente - parseInt(anioNacimiento);
  datosPersona.ciudad = ciudad;
  datosPersona.interesPorJs = interesEnJS ? 'Sí' : 'No'

  return datosPersona;
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.querySelector('#nombre').innerText = datosPersona.nombre;
  document.querySelector('#edad').innerText = datosPersona.edad;
  document.querySelector('#ciudad').innerText = datosPersona.ciudad;
  document.querySelector('#javascript').innerText = datosPersona.interesPorJs;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let materiasListado = document.querySelector('#fila');
  materiasListado.innerHTML = '';
  listado.forEach( el => {
    materiasListado.innerHTML += `
    <div class="caja">
      <img src="${el.imgUrl}" alt="${el.lenguajes}"/>
      <p>${el.lenguajes}</p>
      <p>${el.bimestre}</p>
    </div>`
  })
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  document.querySelector('#sitio').classList.toggle('dark')
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
window.addEventListener('keydown', (e)=>{
  if(e.key === 'f' || e.key === 'F')
    document.querySelector('#sobre-mi').classList.remove('oculto')
})
