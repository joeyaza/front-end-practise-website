$(function() {
  $( 'nav ul li' ).hover( handlerIn, handlerOut )

  function handlerIn(){
    var id = $(this).attr('id')
    $('.right > div:nth-child('+id+')').addClass('active')
  }

  function handlerOut() {
    var id = $(this).attr('id')
    $('.right > div:nth-child('+id+')').removeClass('active')
  }
})