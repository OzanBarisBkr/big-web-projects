/* slick */
$(document).ready(function(){


  window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    var banner = document.querySelector('.banner')
    header.classList.toggle('sticky', window.scrollY > 150);
    banner.classList.toggle('pt-0', window.scrollY>150 );
});





  //burgermenu
  $(".hamburger-menu").click(function(){
    $(".burger-open").removeClass("d-none");
    $(".burger-close").click(function(){
      $(".burger-open").addClass("d-none");
    });
});

  //like
$('.like-box').on('click', function (){
                            
  if( $(this).find('.heart-1').css('display') == 'none' ){
          $(this).find('.heart-2').addClass('d-none');
          $(this).find('.heart-1').css('display', 'block');
 
  }else{
      $(this).find('.heart-1').css('display', 'none');
      $(this).find('.heart-2').removeClass('d-none');
  }
});

//page 2 - item - design

$('.design-buttons .item').click(function(){
    $('.design-buttons .item').removeClass('active');

    $(this).addClass('active');
});

designButtons();
function designButtons(){
    $('.design-buttons .design-2').click(function(){
      $('#open-search .item-box').addClass('col-md-6');
      $('#open-search .brand').css({'bottom':'5%','left':'3%','top':'inherit'});
      $('#open-search .item-box ul').addClass('flex-wrap');
      $('#open-search .item-box li:last-child').css('margin','20px 0px');
      $('#open-search .item-content').css('margin-left','22px');
  });
  $('.design-buttons .design-1').click(function(){
      $('#open-search .item-box').removeClass('col-md-6');
      $('#open-search .brand').css({'top':'2%','right':'1%','bottom':'inherit','left':'inherit'});
      $('#open-search .item-box ul').removeClass('flex-wrap');
      $('#open-search .item-box li:last-child').css('margin','0px');
      $('#open-search .item-content').css('margin-left','42px');

      
  });
};


$('.page-box-number').click(function(){
  $('.page-box-number').removeClass('active');

  $(this).addClass('active');
  
});





  

  $('.banner-s-product-class-section').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows:true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
          arrows:true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          arrows:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
       // ----------cat-slide-------------   //

  
  $('.slide-wrapper').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows:true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows:true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  
  $('.most-s-slider-2').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  

//------Banner Slider Settings -------//

      let productClass = document.querySelectorAll(".product-class");
      let productimage = document.querySelectorAll(".product-image");
      let productName = document.querySelectorAll(".product-name-s");
      
      
      var index = 0;
      arrowMove();
      activeFunction();
      
      function activeFunction(){
        $('.product-class').click(function(){
          $('.product-class span').addClass('product-name-border');
          $(this).find('span').removeClass('product-name-border');
      
          $('.product-class div').addClass('border-div');
          $(this).find("div").removeClass('border-div');
      
          $('.product-class').removeClass("active");  
          $(this).addClass("active");  
            });
      };
      

    

      function arrowMove(){

          

          if(index >= productClass.length){
            index = 0;
          }
          else if(index < 0){
              index = productClass.length-1;
          };
          for(i = 0; i < productClass.length; i++){
            productClass[i].classList.remove("active");
          };

          if(index >= productimage.length){
            index = 0;
          }
          else if(index < 0){
              index = productimage.length - 1;
          };
          for(i = 0; i < productimage.length; i++){
            productimage[i].classList.add("border-div");
          };

          if(index >= productName.length){
            index = 0;
          }
          else if(index < 0){
              index = productName.length - 1;
          };
          for(i = 0; i < productName.length; i++){
            productName[i].classList.add("product-name-border");
          };
          
          
          productClass[index].classList.add('active');
          productimage[index].classList.remove('border-div');
          productName[index].classList.remove('product-name-border');

          productClass[index].click();
        };
        
        
        $('.arrowRight').click(function(){
          index++;
          arrowMove();
          
        });

        $('.arrowLeft').click(function(){
          index--;
          arrowMove(); 
        });

   //------          -------//
        // ----   ----//

        const slider = document.querySelector('.slider-inner');
        const progressBar = document.querySelector('.prog-bar-inner');

        let sliderGrabbed = false;

        slider.parentElement.addEventListener('scroll', (e) => {
            progressBar.style.width  = `${getScrollPercentage()}%`
        })

        slider.addEventListener('mousedown', (e) => {
            sliderGrabbed = true;
            slider.style.cursor = 'grabbing';
        })

        slider.addEventListener('mouseup', (e) => {
            sliderGrabbed = false;
            slider.style.cursor = 'grab';
        })

        slider.addEventListener('mouseleave', (e) => {
            sliderGrabbed = false;
        })

        slider.addEventListener('mousemove', (e) => {
            if(sliderGrabbed){
                slider.parentElement.scrollLeft -= e.movementX;
            }
        })

        slider.addEventListener('wheel', (e) =>{
            e.preventDefault()
            slider.parentElement.scrollLeft += e.deltaY;
        })

        function getScrollPercentage(){
          return ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth) ) * 100);
        }

        //----progress end---//
        
        
       

     

      //   $(document).ready(function() {
      //     $(document).scroll(function () {
      //         var scroll = $(this).scrollTop();
      //         var topDist = $("#header").position();
      //         if (scroll > topDist.top) {
      //             $('#header').css({"position":"fixed","top":"0","left":"0","minWidth":"100%","paddingRight":"200px","backgroundColor":"#C11D2A","opacity":"1","zIndex":"99999"});
      //         } else {
      //             $('#header').css({"position":"static","top":"auto"});
      //         }
      //     });
      // });
        

    }); // document.ready end

