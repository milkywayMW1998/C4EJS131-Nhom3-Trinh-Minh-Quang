'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}


//minicart

var shoppingCart = (function() {

  var cart = [];
  
  // Constructor
  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
  
  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  
  // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }
  
  var obj = {};
  // Add to cart (function đếm Add Item cart)
  obj.addItemToCart = function(name, price, count) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  };

  // Set count from item
  obj.setCountForItem = function (name, count) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };

  // Total All Cart
  obj.totalCart = function(){
     var totalCart = 0;
     for(var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  };

  // Count cart  (function đếm Item cart)
  obj.totalCount = function() {
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

// Remove item cart (dùng cho button giảm số lượng item)
obj.removeItemCart = function (name) {
  for (var item in cart) {
    if (cart[item].name === name) {
      cart[item].count--;
      if (cart[item].count === 0) {
        cart.splice(item, 1);
      }
      break;
    }
  }
  saveCart();
};

// Remove All item cart ( delete tất cả item của sản phẩm đã chọn)
obj.removeAllItemCart = function(name){
  for (var item in cart) {
    if (cart[item].name === name) {
      cart.splice(item, 1);
      break;
    }
  }
  saveCart();
};

// Clear cart
obj.clearCart = function() {
  cart = [];
  saveCart();
};
  

//List Cart (get List Item trong cart)
obj.listCart = function(){
   var cartItem = [];
   for(var i in cart){
     var item = cart[i];
     var itemCart = {};
     for(var j in item){
      itemCart[j] =item[j];
     }
     itemCart.total = Number(item.price * item.count).toFixed(2);
     cartItem.push(itemCart)
   }
   return cartItem;
};


  return obj;
})();



// Events
// Add item
$('.add-to-cart').click(function(event) {
  event.preventDefault();
  var name = $(this).data('name');
  var price = Number($(this).data('price'));
  shoppingCart.addItemToCart(name, price, 1);
  displayCart();
});


// Clear items
$(".clear-cart").click(function () {
  shoppingCart.clearCart();
  displayCart();
});

function displayCart() {
  var arrCart = shoppingCart.listCart();
  var stringContentCart = "";
    for (var i in arrCart) {
      stringContentCart += "<tr>"
      +   "<td>" + arrCart[i].name + "</td>" 
      +   "<td>(" + arrCart[i].price + ")</td>"
      +   "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + arrCart[i].name + ">-</button>"
      +   "<input type='number' class='item-count form-control' data-name='" + arrCart[i].name + "' value='" + arrCart[i].count + "'>"
      +      "<button class='plus-item btn btn-primary input-group-addon' data-name=" + arrCart[i].name + ">+</button></div></td>"
      +    "<td>" + arrCart[i].total + "</td>" 
      +    "<td><button class='delete-item btn btn-danger' data-name=" + arrCart[i].name + ">X</button></td>"
      
      +  "</tr>";
    }
    


  $('.visible-cart').html(stringContentCart);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.count').html(shoppingCart.totalCount());
}

$('.visible-cart').on("click", ".delete-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeAllItemCart(name);
  displayCart();
});


// - Số lương item
// $('.visible-cart').on("click", ".minus-item", function(event) {
//   var name = $(this).data('name');
//   shoppingCart.removeItemCart(name);
//   displayCart();
// });

$('minus-item').click(function() {
  alert("ok");
  var name = $(this).data('name');
  shoppingCart.removeItemCart(name);
  displayCart();
});

// + Số lương item
// $('.visible-cart').on("click", ".plus-item", function(event) {
//   var name = $(this).data('name');
//   shoppingCart.addItemToCart(name);
//   displayCart();
// });

$('plus-item').click(function() {
  alert("ok");
  var name = $(this).data('name');
  shoppingCart.addItemToCart(name);
  displayCart();
});

// Item count input
$('.visible-cart').on("change", ".item-count", function(event) {
   var name = $(this).data('name');
   var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});


//button






// Get the modal
var cartModal = document.getElementById("cartModal");

// Get the button that opens the modal
var btn = document.getElementById("cart-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  cartModal.style.display = "block";
  displayCart();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  cartModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == cartModal) {
    cartModal.style.display = "none";
  }
}