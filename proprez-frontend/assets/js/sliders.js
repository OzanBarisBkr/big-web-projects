$(function(){

    var referencesSwiper = new Swiper(".references-bottom", {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
          delay: 0, 
        },
        speed: 1600,
        loop: true,
        breakpoints: {
          390: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
          1365: {
            slidesPerView: 5,
          },
        },
      });

      var referencesContainerBottom = document.querySelector(".references-bottom");
      referencesContainerBottom.addEventListener("mouseenter", function () {
        referencesSwiper.autoplay.stop();
      });
      referencesContainerBottom.addEventListener("mouseleave", function () {
        referencesSwiper.autoplay.start();
      });


      $('.references-inside.top-slider').slick({
        arrows:false,
        dots: false,
        infinite: true,
        speed: 1600,
        autoplay:true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover:true,
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: false,
        responsive: [
          {
            breakpoint: 1365,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 390,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
      });
// ----------------------------


      $('#ourServicesHome .services-slider').slick({
        arrows:true,
        prevArrow: $('#ourServicesHome .prev-arrow'),
        nextArrow: $('#ourServicesHome .next-arrow'),
        dots: false,
        infinite: true,
        speed: 1600,
        autoplay:true,
        autoplaySpeed: 2000,
        pauseOnHover:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        
      });


// ----------------------------
      $('#home-blog .blog-slider').slick({
        arrows:true,
        prevArrow: $('#home-blog .prev-arrow'),
        nextArrow: $('#home-blog .next-arrow'),
        dots: false,
        infinite: true,
        speed: 1600,
        autoplay:true,
        autoplaySpeed: 2000,
        pauseOnHover:true,
        rows: 2,
        rowSpacing: '20px',
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        responsive: [
          {
              breakpoint: 1200,
              settings: {
                rows: 1,
                slidesToShow: 1,
              }
          },
      ]
      });

      $('#home-vlog .vlog-slider').slick({
        arrows:true,
        prevArrow: $('#home-vlog .prev-arrow'),
        nextArrow: $('#home-vlog .next-arrow'),
        dots: false,
        infinite: true,
        speed: 1600,
        autoplay:true,
        autoplaySpeed: 2000,
        pauseOnHover:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        responsive:[
            {
              breakpoint: 1365,
              settings: {
                slidesToShow: 2,
              }
          },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              }
          },
        ]
        
      });


// ----------------------------

      var footerTop = new Swiper(".program-logos", {
        slidesPerView: 2,
        spaceBetween: 0,
        autoplay: {
          delay: 0, 
        },
        speed: 1600,
        loop: true,
        breakpoints: {
          390: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 6,
          },
          1200: {
            slidesPerView: 10,
          },
          1367: {
            slidesPerView: 15,
          },
        },
      });
      var footerTopSlider = document.querySelector(".program-logos");
      footerTopSlider.addEventListener("mouseenter", function () {
        footerTop.autoplay.stop();
      });
      footerTopSlider.addEventListener("mouseleave", function () {
        footerTop.autoplay.start();
      });

      // ----------------------------
      const myDualSlider = document.querySelectorAll('.multi-slider');

      for (i = 0; i < myDualSlider.length; i++) {

          myDualSlider[i].classList.add('dual-start-' + i);

          // mySliderPrev[i].classList.add('slider-prev-' + i);
          // mySliderNext[i].classList.add('slider-next-' + i);
          var dualSwiper = new Swiper(".dual-start-" +i, {
            slidesPerView: 1,
            spaceBetween: 0,
            autoplay: {
              delay: 0, 
            },
            speed: 1600,
            loop: true,
            // navigation: {
            //   nextEl: '.slider-next-' +i,
            //   prevEl: '.slider-prev-' +i,
            // },
            breakpoints: {
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              
            },
          });

          myDualSlider[i].addEventListener("mouseenter", function () {
            dualSwiper.autoplay.stop();
          });
          myDualSlider[i].addEventListener("mouseleave", function () {
            dualSwiper.autoplay.start();
          });

        };
         
         
      

      
      
      

    // extra slider settings  
    // -----------------------------------

    $('#home-blog .blog-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
      
      $('.slick-progress')
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );
      
    });

    // -----------------------------------

    

    // -----------------------------------


    function mobileOnlySlider($slidername, $dots, $arrows, $show, $scroll, $speed, $breakpoint, ) {
        var slider = $($slidername);
        var generalSettings = {
            mobileFirst: true,
            autoplay:true,
            speed: $speed,
            autoplaySpeed:500,
            dots: $dots,
            arrows: $arrows,
            slidesToShow: $show,
            slidesToScroll: $scroll,

            responsive: [
                {
                    breakpoint: $breakpoint,
                    settings: "unslick"
                },
            ]
        };

        slider.slick(generalSettings);

        $(window).on("resize", function () {
            if ($(window).width() > $breakpoint) {
                return;
            }
            if (!slider.hasClass("slick-initialized")) {
                return slider.slick(generalSettings);
            }
        });


    } // Mobile Only Slider
    // mobileOnlySlider($slidername, $dots, $arrows, $show, $scroll, $speed, $breakpoint, )
    mobileOnlySlider(".culture .inside", true, false, 1, 1, 1300, 575);

    // -----------------------------------


}); //ready end
