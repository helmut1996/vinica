const templateDetalle = (vinica) => {
  return `
      <div class="row">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-content">
              <span class="card-title">${vinica.sabor}</span>
              ${vinica.avatar
                ? ` 
                  <figure>
                    <img id="img" src=${vinica.avatar}/>
                  </figure>`
                : ""}
              
              <p><strong>Nombre :</strong> ${vinica.sabor} </p>
              <p><strong>Cantidad Disponible:</strong> ${vinica.cantidad}</p>
              <p><strong>Precio:</strong>${vinica.precio}C$ </p>
              <p><strong>Id:</strong>${vinica.id}C$ </p>
            </div>
          </div>
        </div>
      </div>


<a class="waves-effect waves-light btn-large" id="borrar" llave="${vinica.id}">Borrar</a><br><br>
<a href="/Detalle" class="waves-effect waves-light btn-large">Modificar</a> <br><br>
<a href="/carrito"><i class="medium material-icons">&#xE8CC;</i></a>
  
	`
  
};

module.exports = templateDetalle;
