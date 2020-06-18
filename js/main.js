function toggleBurger(){
    $(".burger-menu-container").slideToggle("fast")
    $(".burger-btn").find(".top-line").toggleClass("rot-1");
    $(".burger-btn").find(".mid-line").toggleClass("dn");
    $(".burger-btn").find(".bot-line").toggleClass("rot-2");
}

function menuLinkAction(item){
    if($(item).attr("data-link")=="home"){
        $(".home-page").removeClass("go-top");
        $(".all-pages").removeClass("page-active");
        $(".page-social-container").removeClass("social-top");
    }else{

        $(".home-page").addClass("go-top").removeClass("page-active");
        $(".page-social-container").addClass("social-top");
        $(".all-pages").addClass("page-active");
        $(".content").removeClass("page-active");
        $(`.${$(item).attr("data-link")}-page`).addClass("page-active");
        $(".all-menu-item-active").removeClass("all-menu-item-active");
        $(`.${$(item).attr("data-link")}-item`).addClass("all-menu-item-active");
    }
}

function billboardSizing(){
    $(".content-page-layout").css("width",`${$(".content").eq(0)
    .width()+($(".billboard-item").eq(0).children("img").width()+
    $(".billboard-item").eq(0).children("img").width()*0.1
    )}`);
}

$(document).ready(()=>{
    billboardSizing();
})

$(window).on("mousemove",function(e){
    if($(window).width()>960){

        let y=(e.pageY/$(window).width())*30;
        let x=(e.pageX/$(window).width())*30;
        $(".main-page-stars").css("transform",`translate(-${x}px,-${y}px)`)
    }
})


$(document).on("click",".menu-link",function(){
  menuLinkAction(this);
})

$(document).on("click",".mobile-menu-item",function(){
   menuLinkAction(this);
   $(".mobile-menu-item-active").removeClass("mobile-menu-item-active");
   $(this).addClass("mobile-menu-item-active");
   toggleBurger();
})



$(document).on("click",".all-menu-item",function(){
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
            breakpoints:{
                1: {
                    direction: 'vertical',
               
                },
                760: {
                    
                    direction: 'horizontal',
                    
                }
            },
            navigation: {
                nextEl: $('.slider-2').parents(".content").find(".next-btn"),
                prevEl: $('.slider-2').parents(".content").find(".prev-btn"),
            },
            
        })
    
        slider2.on("fromEdge",function(){
           $(".down-btn").show();
           $(".up-btn").show();
        })
        // slider2.on("reachEnd",function(){
        //    $(".down-btn").hide();
        // })
        slider2.on("reachBeginning",function(){
           $(".up-btn").hide();
        })


$(document).on("click", ".project-item", function () {
    $(".popup-container").css("display","flex");
})


$(document).on("click", ".post-read-btn", function () {
    $(".popup-container").fadeIn();
})

$(document).on("click",".page-main-content",function(){
    if($(window).width()<1024){
        $(".home-page").addClass("go-top").removeClass("page-active");
        $(".all-pages").addClass("page-active");
        $(".content").removeClass("page-active");
        $(`.information-page`).addClass("page-active");
        $(".all-menu-item-active").removeClass("all-menu-item-active");
        $(`.information-item`).addClass("all-menu-item-active");

    }
})

$(document).on("click", ".popup-close-btn", function () {
    $(".popup-container").fadeOut();
})



console.time("func")
$(window).on("resize", function() {
    setTimeout(() => {
      billboardSizing();
    }, 730);
    
})
console.timeEnd("func")

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

$(".burger-btn").on("click",toggleBurger);

