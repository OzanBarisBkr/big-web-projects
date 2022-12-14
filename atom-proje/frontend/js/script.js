

$(document).ready(function(){

  window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    var banner = document.querySelector('.banner');
    var bannerSlider = this.document.querySelector('.slide-image');
    var burgerMenu = document.querySelector('.hamburger-opened');
    header.classList.toggle('sticky', window.scrollY > 50);
    banner.classList.toggle('pt-0', window.scrollY> 50);
    burgerMenu.classList.toggle('t-80', window.scrollY> 50);
    // bannerSlider.Style.marginTop = '200px';
    // burgerMenu.style.top = '80px';

});

$('.click-popup').click(function(){
    $('.services-popup').css('display','block');
});
$('.online-form').click(function(){
    $('.services-popup').css('display','block');
});
$('.close-popup').click(function(){
    $('.services-popup').css('display','none');
});

$('#services-section .item').click(function(){
  $("html, body").animate(
    { scrollTop: "0" }, 750);
}); 
$('.ourServices .visible-content-2').click(function(){
  $("html, body").animate(
    { scrollTop: "0" }, 750);
}); 


$(function() {
  $('.scroll-down-banner').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 700, 'linear');
  });
});




    $('.slide-wrapper').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
          
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

    $('.services-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1324,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:true,
              arrows:false
            }
          }
          
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    $('#howItSlider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:true,
              arrows:false
            }
          }
          
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      $('.blog-slider').slick({
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


      $('#ourServicesBoxSlide').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      $('#ourServicesBoxSlideMobile').slick({
        dots: true,
        infinite: true,
        arrows:false,
        speed: 1500,
        autoplay:true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


      $('#ourServiceGroupM').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    


      const counters = document.querySelectorAll('.value');
      const speed = 400;

    counters.forEach( counter => {
    const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   };
   
   animate();

  });


  var $slider = $('.slider');
  var $progressBar = $('.progress');
  var $progressBarLabel = $( '.slider__label' );
  
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    
    $progressBarLabel.text( calc + '% completed' );
  });
  
  $('.slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          mobileFirst:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
      
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });





  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
 
  });


  $('.our-services .box-item').mouseenter(function(){
      $(this).find('.btn-style-3').css('display','none');
  });
  $('.our-services .box-item').mouseleave(function(){
      $(this).find('.btn-style-3').css('display','flex');
  });



  $('.hamburger').click(function(){
    $(this).find('.fa-bars').toggle();
    $(this).find('.fa-xmark').toggle();
    $('.hamburger-opened').toggle('slow');
   
  });

 
  
  $('.hamburger-opened .burger-link').each(function(){
    $(this).on('click', function(){
      // $(this).find('.y-bottom').click();
      // console.log($(this).find('.y-bottom'));
      var href = $(this).find('.y-bottom').attr('href');
      console.log(href);
      window.location.href = href;
    });
  });
  

  // $(document).on('click', '.burger-link', function() {
  //     $(this).find('.y-bottom').click();
  //   });


  $('.burger-accordion').click(function(){
      $('.burger-dropdown').toggle('slow');

  });


});
