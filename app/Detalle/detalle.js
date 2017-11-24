import layout from './../layout'
import Detalle from './modificar'

var page = require('page')
var firebase = require('firebase')
var config = require('./../config')
var templateDetalle = require('./templateDetalle')

var id

page('/detalle/:sabor', mostrarLoader, function (ctx, next) {  
  if (!firebase.apps.length) { 
    firebase.initializeApp(config) 
  }

  var db = firebase.database()

  db.ref('/listap/' + ctx.params.sabor).once('value').then(snapshot => {
    let item = snapshot.val()
    var main = document.querySelector('main')
    item.id = ctx.params.sabor
    var html =  templateDetalle(item)
    id = item.id   
    main.innerHTML = layout(html);
    var btn_elimar = document.querySelector('#borrar')
    btn_elimar.addEventListener('click', eliminar)
   
  })
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
  main.innerHTML = layout(html);
  next()
}

page('/Detalle', () => {
  var main = document.querySelector('main')
  main.innerHTML = layout(Detalle)
  var btn_actualizar = document.querySelector('#guardar')
    btn_actualizar.addEventListener('click', modificar1)   
    console.log(id)   
})

function modificar1() {
  // A post entry.

  var postData = {
    sabor: document.querySelector('#nombre1').value,
    cantidad: document.querySelector('#cantidad1').value,
    precio: document.querySelector('#precio1').value,
  };

  //let newPostKey =
  // Get a key for a new Post.
  //var newPostKey = firebase.database().ref().child('postData').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/listap/' + id] = postData;
  //updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  page.redirect('/listaP')
  return firebase.database().ref().update(updates); 
  
}




function eliminar() {
  if (!firebase.apps.length) {
  firebase.initializeApp(config)
  }

var db = firebase.database()
  
  let key  = document.getElementById('borrar').getAttribute('llave')

  var confirmar = confirm("Acepte para eliminar")

  console.log(confirmar)

  if (key!=null && confirmar == true) {
    var ref = db.ref("listap")
    ref.child(key).remove()

    page.redirect('/listaP')
  }
}