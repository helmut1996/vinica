import menu from './menu'

const layout = children => `
	${menu} 
	<div class="container">
		${children}
	</div>
	`

export default layout