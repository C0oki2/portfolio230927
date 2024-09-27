//js/dot.js
$(function(){
  var dot = $("#dot ul li");
  var contents = $(".page_wrap>.page");

  dot.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    var section = contents.eq(index);
    var offset = section.offset().top;
    $("html,body").animate({scrollTop:offset},600);
  });

  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll >= contents.eq(0).offset().top){
      dot.css({"background":"rgba(255,255,255,0.1)"});
      dot.find("a").css({"background":"rgba(255,255,255,0.5)"});
      dot.removeClass("active");
      dot.eq(0).addClass("active");
      dot.eq(0).find("a").css({"background":"#0cdaff"});
    }
    if(wScroll >= contents.eq(1).offset().top){
      dot.css({"background":"rgba(0,0,0,0.7)"});
      dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
      dot.removeClass("active");
      dot.eq(1).addClass("active");
      dot.eq(1).find("a").css({"background":"#0189ff"});
    }
    if(wScroll >= contents.eq(2).offset().top){
      dot.removeClass("active");
      dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
      dot.eq(2).addClass("active");
      dot.eq(2).find("a").css({"background":"#f0a91b"});
    }
    if(wScroll >= contents.eq(3).offset().top){
      dot.removeClass("active");
      dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
      dot.eq(3).addClass("active");
      dot.eq(3).find("a").css({"background":"#fff"});
    }
    if(wScroll >= contents.eq(4).offset().top){
      dot.removeClass("active");
      dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
      dot.eq(4).addClass("active");
      dot.eq(4).find("a").css({"background":"#d6130f"});
    }
    if(wScroll >= contents.eq(5).offset().top){
      dot.removeClass("active");
      dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
      dot.eq(5).addClass("active");
      dot.eq(5).find("a").css({"background":"#a0ef08"});
    }
    if(wScroll >= contents.eq(6).offset().top){
      dot.removeClass("active");
      dot.find("a").css({"background":"rgba(0,0,0,0.5)"});
      dot.eq(6).addClass("active");
      dot.eq(6).find("a").css({"background":"#9517ff"});
    }

  });

  return false;
});

//js/side.js
$(function(){

  $('.wrap_af').hide();

  $(".fa-bars").click(function(){
    $("#side").animate({left:'0'},500);
    $(this).fadeOut();
    $('.wrap_af').fadeIn();
  });



  $(".fa-chevron-left").click(function(){
    $("#side").animate({left:'-310'},500);
    $(".fa-bars").fadeIn();
    $('.wrap_af').fadeOut();
  });

});


//js/mousewheel.js
$(function(){
  var win_h = $(window).height();
  $('.page').each(function(index){
    $(this).attr("data-index",win_h * index);
  });

  $('.page').on("mousewheel",function(e){
    var pagePos = parseInt($(this).attr("data-index"));
    if(e.originalEvent.wheelDelta >=0 ){
      $("html,body").stop().animate({scrollTop:pagePos - win_h});
      return false;
    } else if (e.originalEvent.wheelDelta < 0) {
      $("html,body").stop().animate({scrollTop:pagePos + win_h});
      return false;
    }
  });
});





particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 355,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

/*letters */

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  //스크롤박스
  const scrollBox = document.querySelector('.scroll-box');
  const scrollImage = document.querySelector('.scroll-image');
  
  const imageHeight = scrollImage.offsetHeight; // 이미지 높이 가져오기
  
  scrollBox.addEventListener('mouseenter', () => {
      scrollImage.style.animation = `scroll ${imageHeight / 250}s linear infinite`;
  });
  
  scrollBox.addEventListener('mouseleave', () => {
      scrollImage.style.animation = 'none';
      scrollImage.style.top = '0';
  });
  
  // CSS 애니메이션 추가
  const style = document.createElement('style');
  style.innerHTML = `
  @keyframes scroll {
      0% { top: 0; }
      100% { top: -${imageHeight - scrollBox.clientHeight}px; } /* 박스 크기에 맞게 조정 */
  }
  `;
  document.head.appendChild(style);
  