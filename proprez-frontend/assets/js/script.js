$(document).ready(function () {

  var wow = new WOW();
  wow.init();

  window.onscroll = function () { onScrollPage(); onColorChange() };
  var header = document.getElementById("header");
  var sticky = header.offsetTop + 90;
 
  function onScrollPage() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  


  // var offset = offset();
  var referOfTop = $('.to-white-area').offset();
  var referOfBot = $('#endFlag').offset();
  var joinChange = referOfTop.top - 100;
  var outChange = referOfBot.top + 600;

  function onColorChange() {
    if ($(window).scrollTop() > joinChange && $(window).scrollTop() < outChange) {
      $('.to-white-area').addClass('to-white ant-screen');
      $('#header').addClass('onchange');
    } 
    else {
      $('.to-white-area').removeClass('to-white');
      $('#header').removeClass('onchange');
    }
    
  }

  $('.banner-btn').hover(function (){
    $('.banner-btn').removeClass('active');
    $(this).addClass('active');
  });

  $('.back-to-top').click(function () {
    $('html,body').animate({
      scrollTop: 0,
    }, 750,);
  });

  
  $('.burger-menu').find('.close-btn').click(function () {
    $('.burger-menu').removeClass('active');
  });

  $('.menu-button').click(function () {
    $('.burger-menu').addClass('active');
  });


  $(document).mouseup(function(e) 
  { 
      var container  = $(".burger-menu");
      var containerInside = $(".burger-menu").find(".inside");
      if (!containerInside.is(e.target) && containerInside.has(e.target).length === 0) 
      {
        container.removeClass("active");
      }
  });

  // $('.banner-section .items').on('afterChange', function (event, slick, currentSlide, nextSlide) {
  //   let total = slick.$slides.length;
  //   let current = currentSlide + 1;
  //   let next = current + 1;
  //   if (next > total) next = 1;
  //   $('.numbers .current').html((current <= 9 ? '0' : '') + current);
  //   $('.numbers .bottom').html((next <= 9 ? '0' : '') + next);
  // });

  // $('[data-youtube-embed]').on('click', function () {
  //   var content = $(this).attr('data-youtube-content');
  //   var hidecontent = $(this).attr('data-youtube-hidecontent');
  //   var embedcode = $(this).attr('data-youtube-embed');
  //   $('[data-iframe-close="' + hidecontent + '"]').hide();
  //   $('[data-iframe-open="' + content + '"]').html('<iframe allowfullscreen="" class="d-block" frameborder="0" src="https://www.youtube.com/embed/' + embedcode + '?rel=0&amp;playsinline=1&amp;controls=1&amp;showinfo=0&amp;modestbranding=0" width="100%"></iframe>').show();
  // });


  //counter function

  // function number_format(number, decimals, dec_point, thousands_sep) {
  //   // Strip all characters but numerical ones.
  //   number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  //   var n = !isFinite(+number) ? 0 : +number,
  //     prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
  //     sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
  //     dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
  //     s = '',
  //     toFixedFix = function (n, prec) {
  //       var k = Math.pow(10, prec);
  //       return '' + Math.round(n * k) / k;
  //     };
  //   // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  //   s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  //   if (s[0].length > 3) {
  //     s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  //   }
  //   if ((s[1] || '').length < prec) {
  //     s[1] = s[1] || '';
  //     s[1] += new Array(prec - s[1].length + 1).join('0');
  //   }
  //   return s.join(dec);
  // }
  // $(function () {

  //   let visibilityIds = ['#counters_1', '#counters_2', '#counters_3'];

  //   let counterClass = '.counter';

  //   let defaultSpeed = 3000;

  //   $(window).on('scroll', function () {

  //     getVisibilityStatus();

  //   });
  //   getVisibilityStatus();

  //   function getVisibilityStatus() {

  //     elValFromTop = [];

  //     var windowHeight = $(window).height(), windowScrollValFromTop = $(this).scrollTop();

  //     visibilityIds.forEach(function (item, index) {

  //       try {

  //         elValFromTop[index] = Math.ceil($(item).offset().top);

  //       } catch (err) {

  //         return;

  //       }

  //       if (($(item).height() + windowScrollValFromTop) > elValFromTop[index]) {

  //         counter_init(item);

  //       }

  //     });

  //   }

  //   function counter_init(groupId) {

  //     let num, speed, direction, index = 0;

  //     $(counterClass).each(function () {

  //       num = $(this).attr('data-target');

  //       speed = $(this).attr('data-speed');

  //       directionnum = $(this).attr('data-direction-target');

  //       direction = $(this).attr('data-direction');

  //       easing = $(this).attr('data-easing');

  //       if (speed == undefined) speed = defaultSpeed;

  //       if (directionnum == undefined) directionnum = null;

  //       $(this).addClass('c_' + index);

  //       doCount(num, index, speed, groupId, direction, easing, directionnum);

  //       index++;

  //     });

  //   }

  //   function doCount(num, index, speed, groupClass, direction, easing, directionnum) {

  //     let className = groupClass + ' ' + counterClass + '.' + 'c_' + index;

  //     let trgt = 0;

  //     if (directionnum == null) { trgt = num; } else { trgt = num - directionnum; }

  //     if (easing == undefined) easing = "swing";

  //     $(className).animate({

  //       trgt

  //     }, {

  //       duration: +speed,

  //       easing: easing,

  //       step: function (now) {

  //         if (direction == 'reverse') {

  //           $(this).text(number_format(num - Math.floor(now), 0, ".", "."));

  //         } else {

  //           $(this).text(number_format(Math.floor(now), 0, ".", "."));

  //         }

  //       },

  //       complete: doCount

  //     });

  //   }

  // })

}) //ready end

$("input[name=phone]").mask('0(AZZ) ZZZ-ZZZZ', {
  translation: {
      '0': {
          pattern: /0/,
          fallback: '0',
      },
      'A': {
          pattern: /[1-9]/, optional: false
      },
      'Z': {
          pattern: /[0-9]/, optional: false
      }
  },
  placeholder: "0(___) ___-____"
});
$("input[name=post_code]").mask("ZZZZZ", {
  translation: {
      'Z': {
          pattern: /[0-9]/, optional: true
      }
  },
  placeholder: "______"
});
$("input[name=identity_number]").mask("ZZZZZZZZZZZ", {
  translation: {
      'Z': {
          pattern: /[0-9]/, optional: true
      }
  },
  placeholder: "___________"
});
$("input[name=identity_no]").mask("ZZZZZZZZZZZ", {
  translation: {
      'Z': {
          pattern: /[0-9]/, optional: true
      }
  },
  placeholder: "___________"
});
$("input[name=tax_number]").mask("ZZZZZZZZZZZ", {
  translation: {
      'Z': {
          pattern: /[0-9]/, optional: true
      }
  },
  placeholder: "___________"
});
$("input[name=name]").mask("Z", {
  translation: {
      'Z': {
          pattern: /[A-Z a-zŞşÇçĞğÜüİıÇçÖö]/, recursive: true
      }
  }
});
$("input[name=surname]").mask("Z", {
  translation: {
      'Z': {
          pattern: /[A-Za-zŞşÇçĞğÜüİıÇçÖö]/, recursive: true
      }
  }
});
$("input[name=validate_code]").mask("ZZZZZZ", {
  translation: {
      'Z': {
          pattern: /[0-9]/, optional: true
      }
  },
});
