if ($(window).width() > 992 || $(window).width() < 992) {
    $(window).scroll(function(){  
       if ($(this).scrollTop() > 200) {
          $('#myNav').addClass("fixed-top");
          $('.navbar-brand').css('display','inline')
          // add padding top to show content behind navbar
          $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        }else{
          $('#myNav').removeClass("fixed-top");
           // remove padding top from body
          $('body').css('padding-top', '0');
          $('.navbar-brand').css('display','none')
        }   
    });
  } // end if