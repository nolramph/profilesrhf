window.onload = (function($){

//Header Navigation add active state
var navLocation = window.location.pathname.split("/")[1];
$('a.nav-link').removeClass('active');
 if (navLocation !== ""){
  var href = $("#mainBreadcrumbsPage").attr('href');
   if(href){
    $('a[href$="' + href + '"]').addClass('active');
   }else{
    $('a[href$="' + navLocation + '"]').addClass('active');
   }
}else{
  $("a[href$='/']").addClass('active');
}

})(jQuery);