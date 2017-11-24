const Carrito_compra = 

 function agregar(){
      var ii = document.getElementById("uno").value;  
    var i = document.getElementById("dos").value;       
var i3 = document.getElementById("tres").value;   

        var r=i*i3;
                document.getElementById("row_add").onclick=function(){
        
        if(i==='0'||i3==='0')
{alert('La cantindad ni el precio pueden ser igual a 0');}

else{
var x = document.getElementById("myTable").getElementsByTagName("tr").length;
                    addRow([x,i,ii,i3,r]);}
                }
            }

            function addRow(dataArr){
                var tr=document.createElement('tr');
                var len=dataArr.length;
                for(var i=0;i<len;i++){
                    var td=document.createElement('td');
                    td.appendChild(document.createTextNode(dataArr[i]));
                    tr.appendChild(td);
                }
                document.getElementById('tbl_bdy').appendChild(tr);
             return true;  }
    function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
  
}

function deleteRow() {
 var tt=document.getElementById("t").value;
 
 if(tt==='0'||tt===''){
 alert('No puede borrar esta columna');
 
 }else{
    document.getElementById("myTable").deleteRow(tt); 
}
  };

   function getAllRows(myTable)
            {              
tabla = document.getElementById("myTable");
var total = 0;
for(var i = 1; tabla.rows[i]; i++)
total += Number(tabla.rows[i].cells[4].innerHTML);
var num = '$' + total.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
alert(num);
var t = document.getElementById("total");
t.value=num;
            }
      function borrarTodo(){      
var ii = document.getElementById("uno");
    var i = document.getElementById("dos");     
var i3 = document.getElementById("tres");
var t = document.getElementById("total"); 
ii.value="";  
i.value=""; 
i3.value="";
t.value=""; 
window.location.reload();

      };

`
    
    <form>

<h1 align="center">Carrito De Compras:</h1>
<label>
<span>Descripcion</span><input type="text" placeholder="Descripcion" id="uno"name="name"  onKeyUp="agregar()" />
</label>
<h5></h5>
<span>cantidad</span><input type="number" id="dos" placeholder="Cantidad"  name="somecode" min="0"  onkeypress="return isNumberKey(event)" onKeyUp="agregar()"/>
</label>
<label>
<h5></h5>
<span>Precio</span><input type="number" id="tres" placeholder="Precio" name="somecode" min="0"  onkeypress="return isNumberKey(event)" onKeyUp="agregar()"/>
</label>
</div>
<h5></h5>
<span>Total:</span><input type="text" id="total" placeholder="Total" name="somecode" min="0"/>
<p></p>


<input type="button" id="row_add" value="Agregar Fila" onclick="agregar()" onClick="agregar()" onClick="agregar()"/>
      <input type="button" id="delete" value="Borrar" onclick="deleteRow()"/>
     <span>columna</span> <input type="number2" id="t" name="somecode" min="0"  onkeypress="return isNumberKey(event)" onc="agregar()"/>
       <input type="button" id="calcular" value="calcular" onclick="getAllRows()" />
         <input type="button" id="todo" value="Borrar Todo" onClick="borrarTodo()" />
        <table class="imagetable" width="1230" id="myTable">
            <thead>
                <tr>
         <th>Numero</th>
                    <th>Cantidad</th>
                    <th>Descripcion</th>                  
                    <th>Precio</th>            
                    <th>total</th>
                </tr>
            </thead>
            <tbody id="tbl_bdy"> 
            </tbody>
        </table>
    <div id="fb-root"></div>
</form>


`





export default Carrito_compra