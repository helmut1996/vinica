var page = require('page')
var firebase = require('firebase')
var config = {apiKey: "AIzaSyBfeASwjZmqj2rp2NWdYEg-c63pi9YPXDk",
authDomain: "vinica-1ebf7.firebaseapp.com",
databaseURL: "https://vinica-1ebf7.firebaseio.com",
projectId: "vinica-1ebf7",
storageBucket: "vinica-1ebf7.appspot.com",
messagingSenderId: "862490437320"
};


page('/listaP', mostrarLoader, function () {
	var main = document.querySelector('main')
	
if (!firebase.apps.length) { 
	firebase.initializeApp(config) 
}

var db = firebase.database()

function obtenerDatos (datos) {
	var arrayDatos = datos.val()

	var main = document.querySelector('main')
	var arrayHTML = ''
	for (var i = 0; i < arrayDatos.length; i++) {
		arrayHTML += `
		<li>
			${arrayDatos[i].cantidad} - ${arrayDatos[i].precio} - ${arrayDatos[i].sabor}
		</li>
		`
	}

	var html = `
		<h1>Lista de datos</h1>
		<nav>
			<ul>
				${arrayHTML}
			</ul>
		</nav>
	`
	main.innerHTML = html
}

db.ref('listap').once('value').then(obtenerDatos)
})
function mostrarLoader (ctx, next) {
	var html = `
	  <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>`
  var main = document.querySelector('main')
  main.innerHTML = html
  next()
}


