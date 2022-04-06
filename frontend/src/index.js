import Swiper from "swiper";
import "swiper/css";

async function parseJSON(url){
    const response = await fetch(url);
    return response.json();
}

function swiperComponent(dataToRender, rendererFunction){
    return `
    <div class="swiper">
        <div class="swiper-wrapper">
        ${dataToRender.map( dataObject => rendererFunction(dataObject)).join("")}
        </div>
    </div>
    `;
}

function swiperSlideComponent ({filename, title}) {
    return `
        <div class="swiper-slide">
            <h2>${title}</h2>
            <img src="/pub/image/${filename}">
        </div>
    `;
}

async function loadEventHandel() {

    const rootElement = document.getElementById("root");
    const result = await parseJSON("/image-list");

    rootElement.insertAdjacentHTML(`beforeend`, swiperComponent(result, swiperSlideComponent));

    const swiper = new Swiper(".swiper", {
        loop: true
    });
    console.log(swiper);
}

window.addEventListener(`load`, loadEventHandel);