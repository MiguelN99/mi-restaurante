// Obtener el menú desde el backend
window.onload = () => {
    fetch('/menu')
      .then(response => response.json())
      .then(data => {
        const menuContainer = document.getElementById('menu');
        data.forEach(item => {
          const card = document.createElement('div');
          card.classList.add('col');
          card.classList.add('mb-4');  // Añadimos espacio entre las tarjetas
          card.innerHTML = `
            <div class="card">
              <img src="https://via.placeholder.com/150" class="card-img-top" alt="${item.nombre}">
              <div class="card-body">
                <h5 class="card-title">${item.nombre}</h5>
                <p class="card-text">${item.descripcion}</p>
                <p class="card-text">$${item.precio}</p>
                <a href="#" class="btn btn-primary">Agregar al pedido</a>
              </div>
            </div>
          `;
          menuContainer.appendChild(card);
        });
      });
  };
  