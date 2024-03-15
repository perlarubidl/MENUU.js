fetch('menu.js')
//que hace?esta linea inicia la carga del archivo menu.json. fetch es una funcion de javaScript que facilita la realizacion de solicitudes de red,como obtener datos de un archivo  un endpoint de API.
// como funciona?fetch devuelve una promesa que,cuando resuelve,tenia acceso ala respuesta de la solicitud.Esta respuesta no es directamente  los datos del formato JSON,sino un objeto de respuesta que incluye varios detalles sobre la respuesta misma.
hen(response =>response.json())
//que hace?Esta linea toma el objecto de respuesta obtenido del fetch y utiliza el meytodo .json() para convertir el cuerpo de la respuesta en un objeto JavaScript (est asume que el cuerpo de la respuesta esta en forma JSON).
//como funciona?el metodo .json() tambien devuelve una promesa la cual se resuelve con el contenido del cuerpo en formato JSON.
Then(data=>{
    const menuContainer = document.getElementById
    ('menu-container');
    //que hace?aqui se procesan los datos JSON convertidos.se obtienen una referencia al conetenedor de menu en el html mediante geteElementByld('menu-container')y luego se itera aobre los elementos(categorias)del menu.
    data.items.forEach(category=>{
        const categoryTitle=document.createElement('h2');
        //que hace?Aqui se crea un elemento 'h2' se asigna el nombre de la categoria como su conrtnido de texto y luego se añade este titulo al contenedor del menu.
        categoryTitle.textContent=category.category;
        menuContainer.appendChild{categoryTitle};const table = document.
        createElement('table');
        //que hace?se crea un elemento para cada categoria ademas se prepara el encabezado(tablemediaton)con las columnas pertinentes.tableBody se inicializavacio que llenaria conlos elementos de la categoria.
        const tableHead = <tr> <th>foto</th>  <th> descriptcion</th><th>precio 
            </th> </tr>;
            let tableBody = '';
            //como funciona?para cada categoria en los datos,se rrealizan varios pasos:crear un titulo para la categoria se crea un elemento<h2> para el titulo de la categoria (categoricatyegory)luego se agregs al contenedor del menu.
            //crear una tabña para los elementps de esas categorias se pesara una tabla por cada categoria (primero se define el encabezado de la tabla(<tr> <th>foto</th>  <th> descriptcion</th><th>precio <th><tr>.
            category.items.forEach(item=> {
                tableBody += <tr>
                    <td>img src="${item.image}alt="${item.name}  " </td>
                    <td>{item.name}-"${item.description}  "  </td>
                    <td>${item.price} </td>
                </tr>
            }
                
            )
            
    })
        
    });

