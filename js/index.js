$(".gnb > li .hidden").hide()
$(".gnb > li").on("mouseenter", function () {
    $(".gnb > li .hidden:not(:animated)").slideDown(500)
  })

  $(".gnb > li").on("mouseleave", function () {
    $(".gnb > li .hidden:not(:animated)").stop().slideUp(500)
  })

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 500);
});

function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const gnb = document.querySelector('.gnb');
    menuToggle.classList.toggle('active');
    gnb.classList.toggle('active');
}
function imgSlider(anything) {
    document.querySelector('.greenTea').src = anything;
}
function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
$(document).ready(function() {

    let n = 0;
    let state = 0;
    document.addEventListener('wheel', function(e) {
        if(e.wheelDelta < 0 && state == 0) {
            state = 1;
            n++;
            if(n > 7) n = 7;
            $('html, body').not(":animated").stop().animate({ scrollTop: $(".scroll:eq("+ n +")").position().top }, 1000, function() {
                state = 0;
            });
        } else if(e.wheelDelta > 0 && state == 0) {
            state = 1;
            n--;
            if(n < 1) n = 1;
            $('html, body').not(":animated").stop().animate({ scrollTop: $(".scroll:eq("+ n +")").position().top }, 1000, function() {
                state = 0;
            });
        }
        num = n-1;
        $(".gnb li").removeClass('on')
        $(".gnb li:eq("+ num +")").addClass('on')
    });
  
    $(".gnb li").on('click', function() {
      $(".gnb li").removeClass('on')
      $(this).addClass('on')
      let idName = $(this).children('a').attr('href')
      let pos = $(idName).position().top
      $("html, body").animate({ scrollTop: pos }, 1000)
    //   n = idName.substr(4, 1)
    })
  })