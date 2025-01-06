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

export function setProductCount(slug, count) {
   let cart = JSON.parse(localStorage.cart);
   cart.forEach((item) => {
      if (item.slug == slug) {
         item.count = count;
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
export function getSumOfProducts() {
   let cart = JSON.parse(localStorage.cart);
   let sum = 0
   if (!cart.length) {
      return 0
   }

   for (let product of cart) {
      const sumOfProduct = product.count * product.price * product.squared_metres
      sum += sumOfProduct
   }

   return sum
}
export function getCountOfProducts() {
   const cart = JSON.parse(localStorage.cart);
   return cart.length
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
export function getFullPrice() {
   const cart = JSON.parse(localStorage.cart);
   let res = 0;

   for (const product of cart) {
      if (product.squared_metres) {
         res += product.price * product.count * product.squared_metres
      } else {
         if (product.artikulVolume) {
            const volumePrice = product.volume.filter((volume) => Number(volume.artikul) === product.artikulVolume)[0].price
            res += volumePrice * product.count
         } else {
            res += product.price * product.count
         }
      }
   }

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
