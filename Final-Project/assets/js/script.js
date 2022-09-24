// Database
const product = [
  {
    id: "1",
    productname: "VOID - MEDIUM/LARGE",
    description: "<p>-Hand-braided and assembled for a truly custom and one-of-a-kind experience</p></br><p>-Adjustable closure to fit a variety of shapes, sizes and ages</p></br><p>  -Patented barrel for comfort and style  -Patented barrel for comfort and style</p></br><p>-One size fits most wrists, 6' to 7.5' in wrist circumference</p></br><p>-100% polyester feels soft and comfortable against your skin</p></br>",
    productimage: "./assets/img/products/demo-product.png",
    price: "$16",
    oldprice: "$20",
    productssold: "1000",
    totalview: "5000",
    isHot: "true",
    producttypeid: "1",
  },
  {
    id: "2",
    productname: "I LOVE U RED - MEDIUM/LARGE",
    description:
      " <p>A symbol that love is love, our I LOVE U bracelet is the perfect gift to yourself (self-love, people) or to anyone else who could use a little extra love, like your bf, gf or bff to name a few. This black braided bracelet features electroplated hardware, a heart logo on barrel and contrast emblems.</p></br>",
    productimage: "./assets/img/products/demo-product.png",
    price: "22",
    oldprice: "18",
    productssold: "1101",
    totalview: "3000",
    isHot: "true",
    producttypeid: "2",
  },
  {
    id: "3",
    productname: "I LOVE U blue - MEDIUM/LARGE",
    description:
      " <p>A symbol that love is love, our I LOVE U bracelet is the perfect gift to yourself (self-love, people) or to anyone else who could use a little extra love, like your bf, gf or bff to name a few. This black braided bracelet features electroplated hardware, a heart logo on barrel and contrast emblems.</p></br>",
    productimage: "./assets/img/products/demo-product.png",
    price: "22",
    oldprice: "17",
    productssold: "1201",
    totalview: "4300",
    isHot: "true",
    producttypeid: "2",
  },
  {
    id: "4",
    productname: "I LOVE U - MEDIUM/LARGE",
    description:
      " <p>A symbol that love is love, our I LOVE U bracelet is the perfect gift to yourself (self-love, people) or to anyone else who could use a little extra love, like your bf, gf or bff to name a few. This black braided bracelet features electroplated hardware, a heart logo on barrel and contrast emblems.</p></br>",
    productimage: "./assets/img/products/demo-product.png",
    price: "22",
    oldprice: "17",
    productssold: "1151",
    totalview: "4200",
    isHot: "true",
    producttypeid: "2",
  },
  {
    id: "5",
    productname: "ONYX II - MEDIUM/LARGE",
    description:
      " <p>A symbol that love is love, our I LOVE U bracelet is the perfect gift to yourself (self-love, people) or to anyone else who could use a little extra love, like your bf, gf or bff to name a few. This black braided bracelet features electroplated hardware, a heart logo on barrel and contrast emblems.</p></br>",
    productimage: "./assets/img/products/demo-product.png",
    price: "20",
    oldprice: "15",
    productssold: "1301",
    totalview: "3900",
    isHot: "flase",
    producttypeid: "3",
  },
  {
    id: "6",
    productname: "KARMA - MEDIUM/LARGE",
    description:" <p>A symbol that love is love, our I LOVE U bracelet is the perfect gift to yourself (self-love, people) or to anyone else who could use a little extra love, like your bf, gf or bff to name a few. This black braided bracelet features electroplated hardware, a heart logo on barrel and contrast emblems.</p></br>",
    productimage: "./assets/img/products/demo-product.png",
    price: "20",
    oldprice: "13",
    productssold: "1111",
    totalview: "5900",
    isHot: "true",
    producttypeid: "3",
  },
  {
    id: "7",
    productname: "MEN'S BRAIDED BRACELET",
    description: " <p>A symbol that love is love, our I LOVE U bracelet is the perfect gift to yourself (self-love, people) or to anyone else who could use a little extra love, like your bf, gf or bff to name a few. This black braided bracelet features electroplated hardware, a heart logo on barrel and contrast emblems.</p></br>",
    productimage: "./assets/img/products/demo-product.png",
    price: "20",
    oldprice: "18",
    productssold: "1120",
    totalview: "5600",
    isHot: "true",
    producttypeid: "3",
  },
  {
    id: "8",
    productname: "ZION II - MEDIUM/LARGE",
    description:
      " <p>A symbol that love is love, our I LOVE U bracelet is the perfect gift to yourself (self-love, people) or to anyone else who could use a little extra love, like your bf, gf or bff to name a few. This black braided bracelet features electroplated hardware, a heart logo on barrel and contrast emblems.</p></br>",
    productimage: "./assets/img/products/demo-product.png",
    price: "20",
    oldprice: "18",
    productssold: "1020",
    totalview: "2000",
    isHot: "flase",
    producttypeid: "2",
  },
  {
    id: "9",
    productname: "GREY MATTER - MEDIUM/LARGE",
    description:
      " <p>A symbol that love is love, our I LOVE U bracelet is the perfect gift to yourself (self-love, people) or to anyone else who could use a little extra love, like your bf, gf or bff to name a few. This black braided bracelet features electroplated hardware, a heart logo on barrel and contrast emblems.</p></br>",
    productimage: "./assets/img/products/demo-product.png",
    price: "20",
    oldprice: "18",
    productssold: "720",
    totalview: "800",
    isHot: "flase",
    producttypeid: "2",
  },
  {
    id: "10",
    productname: "EQUALS",
    description:
      " <p>A symbol that love is love, our I LOVE U bracelet is the perfect gift to yourself (self-love, people) or to anyone else who could use a little extra love, like your bf, gf or bff to name a few. This black braided bracelet features electroplated hardware, a heart logo on barrel and contrast emblems.</p></br>",
    productimage: "./assets/img/products/demo-product.png",
    price: "20",
    oldprice: "20",
    productssold: "620",
    totalview: "810",
    isHot: "flase",
    producttypeid: "3",
  }
];

const producttype = [
  { id: "1", producttypename: "I LOVE U BRACELETS" },
  { id: "2", producttypename: "BEST SELLERS" },
  { id: "3", producttypename: "FEATURED" },
];

// modal variables
// const modal = document.querySelector('[data-modal]');
// const modalCloseBtn = document.querySelector('[data-modal-close]');
// const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// // modal function
// const modalCloseFunc = function () { modal.classList.add('closed') }

// // modal eventListener
// modalCloseOverlay.addEventListener('click', modalCloseFunc);
// modalCloseBtn.addEventListener('click', modalCloseFunc);

// Close button to close modal
const closeButtons = document.getElementsByClassName("modal-close-btn");
for (const button of closeButtons) {
  button.addEventListener("click", function () {
    const modal = button.parentElement.parentElement;
    modal.style.display = "none";
  });
}

// Click overlay to close modal
const overlayDivs = document.getElementsByClassName("modal-close-overlay");
for (const overlayDiv of overlayDivs) {
  overlayDiv.addEventListener("click", function () {
    const modal = overlayDiv.parentElement;
    modal.style.display = "none";
  });
}

// notification toast variables
const notificationToast = document.querySelector("[data-toast]");
const toastCloseBtn = document.querySelector("[data-toast-close]");

// notification toast eventListener
toastCloseBtn.addEventListener("click", function () {
  notificationToast.classList.add("closed");
});

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll(
  "[data-mobile-menu-open-btn]"
);
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll(
  "[data-mobile-menu-close-btn]"
);
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove("active");
    overlay.classList.remove("active");
  };

  mobileMenuOpenBtn[i].addEventListener("click", function () {
    mobileMenu[i].classList.add("active");
    overlay.classList.add("active");
  });

  mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
  overlay.addEventListener("click", mobileMenuCloseFunc);
}

// accordion variables
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    const clickedBtn = this.nextElementSibling.classList.contains("active");

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;

      if (accordion[i].classList.contains("active")) {
        accordion[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");
      }
    }

    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
  });
}

//minicart

var shoppingCart = (function () {
  var cart = [];

  // Constructor
  function Item( productimage, productname, price, oldprice, count) {
    this.productimage = productimage;
    this.productname = productname;
    this.price = price;
    this.oldprice = oldprice;
    this.count = count;
  }

  // Save cart
  function saveCart() {
    sessionStorage.setItem("shoppingCart", JSON.stringify(cart));
  }

  // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem("shoppingCart"));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }

  var obj = {};
  // Add to cart (function đếm Add Item cart)
  obj.addItemToCart = function (productimage, productname, price, oldprice, count) {
    for (var item in cart) {
      if (cart[item].productname === productname) {
        cart[item].count++;
        saveCart();
        return;
      }
    }
    var item = new Item(productimage, productname, price, oldprice, count);
    cart.push(item);
    saveCart();
  };

  // Set count from item
  obj.setCountForItem = function (productname, count) {
    for (var i in cart) {
      if (cart[i].productname === productname) {
        cart[i].count = count;
        break;
      }
    }
  };

  // Remove item cart (dùng cho button giảm số lượng item)
  obj.removeItemCart = function (productname) {
    for (var item in cart) {
      if (cart[item].productname === productname) {
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
  obj.removeAllItemCart = function (productname) {
    for (var item in cart) {
      if (cart[item].productname === productname) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  };

  // Clear cart
  obj.clearCart = function () {
    cart = [];
    saveCart();
  };

  // Count cart  (function đếm Item cart)
  obj.totalCount = function () {
    var totalCount = 0;
    for (var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  };

  // Total All Cart
  obj.totalCart = function () {
    var totalCart = 0;
    for (var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  };

  //List Cart (get List Item trong cart)
  obj.listCart = function () {
    var cartItem = [];
    for (var i in cart) {
      var item = cart[i];
      var itemCart = {};
      for (var j in item) {
        itemCart[j] = item[j];
      }
      itemCart.total = Number(item.price * item.count).toFixed(2);
      cartItem.push(itemCart);
    }
    return cartItem;
  };

  return obj;
})();

// Events
// Add item
$(".add-to-cart").click(function (event) {
  event.preventDefault();
  var productimage = $(this).data("productimage");
  var productname = $(this).data("productname");
  var price = Number($(this).data("price"));
  var oldprice = Number($(this).data("oldprice"));
  shoppingCart.addItemToCart(productimage, productname, price, oldprice, 1);
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
    stringContentCart +=
    "<div class='showcase'>"
       + "<a href='#' class='showcase-img-box'>"
           + "<img src='" + arrCart[i].productimage + "' alt='baby fabric shoes' class='showcase-img' width='75' height='75'>"
       + "</a>"
       + "<div class='showcase-content'>" 
              + "<a href='#'>"
                    + "<h4 class='showcase-title'>" + arrCart[i].productname + "</h4>" 
              + "</a>"
              + "<div class='showcase-rating'>"
                    + "<ion-icon name='star' role='img' class='md hydrated' aria-label='star'></ion-icon>"
                    + "<ion-icon name='star' role='img' class='md hydrated' aria-label='star'></ion-icon>"
                    + "<ion-icon name='star' role='img' class='md hydrated' aria-label='star'></ion-icon>"
                    + "<ion-icon name='star' role='img' class='md hydrated' aria-label='star'></ion-icon>"
                    + "<ion-icon name='star' role='img' class='md hydrated' aria-label='star'></ion-icon>"
              + "</div>"
              + "<div style='display: flex; justify-content: space-between;'>"
                    + "<div class='product-quantity-box'>"
                        + "<button class='minus-item input-group-addon btn btn-primary' data-productname=" + arrCart[i].productname + ">-</button>"
                        + "<input type='number' class='item-count form-control' data-productname='" + arrCart[i].productname + "' value='" + arrCart[i].count + "'>"
                        + "<button class='plus-item btn btn-primary input-group-addon' data-productname=" + arrCart[i].productname + ">+</button>"
                    + "</div>"
                    + "<div class='price-box'>"
                        + "<del> $" + arrCart[i].oldprice +"</del>"
                        + "<p class='price'>$" + arrCart[i].price + "</p>"
                        + "<button class='delete-item btn btn-danger' data-productname=" + arrCart[i].productname + ">X</button>"
                    + "</div>"
              + "</div>"
        + "</div>"
    + "</div>" 
  }

  $(".visible-cart").html(stringContentCart);
  $(".total-cart").html(shoppingCart.totalCart());
  $(".count").html(shoppingCart.totalCount());
}

//delete all item cart
$(".visible-cart").on("click", ".delete-item", function (event) {
  var productname = $(this).data("productname");
  shoppingCart.removeAllItemCart(productname);
  displayCart();
});

// - Số lương item
$(".visible-cart").on("click", ".minus-item", function (event) {
  var productname = $(this).data("productname");
  shoppingCart.removeItemCart(productname);
  displayCart();
});

// + Số lương item
$(".visible-cart").on("click", ".plus-item", function (event) {
  var productname = $(this).data("productname");
  shoppingCart.addItemToCart(productname);
  displayCart();
});

// Item count input
$(".visible-cart").on("change", ".item-count", function (event) {
  var productname = $(this).data("productname");
  var count = Number($(this).val());
  shoppingCart.setCountForItem(productname, count);
  displayCart();
});

// click show and close mini cart
const openBtnCart = document.querySelectorAll("[data-open-btn-cart]");
const openBtnMoblieCart = document.querySelectorAll("[data-open-btn-mobile-cart]");

const miniCart = document.querySelectorAll("[data-mini-cart]");
const closeBtnCart = document.querySelectorAll("[data-close-btn-cart]");
const overlayCart = document.querySelector("[data-overlay]");
for (let i = 0; i < openBtnCart.length; i++) {
  // mobile menu function
  const closeBtnCartFunc = function () {
    miniCart[i].classList.remove("active");
    overlayCart.classList.remove("active");
  };

  openBtnCart[i].addEventListener("click", function () {
    miniCart[i].classList.add("active");
    overlayCart.classList.add("active");
    displayCart();
  });

  openBtnMoblieCart[i].addEventListener("click", function () {
    miniCart[i].classList.add("active");
    overlayCart.classList.add("active");
    displayCart();
  });

  closeBtnCart[i].addEventListener("click", closeBtnCartFunc);
  overlayCart.addEventListener("click", closeBtnCartFunc);
}


var newarrivals = [];
const blocksNewArrivals = document.getElementById("newArrivals");

//New Arrivals
    var stringNewArrivals="";
    for (let i = 0; i < product.length; i++) {
      
       if(product[i].isHot == "true"){
         newarrivals.push(product[i])
        
       }

       
    }
    
    for (let j = 0; j < newarrivals.length; j += 4) {
      let newContainer = document.createElement("div");
      newContainer.classList.add('showcase-container');
      var arr = "";
      arr = newarrivals.slice(j, j + 4);

      console.log(arr);
        for (let q = 0; q < arr.length; q++) {
          stringNewArrivals += "<div class='showcase'>"
                       + "<a href='#' class='showcase-img-box'>"
                                  + "<img src=" + newarrivals[q].productimage + " alt='running & trekking shoes - white' class='showcase-img' width='70'>"
                       + "</a>"
                       + "<div class='showcase-content'>"
                             + "<a href='#'>"
                                   + "<h4 class='showcase-title'>" + newarrivals[q].productname + "</h4>"
                             + "</a>"
                             + "<a href='#' class='showcase-category'>Bracelet</a>"
                             + "<div class='price-box'>"
                                + "<p class='price'>$" + newarrivals[q].price + "</p>"
                             + "</div>"
                       + "</div>"
                    + "</div>"

                    $("#showcase-container-col").html(stringNewArrivals);
                    $("#newArrivals").html(newContainer);

        }
        

       }
     


const blocktrending = document.querySelector("[data-trending]");

const blocktoprated = document.querySelector("[data-top-rated]");

