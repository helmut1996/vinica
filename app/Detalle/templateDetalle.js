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
                    <img src=${vinica.avatar}/>
                  </figure>`
                : ""}
              
              <p><strong>Id:</strong> ${vinica.cantidad}</p>
              <p><strong>Nombre completo:</strong> ${vinica.sabor} ${vinica.precio}</p>
            </div>
          </div>
        </div>
      </div>
	`;
};

module.exports = templateDetalle;
