$(document).ready(function() {



$(function() {
    $( ".ring__head" ).click(function() {
      $( ".ring__popup" ).toggleClass( "is-open");
      return false;
    });
  });

$(function() {
    $( ".btn-popup" ).click(function() {
      $( ".send__popup" ).toggleClass( "send__popup-active");
      return false;
    });
  });
$(function() {
    $( ".send__popupclose" ).click(function() {
      $( ".send__popup" ).removeClass( "send__popup-active");
      return false;
    });
  });
$(function() {
    $( ".btn-popup2" ).click(function() {
      $( ".popup" ).toggleClass( "popup-active");
      return false;
    });
  });




});