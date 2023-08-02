const mostrarProductos = () => {
  const contenedor = document.getElementById("productos-contenedor");

  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.className = `col`;
    div.setAttribute("data-aos", "zoom-out");
    div.innerHTML = `
        <div class= "card h-100" >
            <img class="scale_hover" "card-img-top" src=${producto.img}>
            <div class="card-body">
                <h4 class="card-title" "card_title_font">${producto.title}</h4>
                <p class="card-text" "card_font">${producto.text}</p>
            </div>
            <a class="btn btn_style_1" id="${producto.id}">Agregar al carrito</a>
            </div>
            `;
            contenedor.appendChild(div);
        });
    };
    
    //mostrarProductos();