export function addProductToCart(obj) {
   let cart = JSON.parse(localStorage.cart);
   if (!isAlreadyInCart(obj.slug)) {
      obj.count = 1;
      cart.push(obj);
   } else {
      cart.forEach((item) => {
         if (item.slug == obj.slug) {
            item.count++;
         }
      });
   }
   localStorage.cart = JSON.stringify(cart);
}

export function plusProductCount(slug) {
   let cart = JSON.parse(localStorage.cart);
   cart.forEach((item) => {
      if (item.slug == slug) {
         item.count++;
      }
   });
   localStorage.cart = JSON.stringify(cart);
}

export function minusProductCount(slug) {
   let cart = JSON.parse(localStorage.cart);
   cart.forEach((item) => {
      if (item.slug == slug) {
         item.count--;
      }
   });
   localStorage.cart = JSON.stringify(cart);
}
export function getProductCount(slug) {
   let cart = JSON.parse(localStorage.cart);
   let count = 0;
   cart.forEach((item) => {
      if (item.slug == slug) {
         count = item.count;
      }
   });
   return count;
}
export function getProductFromCart(slug) {
   let object = {};
   let cart = JSON.parse(localStorage.cart);
   cart.forEach((item) => {
      if (item.slug == slug) {
         object = item;
      }
   });
   return object;
}
export function isAlreadyInCart(slug) {
   let isInCartAlready = false;
   let cart = JSON.parse(localStorage.cart);
   cart.forEach((item) => {
      if (item.slug == slug) {
         isInCartAlready = true;
      }
   });
   return isInCartAlready;
}

export function getCart() {
   if (!localStorage.cart) return [];
   return JSON.parse(localStorage.cart);
}
export function removeProductFromCart(slug) {
   let cart = JSON.parse(localStorage.cart);
   localStorage.cart = JSON.stringify([]);
   cart.forEach((product, index) => {
      if (product.slug == slug) {
         cart.splice(index, 1);
      }
   });

   localStorage.cart = JSON.stringify(cart);
}
export function clearCart() {
   localStorage.cart = JSON.stringify([]);
}
export function getFullPrice(products) {
   let res = 0;

   products.forEach((product) => {
      let value = product.price;
      if (typeof value == "number") {
         res += value * product.count;
      } else {
         res += Number(value.replace(/\s+/g, "")) * product.count;
      }
   });
   return res;
}
export function recordCart(products) {
   localStorage.cart = JSON.stringify([]);
   localStorage.cart = JSON.stringify(products);
}

export function initCart() {
   if (localStorage?.cart) return;
   localStorage.cart = JSON.stringify([]);
}
