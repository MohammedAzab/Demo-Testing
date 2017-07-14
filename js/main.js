$(function () {
  'use strict';
  $(window).scroll(function () {
    var navbar = $('.navbar');
    if($(window).scrollTop() >= navbar.height()){
      navbar.addClass('scrolled navbar-fixed-top');
    }else {
      navbar.removeClass('scrolled navbar-fixed-top');
    }
  });
  // deal With Tabs
  $('.tab-switch li').click(function() {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.tabs-section .tab-content > div').hide();
    $('.' + $(this).data('class')).show();
  });
  // sections Scroll Top
  $('.navbar-inverse .navbar-nav>li>a').click(function () {
    $('html, body').animate({
      scrollTop: $('#' + $(this).data('class')).offset().top
    }, 1000);
  })

  // Nice Scroll
  $('body').niceScroll({
    cursorcolor: '#ff8b38',
    cursorwidth:"12px",
    cursorborder:"none",
    cursorborderradius:0
  });
  if ($(document).ready()) {
    $('.loading').fadeOut(1000);
  }
});
