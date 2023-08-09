$('.banner-section .items').on('beforeChange',function(event,slick,currentSlide,nextSlide){var NextSlideDom=$(slick.$slides.get(nextSlide));if(NextSlideDom.hasClass('youtube')){$(".autoplay-youtube-video").on("YTPPlay")}});$(function(){$(".autoplay-youtube-video").YTPlayer()})
 
 // $('.banner-section .items').on('afterChange', function(event, slick, currentSlide, nextSlide){
        //     let total = slick.$slides.length;
        //     let current = currentSlide + 1;
        //     let next = current + 1;
        //     if(next > total) next = 1;
        //     $('.navigations span').html(current + '/' + total);
        //     $('.numbers .top').html((current <= 9 ? '0' : '') + current);
        //     $('.numbers .bottom').html((next <= 9 ? '0' : '') + next);
        // });
