const slideshow_elements = document.querySelectorAll(".carousel");
console.log("script initialized ")
slideshow_elements.forEach((slideshow_container) => {

    const slideSpeed = Number(slideshow_container.dataset.autoplay);
   new Flickity(slideshow_container, {
        cellAlign: 'left', // Changed from center
        wrapAround: true,
        autoPlay: slideSpeed,
        pageDots: false,
        contain: true, // Ensures cells are contained within carousel
        imagesLoaded: true, // Helps with image sizing
        prevNextButtons: true,
        percentPosition: false
    })

    const thumbCarousel = new Flickity('.thumbnail-carousel', {
    asNavFor: '.main-carousel',
    cellAlign: 'center',
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    percentPosition: false,
    arrowShape: null
  });

  // Sync carousels
  mainCarousel.on('select', (index) => {
    thumbCarousel.select(index);
  });

  thumbCarousel.on('staticClick', (event, pointer, cellElement, index) => {
    mainCarousel.select(index);
  });
})


