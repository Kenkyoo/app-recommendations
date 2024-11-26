export function slider(array) {
    let li = '';
    array.forEach(element => {
        const videoUrl = element.yUrl; // Aquí asumo que cada 'element' tiene una propiedad 'yUrl'
        const embedUrl = videoUrl.replace("watch?v=", "embed/");    
        li += `
        <li class="glide__slide">
            <iframe width="420" height="315"
              src="${embedUrl}"
              class="lazyload"
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
        </li>
        `;
    });
    $('#glide-ul').html(li);
    new Glide('.glide').mount();
}
