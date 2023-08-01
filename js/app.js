import data from "./mock.js"

const slide = document.querySelector(".slide");
const listTopMovies = data.top;

let htmlTopMovies = `
    <button class="btn-slide-left"><i class='bx bx-chevron-left'></i></button>
    <button class="btn-slide-right"><i class='bx bx-chevron-right' ></i></button>
`;

const populateSlideIntoHtml = slideItem => {
    htmlTopMovies += `
        <div class="slide-item">
            <span>${slideItem.position}</span>
            <img src="${slideItem.imagePath}" alt="Filme">
        </div>`;
}

listTopMovies.forEach(populateSlideIntoHtml);
slide.innerHTML = htmlTopMovies;


const btnSlideRight = document.querySelector(".btn-slide-right");
const btnSlideLeft = document.querySelector(".btn-slide-left");

console.log(btnSlideRight);
btnSlideRight.addEventListener("click", function() {
    slide.scrollLeft += slide.offsetWidth - 500;
});

btnSlideLeft.addEventListener("click", function() {
    slide.scrollLeft -= slide.offsetWidth - 500;
});