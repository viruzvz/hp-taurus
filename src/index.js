import './styles/main.scss'
import './styles/main.less'
import Sticky from 'sticky-js'
import 'popper.js'
import 'bootstrap'
import 'ekko-lightbox'
import $ from 'jquery'
window.$ = window.jQuery = $

// inicializa ekkoLightbox
$(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
  event.preventDefault()
  return $(this).ekkoLightbox({
    always_show_close: true,
    gallery_parent_selector: '.gallery'
  })
})

// inicializa sticky
var sticky = new Sticky('.sticky-js')

// anima anchor
$('.nav-item').click(function (event) {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500)
  event.preventDefault()
})

// add class to wordpress widget ul
$(document).ready(function () {
  $('.card-list--parent > ul').addClass('fa-ul')
  $('.card-list--parent > ul li').append('<span class="fa-li"><i class="fas fa-link"></i></span>')
})

// rolar para o Nimble
$(document).ready(function () {
  // Handler for .ready() called.
  $('html, body').animate({
    scrollTop: $('#js-nimble').offset().top
  }, 'slow')
})

// contact form 7 + bootstrap

$(document).ready(function () {
  // $('#wpcf7-f122-o1').addClass('container')
  $('.wpcf7-form').addClass('row')
  $('.c7-md-6').parent().parent().parent().addClass('col-md-6')
  $('.c7-md-12').parent().parent().parent().addClass('col-md-12')
  $('.wpcf7-submit').parent().addClass('col-md-12')
})

// page section anchor

$(window).scroll(function () {
  var scrollDistance = $(window).scrollTop()

  // Assign active class to nav links while scolling
  $('.page-section').each(function (i) {
    if ($(this).position().top <= scrollDistance) {
      $('.navigation a.a--active').removeClass('a--active')
      $('.navigation a').eq(i).addClass('a--active')
    }
  })
}).scroll()

// Navegação Nav Fixed e Botão Voltar para o topo.
var btn = $('.js-gototop')
var cot = $('.js-cot')
var navsec = $('.navsec')
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show')
    cot.addClass('show')
    navsec.fadeIn('slow')
  } else {
    btn.removeClass('show')
    cot.removeClass('show')
    navsec.fadeOut('slow')
  }
})

// backtotop top
btn.on('click', function (e) {
  e.preventDefault()
  $('html, body').animate({ scrollTop: 0 }, '300')
})

// select option for contatc form 7
$(function () {
  var $select = $('.js-my-select')
  var $images = $('.js-my-file')

  $select.on('change', function () {
    var value = '.' + $(this).val()
    $images.removeClass('d-none').not(value).addClass('d-none')
  })
})
