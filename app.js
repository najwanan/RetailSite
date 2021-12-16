


$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    var i; 
    
    $('.logoTxt').css({
      'transform': 'translate(0px, '+wScroll/2 +' %)'
    });

    if(wScroll > $('.clothesGrid').offset().top -($(window).height()/1.4)){

      
        $('.clothesGrid .itemWrapper').each(function(i){
      

            setTimeout(function(){

                $('.clothesGrid .itemWrapper').eq(i).addClass('isShowing');
             
            }, 150 * (i + 1));
            
        });
    }



  });

  const toggleBtn = document.querySelector(".sidebarToggle")
  const closeBtn = document.querySelector(".closeBtn");
  const sidebar = document.querySelector(".sidebar");
  let carts = document.querySelectorAll('.addCart');
  const cartNum = document.querySelector('.cart span')
  let productNumbers = localStorage.getItem('cartNumbers');

  let products = [
      {
          name: 'Hooded Sweater',
          tag: 'hoodedSweater',
          price: 60,
          inCart: 0
       },

     {
        name: 'Lounge Sweatshirt',
        tag: 'loungeSweatshirt',
        price: 45,
        inCart: 0
     },

     {
        name: 'Ribbed Longsleeve',
        tag: 'ribbedLongsleeve',
        price: 35,
        inCart: 0
     },

     {
        name: 'Hooded Ribbed Sweatshirt',
        tag: 'hoodedRibbedSweatshirt',
        price: 55,
        inCart: 0
     },

     {
        name: 'Boucle Sweater',
        tag: 'boucleSweater',
        price: 65,
        inCart: 0
     },

     {
        name: 'Graphic Hoodie',
        tag: 'graphicHoodie',
        price: 60,
        inCart: 0
     },
     

     {
        name: 'Long Cardigan',
        tag: 'longCardigan',
        price: 75,
        inCart: 0
     },

     {
        name: 'Cable Sweater Vest',
        tag: 'cableSweaterVest',
        price: 55,
        inCart: 0
     },

    

     {
        name: 'Terry Loungewear Set',
        tag: 'terryLoungewear',
        price: 95,
        inCart: 0
     },



 ]


  toggleBtn.addEventListener("click", function(){
      sidebar.classList.toggle('showSidebar');
      console.log("this works")
  });


  closeBtn.addEventListener("click", function(){
      sidebar.classList.toggle('showSidebar');
      
      console.log("this works too");
  })

  for (let i=0; i < carts.length; i++){
      carts[i].addEventListener('click', ()=>{
          cartNumbers(products[i]);
          totalCost(products[i]);
      } )
  }

  function onLoadCartNumbers(){
    

      if(productNumbers){
          cartNum.textContent = productNumbers;
      }
  }

  function cartNumbers(product){

      
   
   
     
      productNumbers = parseInt(productNumbers);

      if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        cartNum.textContent = productNumbers + 1; 
        
        
      } else{
        localStorage.setItem('cartNumbers', 1);
        cartNum.textContent = 1
      }
    

      setItems(product);
    
  }

  function setItems(product){

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    

    if (cartItems !=null){
        
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems, 
                [product.tag]: product
            }
        }

        cartItems[product.tag].inCart += 1;
    } else {
     product.inCart = 1;
     cartItems = {
         [product.tag]: product
       }  

    }
   
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

  }

  function totalCost(product){
     
      let cartTotal = localStorage.getItem('totalCost')

    

      if(cartTotal != null){
        cartTotal = parseInt(cartTotal);
          localStorage.setItem("totalCost", cartTotal + product.price);
         
      } else {
          localStorage.setItem("totalCost", product.price);
      }

  }

  function displayCart(){
     let cartItems = localStorage.getItem("productsInCart");
     cartItems = JSON.parse(cartItems);
     let productContainer = document.querySelector(".productContainer");
   
     if(cartItems && productContainer){
         productContainer.innerHTML = " ";
         Object.values(cartItems).map(item => {

             productContainer.innerHTML += `
             <div class="product">
             <ion-icon name="trash-outline"></ion-icon>
             <img src="./assets/${item.tag}.jpeg"></img>
             <span>${item.name}</span>
          
            </div> 
   
            <div class= "qauntity">
            <span>${item.inCart}</span>
         
         </div>

         <div class= "total">

         $${item.inCart * item.price}.00
         </div>
            
            
            
            `

        });
   }
             
             
            
            

  }

  onLoadCartNumbers();

  displayCart();