$(window).on("mousemove",function(e){
    let y=(e.pageY/$(window).width())*30;
    let x=(e.pageX/$(window).width())*30;
    $(".main-page-stars").css("transform",`translate(-${x}px,-${y}px)`)
})


$(document).on("click",".menu-link",function(){
    console.log(`${$(this).attr("data-link")}-page`);
    
    $(".home-page").addClass("go-top").removeClass("page-active");
    $(".page-social-container").addClass("social-top");
    $(".all-pages").addClass("page-active");
    $(".content").removeClass("page-active");
    $(`.${$(this).attr("data-link")}-page`).addClass("page-active");
    $(`.${$(this).attr("data-link")}-page`).addClass("page-active");
    $(".all-menu-item-active").removeClass("all-menu-item-active");
    $(`.${$(this).attr("data-link")}-item`).addClass("all-menu-item-active");
})



$(document).on("click",".all-menu-item",function(){
    console.log(`${$(this).attr("data-link")}-page`);
    
    $(".all-menu-item-active").removeClass("all-menu-item-active");
    $(this).addClass("all-menu-item-active");
    if($(this).attr("data-link")=="home"){
        $(".home-page").removeClass("go-top");
        $(".all-pages").removeClass("page-active");
        $(".page-social-container").removeClass("social-top");
    }else{

        $(".content").removeClass("page-active");
        $(`.${$(this).attr("data-link")}-page`).addClass("page-active");
    }
})


setTimeout(()=>{
    var slider=new Swiper('.slider-1',{
        mousewheel: true,
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 16,
        pagination: {
            el:'.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: $('.slider-1').parents(".content").find(".next-btn"),
            prevEl: $('.slider-1').parents(".content").find(".prev-btn"),
        },
    })
    var slider2=new Swiper('.slider-2',{
        mousewheel: true,
        keyboard: true,
        slidesPerView: 1,
        spaceBetween: 16,
        pagination: {
            el:'.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: $('.slider-2').parents(".content").find(".next-btn"),
            prevEl: $('.slider-2').parents(".content").find(".prev-btn"),
        },
    })
})


$(document).on("click", ".project-item", function () {
    $(".popup-container").css("display","flex");
})


$(document).on("click", ".post-read-btn", function () {
    $(".popup-container").fadeIn();
})


$(document).on("click", ".popup-close-btn", function () {
    $(".popup-container").fadeOut();
})


$(".content-page-layout").css("width",`${$(".content")
.width()+($(".billboard-item").find("img").width()+50)}`);


$(window).on("resize", function() {
    $(".content-page-layout").css("width",`${$(".content")
    .width()+($(".billboard-item").find("img").width()+50)}`);
})

// $(".planet-link").on("mouseover", function() {
//     $(".page-mid-img").removeClass("planet-pulse");
// })
// $(".planet-link").on("mouseout", function() {
//     $(".page-mid-img").addClass("planet-pulse");
// })

$(".video-play-button").on("click", function(){
    $(".video-playing-popup").fadeIn();
    $(".video-playing-popup").find("video")[0].play();
})

$(".video-playing-popup").find("video").on("ended", function(){
    $(".video-play-button-container").fadeOut();
    $(".video-ended-container").css("display","flex");
    $(".video-playing-popup").fadeOut();

    
})

$(".close-vid-btn").on("click", function(){
    $(".video-playing-popup").fadeOut();
    $(".video-playing-popup").find("video")[0].pause();
})