export function showResults(results) {
    let cards = '';
    results.forEach(result => {
      const videoUrl = result.yUrl; // Aquí asumo que cada 'element' tiene una propiedad 'yUrl'
      const embedUrl = videoUrl.replace("watch?v=", "embed/");  
      cards += `
  <div class="card card-compact bg-base-100 shadow-xl mt-3">
    <div class="card-body">
      <h2 class="card-title">${result.name}</h2>
      <iframe width="420" height="315"
              src="${embedUrl}"
              class="lazyload"
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
      </iframe>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" onclick="handleClick('${result.name}')">Similar</button>
      </div>
    </div>
  </div>`
    });
    $('#results-container').html(cards);
  }
 