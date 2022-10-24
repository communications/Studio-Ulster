$(document).foundation();

// Hero Video Control Frogaloop
var Froogaloop = function () {
  function e(a) { return new e.fn.init(a) } function g(a, c, b) { if (!b.contentWindow.postMessage) return !1; a = JSON.stringify({ method: a, value: c }); b.contentWindow.postMessage(a, h) } function l(a) {
    var c, b; try { c = JSON.parse(a.data), b = c.event || c.method } catch (e) { } "ready" != b || k || (k = !0); if (!/^https?:\/\/player.vimeo.com/.test(a.origin)) return !1; "*" === h && (h = a.origin); a = c.value; var m = c.data, f = "" === f ? null : c.player_id; c = f ? d[f][b] : d[b]; b = []; if (!c) return !1; void 0 !== a && b.push(a); m && b.push(m); f && b.push(f);
    return 0 < b.length ? c.apply(null, b) : c.call()
  } function n(a, c, b) { b ? (d[b] || (d[b] = {}), d[b][a] = c) : d[a] = c } var d = {}, k = !1, h = "*"; e.fn = e.prototype = {
    element: null, init: function (a) { "string" === typeof a && (a = document.getElementById(a)); this.element = a; return this }, api: function (a, c) { if (!this.element || !a) return !1; var b = this.element, d = "" !== b.id ? b.id : null, e = c && c.constructor && c.call && c.apply ? null : c, f = c && c.constructor && c.call && c.apply ? c : null; f && n(a, f, d); g(a, e, b); return this }, addEvent: function (a, c) {
      if (!this.element) return !1;
      var b = this.element, d = "" !== b.id ? b.id : null; n(a, c, d); "ready" != a ? g("addEventListener", a, b) : "ready" == a && k && c.call(null, d); return this
    }, removeEvent: function (a) { if (!this.element) return !1; var c = this.element, b = "" !== c.id ? c.id : null; a: { if (b && d[b]) { if (!d[b][a]) { b = !1; break a } d[b][a] = null } else { if (!d[a]) { b = !1; break a } d[a] = null } b = !0 } "ready" != a && b && g("removeEventListener", a, c) }
  }; e.fn.init.prototype = e.fn; window.addEventListener ? window.addEventListener("message", l, !1) : window.attachEvent("onmessage", l); return window.Froogaloop =
    window.$f = e
}();

//triggers the navigation hamburger slide out
$(document).ready(function () {
  var buttonclicked;
  $('.nav-menu').click(function () {
    if (buttonclicked != true) {
      buttonclicked = true;
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
      $('header nav').toggleClass('open-nav');
    }
    else {
      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
      $('header nav').toggleClass('open-nav');
    }
  });

  var buttonclickednight;
  $('.day-night-toggle').click(function () {
    if (buttonclickednight != true) {
      buttonclickednight = true;
      $('body').toggleClass('day-mode');
      console.log('day-mode');
    }
    else {
      $('body').toggleClass('day-mode');
    }
  });


  var iframe = $('#full-video2')[0],
    player = $f(iframe);

  //Play Button on the hero
  $('.play-button-1').click(function () {
    $(this).fadeOut();
    $('.hide-video-1').fadeIn();
    console.log('play-button-1');
    $('.video-container-1 ').addClass('enlarge-video');
    player.addEvent('ready', function () {
      player.api('setVolume', 1);
      player.api("seekTo", 0);
      player.api("play");
    });
  });

  $('.hide-video-1').click(function () {
    $('.play-button-1').fadeIn();
    $(this).hide();
    $('.video-container-1 ').removeClass('enlarge-video');
    $('.play-video-1').show();
    player.addEvent('ready', function () {
      player.api('setVolume', 0);
    });
  });



  var iframe2 = $('#full-video3')[0],
    player2 = $f(iframe2);

  //Play Button on the hero
  $('.play-button-2').click(function () {
    $(this).fadeOut();
    $('.hide-video-2').fadeIn();
    console.log('play-button-2');
    $('.video-container-2 ').addClass('enlarge-video');
    player2.addEvent('ready', function () {
      player2.api('setVolume', 1);
      player2.api("seekTo", 0);
      player2.api("play");
    });
  });

  $('.hide-video-2').click(function () {
    $('.play-button-2').fadeIn();
    $(this).hide();
    $('.video-container-2 ').removeClass('enlarge-video');
    $('.play-video-2').show();
    player2.addEvent('ready', function () {
      player2.api('setVolume', 0);
    });
  });

});


// Sticky hamburger menu on tablet and mobile.
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 5) {
      $('header').addClass('fixed-header');
    }
    else {
      $('header').removeClass('fixed-header');
    }
  })






});



// AOS animation init
$(document).ready(function () {
  AOS.init({
    offset: 200, // offset (in px) from the original trigger point
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'linear', // default easing for AOS animations
    once: true,
    mirror: true,
    disable: "mobile",

  });
});


// Custom words fading in animations
window.addEventListener('load', function () {
  $('.animated-text').each(function () {
    var text = $(this).text().split(' ');
    for (var i = 0, len = text.length; i < len; i++) {
      text[i] = '<span data-aos="flip-up" data-aos-delay="' + i * 3 + '00" class="word-' + i + '">' + text[i] + '</span>';
    }
    $(this).html(text.join(' '));
  })

  if ($(window).width() < 560) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 0.8,
      spaceBetween: 20,
      speed: 600,
      allowTouchMove: true,
      loop: true,

      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        init: function () {
          $('.text-1').show();
        },


      }
    });
  }
  else {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 20,
      speed: 600,
      // freeMode: true,
      allowTouchMove: true,
      // autoplay: {
      //   delay: 4500,
      //   disableOnInteraction: false,
      // },
      loop: true,
      // loopedSlides: 50,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },

      breakpoints: {

        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
      },


      loopFillGroupWithBlank: false,
      reverseDirection: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      on: {

        init: function () {
          $('.text-1').show();
        },

        // do also on init
        // slideChange: darkNav,   // is this needed?

        slideChange: function () {
          var activeIndex = this.activeIndex;
          var realIndex = this.slides.eq(activeIndex).attr('data-swiper-slide-index');
          $('.swiper-slide').removeClass('swiper-slide-nth-prev-2 swiper-slide-nth-next-2');
          $('.swiper-slide').removeClass('swiper-slide-nth-prev-3');
          $('.swiper-slide').removeClass('swiper-slide-nth-next-3');
          $('.swiper-slide[data-swiper-slide-index="' + realIndex + '"]').prev().prev().addClass('swiper-slide-nth-prev-2');
          $('.swiper-slide[data-swiper-slide-index="' + realIndex + '"]').next().next().addClass('swiper-slide-nth-next-2');

          $('.swiper-slide[data-swiper-slide-index="' + realIndex + '"]').prev().prev().prev().addClass('swiper-slide-nth-prev-3');
          $('.swiper-slide[data-swiper-slide-index="' + realIndex + '"]').next().next().next().addClass('swiper-slide-nth-next-3');



        },



      }
    });
  }






  swiper.on('slideChange', function () {
    if ($('.swiper-slide.swiper-slide-active').hasClass('swiper-text-1')) { // `this` rather?
      // if ( $(this).find('.swiper-slide-active').hasClass('swiper-text-1') ) {
      console.log('test');
      $('.text-2').fadeIn();

      $('.text-1').hide();
      $('.text-3').hide();
      $('.text-4').hide();
      $('.text-5').hide();
      $('.text-5').hide();

    } else if ($('.swiper-slide.swiper-slide-active').hasClass('swiper-text-2')) {
      $('.text-3').fadeIn();

      $('.text-1').hide();
      $('.text-2').hide();
      $('.text-4').hide();
      $('.text-5').hide();
      $('.text-6').hide();

    } else if ($('.swiper-slide.swiper-slide-active').hasClass('swiper-text-3')) {
      $('.text-4').fadeIn();

      $('.text-2').hide();
      $('.text-1').hide();
      $('.text-3').hide();
      $('.text-5').hide();
      $('.text-6').hide();

    } else if ($('.swiper-slide.swiper-slide-active').hasClass('swiper-text-4')) {
      $('.text-5').fadeIn();
      $('.text-2').hide();
      $('.text-3').hide();
      $('.text-1').hide();
      $('.text-4').hide();
      $('.text-6').hide();
    } else if ($('.swiper-slide.swiper-slide-active').hasClass('swiper-text-5')) {
      $('.text-6').fadeIn();
      $('.text-2').hide();
      $('.text-3').hide();
      $('.text-4').hide();
      $('.text-1').hide();
      $('.text-5').hide();
    } else if ($('.swiper-slide.swiper-slide-active').hasClass('swiper-text-6')) {
      $('.text-1').fadeIn();
      $('.text-2').hide();
      $('.text-3').hide();
      $('.text-4').hide();
      $('.text-5').hide();
      $('.text-6').hide();
    } else {
      $('.slide-text').fadeOut();
    }
  });




})



document.addEventListener('aos:in:super-duper', ({ detail }) => {
  // console.log('animated in', detail);
  $(detail).removeClass('active-me');
});

document.addEventListener('aos:in:super-duper', ({ detail }) => {
  // console.log('animated in', detail);
  $(detail).removeClass('active-me');
});

var title_words = $('.sub-page-heading').text().split(" ");
$('.sub-page-heading').empty();
var zindex = 50;
$.each(title_words, function (i, v) {
  zindex--;
  $('.sub-page-heading').append($('<span style="z-index: ' + zindex + ';">').text(v));
});

