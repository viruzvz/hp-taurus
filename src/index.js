import './styles/main.scss'
import './styles/main.less'
import Sticky from 'sticky-js'
import 'popper.js'
import 'bootstrap'
import 'ekko-lightbox'
import $ from 'jquery'
window.$ = window.jQuery = $

// inicializa ekkoLightbox
$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
  event.preventDefault();
  return $(this).ekkoLightbox({
      always_show_close: true,
      gallery_parent_selector: '.gallery',
  })
})

// inicializa sticky
var sticky = new Sticky('.sticky-js')

// anima anchor
$('.nav-item').click(function(event){
  $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
  }, 500)
  event.preventDefault()
})

$(window).scroll(function () {
  var scrollDistance = $(window).scrollTop()

  // Assign active class to nav links while scolling
  $('.page-section').each(function (i) {
    if ($(this).position().top <= scrollDistance) {
      $('.navigation a.active').removeClass('active')
      $('.navigation a').eq(i).addClass('active')
    }
  })
}).scroll()

// Navegação Nav Fixed e Botão Voltar para o topo.
var btn = $('.button')
var navsec = $('.navsec')
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show')
    navsec.addClass('show')
  } else {
    btn.removeClass('show')
    navsec.removeClass('show')
  }
})

$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    navsec.removeClass('d-none')
  } 
})

btn.on('click', function (e) {
  e.preventDefault()
  $('html, body').animate({scrollTop:0}, '300')
})


