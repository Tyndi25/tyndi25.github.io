$(document).ready(function() {
  $(".ui.accordion").accordion();
  $("#tag-category-pop").click(function() {
    // $(".hand.point.icon").toggleClass("active");
    $(".fas.fa-angle-up").toggleClass("active");
  });

  $('.flip-toggle').click(function () {
    var target = $('.pusher')
    if (bodyBgSwitchIndex === 0) {
      bodyBgSwitchIndex = 1
      target.toggleClass('flip-it')
      setTimeout( function () {
        $('.front').css('display','none')
        $('.back').css('display','block')
      }, 300)
    }
      else {
        bodyBgSwitchIndex = 0
        target.toggleClass('flip-it')
        setTimeout( function (){
          $('.front').css('display','block')
          $('.back').css('display','none')
      }, 300)
    }
  });

  // TODO: Fix the relative location for hovering tooltips.
//   var tooltips = document.querySelectorAll('.tool span');

//   window.onmousemove = function (e) {
//     var x = (e.clientX + 20) + 'px',
//         y = (e.clientY + 20) + 'px';
//     for (var i = 0; i < tooltips.length; i++) {
//         tooltips[i].style.top = y;
//         tooltips[i].style.left = x;
//     }
// };

});