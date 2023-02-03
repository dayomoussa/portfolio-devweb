const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: { smooth: true},
    smartphone: { smooth: true}
});

//BODY COLOR
scroll.on('scroll', () => {
    if(document.querySelector(".is-inview#color")){
        document.body.style.background = "#000101";
        document.body.style.color = "#fefeff";

    } else {
        document.body.style.background = "#fefeff";
        document.body.style.color = "#000101";


    }
})