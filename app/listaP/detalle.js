var page from 'page'
var firebase = require('firebase')
var config from './../config'
var templateDetalle = require('./templateDetalle')

page('/listap/:sabor', mostrarLoader, function (ctx, next) {  
  if (!firebase.apps.length) { 
    firebase.initializeApp(config) 
  }

  var db = firebase.database()

  db.ref('/listap/' + ctx.params.sabor).once('value').then(snapshot => {
    let item = snapshot.val()
    var main = document.querySelector('main')
    item.id = ctx.params.sabor
    var html =  templateDetalle(item)
    
    main.innerHTML = html
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
  main.innerHTML = html
  next()
}