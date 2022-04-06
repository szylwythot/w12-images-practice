async function parseJSON(url){
    const response = await fetch(url);
    return response.json();
}

function swiperComponent(){
    return `
    <div class="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
        </div>
    </div>
    `;
}

async function loadEventHandel() {
    console.log("Page is loaded.");
    const rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML(`beforeend`, swiperComponent());

    const result = await parseJSON("/image-list");
}

window.addEventListener(`load`, loadEventHandel);