


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

  const toggleBtn = document.querySelector(".sidebarToggle")
  const closeBtn = document.querySelector(".closeBtn");
  const sidebar = document.querySelector(".sidebar")

  toggleBtn.addEventListener("click", function(){
      sidebar.classList.toggle('showSidebar');
      console.log("this works")
  });


  closeBtn.addEventListener("click", function(){
      sidebar.classList.toggle('showSidebar');
      
      console.log("this works too");
  })