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
let arrowDown = document.querySelector('.arrow-down');
let items = document.querySelectorAll('.item');
let currentItem = 0;

arrowUp.addEventListener('click', () => {
   if(currentItem !== 0){
      items[4].style.display = 'none';
      items[1].style.display = 'flex';
      currentItem = 0;
   } else {
      items[3].style.display = 'none';
      items[0].style.display = 'flex';
      currentItem--;
   }
});

arrowDown.addEventListener('click', () => {
   if(currentItem == 0){
       items[0].style.display = 'none';
       items[3].style.display = 'flex';
       currentItem ++;
   } else {
      items[1].style.display = 'none';
      items[4].style.display = 'flex';
      currentItem++;
   }
});
