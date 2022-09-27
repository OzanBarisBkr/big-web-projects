/* slick */
$(document).ready(function(){
  $('.banner-s-product-class-section').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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

  
  $('.most-s-slider-2').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  

//------Banner Slider Settings -------//

      let productClass = document.querySelectorAll(".product-class");
      let productimage = document.querySelectorAll(".product-image");
      let productName = document.querySelectorAll(".product-name-s");
      
      let index = 0;
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
        };
        
        
        $('.arrowRight').click(function(){
          index++;
          arrowMove();
        });

        $('.arrowLeft').click(function(){
          arrowMove(); 
          index--;
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






    }); // document.ready end

