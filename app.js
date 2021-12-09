$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    var i; 
    
    $('.logoTxt').css({
      'transform': 'translate(0px, '+wScroll/2 +' %)'
    });

    if(wScroll > $('.clothesGrid').offset().top -($(window).height()/1.4)){

      
        $('.clothesGrid .itemWrapper').each(function(i){
            console.log(i);

            setTimeout(function(){

                $('.clothesGrid .itemWrapper').eq(i).addClass('isShowing');
             
            }, 150 * (i + 1));
            
        });
    }



  });