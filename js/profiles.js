window.onload = function($) {
  "use strict"; // Start of use strict
  
var navbar =  $('.navbar').height();

//CAROUSEL SERVICE PAGE
$('.carousel').carousel({
  interval: 2000
});


//HOMEPAGE BOX RESIZER
  if($(window).width() >= 767)
  {
      var heights = $(".custom-box").map(function() {
              return $(this).height();
          }).get(),

          maxHeight = Math.max.apply(null, heights);

      $(".custom-box").height(maxHeight);
  }
  

  if($(window).width() >= 992)
  {
    $('.head-container').css('padding-top', navbar * 1.2);
    $('.head-container').css('padding-bottom', navbar / 3);
  }else{
    $('.head-container').css('padding-top', navbar * 1.5);
    $('.head-container').css('padding-bottom', navbar / 3);
  }

  //Button Triggers
  
  if($(window).width() >= 992){
    //Index Request a Quote
    btnScrollTop('#btn-index-request-quote', '#profilesRhForm', navbar);

    //Products Request a Quote
    btnScrollTop('#btn-products-request-quote', '#request-quote', navbar/2);

    //Products List Items
    btnScrollTop('#btn-products-list', '#product-list', navbar/2);
  }else{ 
    //Index Request a Quote
    btnScrollTop('#btn-index-request-quote', '#profilesRhForm', navbar + 30);

    //Products Request a Quote
    btnScrollTop('#btn-products-request-quote', '#profilesRhForm', navbar + 30);

    //Products List Items
    btnScrollTop('#btn-products-list', '#product-list', navbar);

     //Contact Triggers
  
    contactTriggers('.tel-trigger', 'Initializing Call Service');
    contactTriggers('#call-us', 'Initializing Call Service');
  }

  //Contact Triggers
  contactTriggers('.mail-trigger', 'Initializing Email Service');
  


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 80) {
      $("#mainNav").addClass("navbar-shrink");
      
    } else {
      $("#mainNav").removeClass("navbar-shrink");

    }
  };

  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  $(window).scroll(function() {
    $("#call-us").css('opacity','0.5');
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        $("#call-us").css('opacity','1');
    }, 500));
});

function contactTriggers(className, Message){
  $(className).click(function showAlert() {
    $("#success-alert i").text(Message);
    $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
    $("#success-alert").slideUp(500);
    });   
});
}

function btnScrollTop(className, scrollClassName, slideFormula){
  $(className).click(function() { 
    $('html, body').animate({
        scrollTop: $(scrollClassName).offset().top - (slideFormula)
    }, 2000);
  });
}

$(".manual-flip").click(function(){
 var thisContainer =  $(this).closest('.card-container');
  if(thisContainer.hasClass('hover')){
      thisContainer.removeClass('hover');
  } else {
      thisContainer.addClass('hover');
  }
});


}(jQuery); // End of use strict


