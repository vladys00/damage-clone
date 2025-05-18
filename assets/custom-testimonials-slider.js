const slideshow_elements = document.querySelectorAll(".carousel");
console.log("script initialized ")
slideshow_elements.forEach((slideshow_container) => {

    const slideSpeed = Number(slideshow_container.dataset.autoplay);
   new Flickity(slideshow_container, {
        cellAlign: "left",
        wrapAround: true,
        autoPlay: slideSpeed,
        fullscreen: true,
        pageDots: false,
    })
})
