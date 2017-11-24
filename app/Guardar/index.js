var page = require('page')
var firebase = require('firebase')
var config = require('./../config')
import layout from './../layout'

if (!firebase.apps.length) { 
	firebase.initializeApp(config) 
}

var db = firebase.database()

page('/Guardar', () => {
	var main = document.querySelector('main')

  main.innerHTML = layout(formTemplate)
  var guardarBtn = document.querySelector('#guardar')
  guardarBtn.addEventListener('click', guardar)

   var inputFile = document.getElementById('file');
   inputFile.addEventListener('change', seleccionarImagen, false);
})

var formTemplate = `  
<div>
</div>

<div class=" center-align row">
    <form class="col s12">
      <div class="row">
              <h4 class="center-align">Almacenar nuevo Producto</h4>

        <div class="input-field col s8">

          <input placeholder="Nombre vino" id="nombre" type="text" class="validate">
          <label for="nombre">Nombre</label>
        </div>
        
        <div class="col s12">
        <div class="input-field col s8">
        <input placeholder="Cantidad Disponible" id="cantidad" type="text" class="validate">
        <label for="cantidad">Cantidad</label>
      </div>
      <div class="input-field col s8">
      <input placeholder="Precio" id="precio" type="text" class="validate">
      <label for="precio">Precio</label>
    </div>
        <div class="col s8">
          <div class="file-field input-field">
            <div class="btn">
                <span>Imagen</span>
                <input type="file" id="file">
            </div>
             <div class="file-path-wrapper">
                <input class="file-path validate" type="text">
              </div>
            </div>
          </div>
      </div>
      <div class="col s8">
      <a id="guardar" class="waves-effect waves-light btn">Guardar</a>
    </div>
      </form>
  </div>
  </div>
`

var fileSelected = null

function guardar (e)  {
	e.preventDefault()

	var storageRef = firebase.storage().ref()
  var thisRef = storageRef.child(fileSelected.name);

	thisRef.put(fileSelected)
	.then((snapshot) => {
 	 	return snapshot.downloadURL
	})
	.then(imgURL => {

		var ref = db.ref("listap")
		ref.push({
			sabor: document.querySelector('#nombre').value,
			cantidad: document.querySelector('#cantidad').value,
			precio: document.querySelector('#precio').value,
			avatar: imgURL
		})

		page.redirect('/listaP')
	})
	.catch(err => console.error(err))
}

function seleccionarImagen (e) {
	var target = e.target
  fileSelected = target.files[0]
}