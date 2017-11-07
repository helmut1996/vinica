const templatelistaP = datos => {
  let rows = "";
  let countRow = 0;
  let keys = Object.keys(datos);

  keys.map(key => {
    let item = datos[key];
    rows += `
     <tr>
      <td>${countRow++}</td>
      <td><a href="/detalle/${key}">${item.sabor} </a></td>
      <td>${item.cantidad}</td>
      <td>${item.precio}$</td>
    </tr>
    `;
  });

  let table = `
  <table class="striped">
    <thead>
      <tr>
        <th>Numeracion</th>
        <th>Vinos</th>
        <th>Cantidad</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
  </table>`;

  let card = `
  <div class="row">
    <div class="col s12">
      <div class="card">
        <div class="card-content">
          <span class="card-title">Lista de datos</span>
          ${table}
        </div>
      </div>
    </div>
  </div>`;

  return card;
};

module.exports =  templatelistaP;
