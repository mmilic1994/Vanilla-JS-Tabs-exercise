document.addEventListener("DOMContentLoaded", () => {
    let citiesImgSrc = [
        {london: "https://image.dnevnik.hr/media/images/920x695/Jan2020/61816908-london-engleska.jpg"},
        {paris: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg"},
        {tokyo: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"},
    ]
    let imageNode = document.querySelector(".about-img img");
    let tabButtonsNode = document.querySelector(".btn-container");
    let tabButtons = document.querySelectorAll(".tab-btn");
    let tabContent = document.querySelectorAll(".content");
    imageNode.src = citiesImgSrc[0].london

    tabButtonsNode.addEventListener("click", (e)=> {
        let currentCity = e.target.getAttribute("data-id");
        for(let i = 0; i < tabButtons.length; i++) {
            if(tabButtons[i].classList.contains("active")) {
                tabButtons[i].classList.remove("active");
            }
            if(tabContent[i].classList.contains("active")) {
                tabContent[i].classList.remove("active");      
            }
            if(tabContent[i].id == e.target.getAttribute("data-id")) {
                tabContent[i].classList.add("active");
            }
        }
        e.target.classList.add("active");
        for(let j = 0; j < citiesImgSrc.length; j++) {
            if(citiesImgSrc[j][currentCity] !== undefined) {
                imageNode.src = citiesImgSrc[j][currentCity];
            }
        }
    })
})