$(document).ready(function(){

 // cliccando cambio img verso destra
  $( ".next" ).click(slideRight);
 // cliccando cambio img verso sinistra
  $( ".prev" ).click(slideLeft);
 // cliccando su un pallino seleziono l'img corrispondente
  $('.nav i').click(function(){
    $('.nav i.active').removeClass('active');
    $(this).addClass('active');
    $(".images img.active").removeClass("active");
    $("img").eq($(this).index()).addClass("active");
  });
});

function slideRight(){

  var elementoImg = $('.images img.active');
  var elementoCircle = $(".nav i.active");

  elementoImg.removeClass("active");
  elementoCircle.removeClass("active");

 // se sono all'img con classe last
  if(elementoImg.hasClass("last")){
    // allora seleziono la prima img
    $(".images img.first").addClass("active");
  } else {
    //altrimenti seleziono quella dopo
    elementoImg.next().addClass("active");
  }

  // se sono al pallino con classe last
  if(elementoCircle.hasClass("last")){
    // allora seleziono il primo pallino
    $(".nav i.first").addClass("active");
  } else { //altrimenti seleziono quello dopo
    elementoCircle.next().addClass("active");
  }
}

function slideLeft(){

  var elementoImg = $('.images img.active');
  var elementoCircle = $(".nav i.active");

  elementoImg.removeClass("active");
  elementoCircle.removeClass("active");

 // se sono all'img con classe first
  if(elementoImg.hasClass("first")){
    // allora seleziono l'ultima img
    $(".images img.last").addClass("active");
  } else { //altrimenti seleziono quella prima
    elementoImg.prev().addClass("active");
  }

  // se sono al pallino con classe first
  if(elementoCircle.hasClass("first")){
    // allora seleziono l'ultimo pallino
    $(".nav i.last").addClass("active");
  } else { //altrimenti seleziono quello prima
    elementoCircle.prev().addClass("active");
  }
}

$(document).keydown(function(e){
  if (e.keyCode == 37){
    slideLeft();
  } else if (e.keyCode == 39){
    slideRight();
  }
});
