export function showInfo(info) {
  const p = document.createElement('p')
  p.classList.add('text-sky-400');
  p.textContent = 'Si los resultados no te convencen, prueba con algunas de estas sugerencias:'
    let cards = '';
    info.forEach(i => {
      cards += `
  <div class="card bg-primary text-primary-content">
    <div class="card-body">
      <h2 class="card-title">${i.name}</h2>
      <p>${i.type}</p>
      <div class="card-actions justify-end">
        <button class="btn">Buy Now</button>
      </div>
    </div>
  </div>
  `
    });
    $('#container-info').html(cards);
    $('#info-text').html(p)
  }