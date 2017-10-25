import page from 'page'
import layout from './layout'
import homepage from './homepage'
import contacto from './contacto'
import acercade from './acercade'
import Productos from './Productos'
import listaP from './listaP'

const main = document.querySelector('main')

page('/', () => {
	main.innerHTML = layout(homepage)
})

page('/contacto', () => {
	main.innerHTML = layout(contacto)
})

page('/acercade', () => {
	main.innerHTML = layout(acercade)
})

page('/Productos', () => {
	main.innerHTML = layout(Productos)
})

page('/listaP', () => {
	main.innerHTML = layout(listaP)
})