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
            $(".page-social-container").removeClass("social-mob-pages");
    }else{
        $(".page-social-container").addClass("social-mob-pages");
        $(".home-page").addClass("go-top").removeClass("page-active");
        $(".page-social-container").addClass("social-top");
        $(".all-pages").addClass("page-active");
        $(".content").removeClass("page-active");
        $(`.${$(item).attr("data-link")}-page`).addClass("page-active");
        $(".all-menu-item-active").removeClass("all-menu-item-active");
        $(".all-pages-menu-container").find(`.${$(item).attr("data-link")}-item`)
        .addClass("all-menu-item-active");
        $(".mobile-menu-item-active").removeClass("mobile-menu-item-active");
        $(".mobile-menu").find(`.${$(item).attr("data-link")}-item`)
        .addClass("mobile-menu-item-active");
    }
}

function billboardSizing(){
    let billSize=$(".billboard-item").eq(0).find("img").width();
    if($(window).width()<=570){        
        $(".content-page-layout").css("width","100%");
    }else{

        $(".content-page-layout").css("width",`${$(".content").eq(0)
        .width()+(billSize+billSize/2)}`);
    }
}

function sortSlides() {
    
    let slidesArr=[[]];
    let container=$(".projects-container");
    let index=0;
    let slidesCount=$(window).width() <= 760 ? 4 : 8;
    let sliderWrapper=$(".slider-2").find(".swiper-wrapper");

    if(container.eq(0).find(".project-item").length == slidesCount) return;

    for (let i = 0; i < container.length; i++) {
        for (let j = 0; j < container.eq(i).find(".project-item").length; j++){
            slidesArr[index].push(container.eq(i).find(".project-item").eq(j));
            if (slidesArr[index].length == slidesCount) {
                if (index < container.find(".project-item").length/slidesCount-1) {
                    index++;
                    slidesArr.push([]);
                }
            }
        }
    }

    sliderWrapper.find(".swiper-slide").remove();

    for (let i = 0; i<slidesArr.length; i++) {
        $(
            `
            <div class="swiper-slide">
            <div class="projects-container">
            </div>
            </div>
            `
        ).appendTo(sliderWrapper);
        for (let j = 0; j < slidesArr[i].length; j++) {
            $(".projects-container").eq(i).append(slidesArr[i][j][0]);
        }
    }

    slider2.update();
    console.timeEnd("slide")
}

function prodPage(){
    $(".production-second-page").toggleClass("prod-go-right");
    $(".production-first-page").toggleClass("prod-go-left");
}

$(document).ready(()=>{
    billboardSizing();
    sortSlides();
});




$(document).on("click",".menu-link",function(){
  menuLinkAction(this);
})

$(document).on("click",".mobile-menu-item",function(){
   menuLinkAction(this);
   $(".mobile-menu-item-active").removeClass("mobile-menu-item-active");
   $(this).addClass("mobile-menu-item-active");
   toggleBurger();
})

$(document).on("click", ".page-logo", function(){
    menuLinkAction(this);
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
            updateOnWindowResize:true,
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
            updateOnWindowResize:true,
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
      
slider2.on("reachBeginning",function(){
    $(".up-btn").hide();
})

$(document).on("click", ".project-item", function () {
    $(".popup-container").fadeIn();
})
$(document).on("click", ".service-item", function(){
    $(".popup-container").fadeIn();

})
$(document).on("click", ".post-read-btn", function () {
    $(".popup-container").fadeIn();
})

$(document).on("click", ".popup-close-btn", function () {
    $(".popup-container").fadeOut();
})

$(document).on("click", ".go-back-btn", function() {

})

$(document).on("click",".production-page-item", function() {
    if($(this).hasClass("prod-category-item") || $(this).hasClass("go-back-btn")){
       prodPage();
    }else{
        $(".popup-container").fadeIn();
    }
})
$(document).on("click", ".go-back-btn", prodPage)

$(document).on("click",".page-main-content",function(){
    if($(window).width()<1024){
       menuLinkAction(".info-link");
    }
})

$(document).on("click",".contacts-scroll-btn > img", function() {
    // $(".contacts-scroll-btn").toggleClass("scroll-btn-hide");
    $(this).hasClass("gotop")? 
    $(".contacts-wrapper")[0].scrollTop=-$(".contacts-wrapper")[0].scrollHeight: 
    $(".contacts-wrapper")[0].scrollTop=$(".contacts-wrapper")[0].scrollHeight;
})

$(".contacts-wrapper").on("scroll", function() {
    
    if($(this)[0].scrollTop<=20){
        $(".contacts-up-btn-container").addClass("scroll-btn-hide");
        $(".contacts-down-btn-container").removeClass("scroll-btn-hide");
    }else if(($(".contacts-wrapper")[0].scrollHeight - $(".contacts-wrapper").height()-20) <= $(this)[0].scrollTop){
        $(".contacts-up-btn-container").removeClass("scroll-btn-hide");
        $(".contacts-down-btn-container").addClass("scroll-btn-hide");
    }else{
        $(".scroll-btn-hide").removeClass("scroll-btn-hide");
    }
})

$(window).on("resize", function() {

    sortSlides();

    setTimeout(() => {
      billboardSizing();
    }, 730);
   
})

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

let adress;
$.ajax(
	{
		url:`https://geocode-maps.yandex.ru/1.x/?apikey=cf165b59-38ed-4f95-96cd-22a149cbb5b3&format=json&geocode=Moscow`,
		success:function(data){
				adress=data.response.GeoObjectCollection
				.featureMember[0].GeoObject.Point.pos.split(" ").reverse();
				ymaps.ready(init);
		}
		
	}
	)


function init () {
	
    myMap = new ymaps.Map('contact-map', {
        center: adress, 
        zoom: 16,
        controls:[]
    }, {
        searchControlProvider: 'yandex#search'
    });
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
     
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark.png',
        iconImageSize: [50, 62],
        iconImageOffset: [-19, -65]
    })
    myMap.geoObjects
    .add(myPlacemark);
};

(function(){
    console.time("func")
    var $stars_block = $(".stars-block");

        var stars_count=$(window).width()<760 ? 300 : 300;
		$stars_block.each(function () {
			for (var i = 0; i < stars_count; i++) {
				var s = i >= stars_count-40?r(5,6):r(2,4);
                var c = r(1,3);
                
                    var pos_arr = [
                        {
                            top : r(-1, 50),
                            left : r(-1, 12.5)
                        },
                        {
                            top : r(-1, 50),
                            left : r(13, 25)
                        },
                        {
                            top : r(-1, 50),
                            left : r(13, 25)
                        },
                        {
                            top : r(-1, 50),
                            left : r(26, 50)
                        },
                        {
                            top : r(-1, 50),
                            left : r(26, 50)
                        },
                        {
                            top : r(-1, 50),
                            left : r(26, 50)
                        },
                        {
                            top : r(-1, 50),
                            left : r(51, 75)
                        },
                        {
                            top : r(-1, 50),
                            left : r(51, 75)
                        },
                        {
                            top : r(-1, 50),
                            left : r(76, 100)
                        },
                        {
                            top : r(51, 101),
                            left : r(51, 101)
                        },
                        {
                            top : r(51, 101),
                            left : r(51, 101)
                        },
                        {
                            top : r(51, 101),
                            left : r(51, 101)
                        },
                        {
                            top : r(51, 101),
                            left : r(51, 101)
                        },
                        {
                            top : r(51, 101),
                            left : r(0, 50)
                        },
                    ];
                
             

                var index = r(0, pos_arr.length - 1);

                var top = pos_arr[index].top;
                var left = pos_arr[index].left;

				$(this).append('<div class="star star-'+c+'" style="animation-duration:'+r(10, 20)+'s; animation-delay:'+r(0, 800)+'ms; top:'+top+'%; left:'+left+'%;width:'+s+'px;height:'+s+'px;" />');
			}
		});

		function r(min, max) {
            return Math.floor(Math.random() * (max + 1 - min)) + min;
        }
        console.timeEnd("func")
    
})();