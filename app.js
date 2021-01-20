let shoppingCartBtn = document.querySelector('.shopping-cart-btn');
let shoppingCart = document.querySelector('.shopping-cart');

shoppingCartBtn.addEventListener('click', ()=> {
    if(shoppingCart.style.display==="none"){
        shoppingCart.style.display="block";
     } else {
        shoppingCart.style.display="none";
     }
} );

let arrowUp = document.querySelector('.arrow-up');

arrowUp.addEventListener
