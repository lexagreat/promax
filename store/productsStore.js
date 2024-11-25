import { defineStore } from "pinia";
import { useAccountStore } from "./accountStore";

export const useProductsStore = defineStore("useProductsStore", {
   state: () => ({
      favoriteProducts: [],
      orders: []
   }),
   actions: {
      async getFavoriteProducts() {
         const accountStore = useAccountStore()
         
         let favoriteProducts = await useBaseFetch("/catalog/favorite-get/", {
            method: "GET",
            headers: {
               Authorization: `Token ${accountStore.token}`
            }
         });
         if (favoriteProducts.length) {
            this.favoriteProducts = favoriteProducts
         }
      },
      async addFavoriteProduct(productId, product) {
         const accountStore = useAccountStore()

         const res = await useBaseFetch("/catalog/favorite-add/", {
            method: "POST",
            body: { productId },
            headers: {
               Authorization: `Token ${accountStore.token}`
            }
         });

         if (res.result === true) {
            this.favoriteProducts.push(product)
         }
      },
      async deleteFavoriteProduct(productId) {
         const accountStore = useAccountStore()

         let res = await useBaseFetch("/catalog/favorite-delete/", {
            method: "DELETE",
            body: { productId },
            headers: {
               Authorization: `Token ${accountStore.token}`
            }
         });

         if (res.result === true) {
            const index = this.favoriteProducts.findIndex((product) => product.id === productId)
            this.favoriteProducts.splice(index, 1)
         }
      },
      async toggleFavoriteProduct(productId, product) {
         if (this.isProductInFavorite(productId)) {
           await this.deleteFavoriteProduct(productId)
         } else {
           await this.addFavoriteProduct(productId, product)
         }
      },
      async makeOrder(form) {
         const accountStore = useAccountStore()
         
         let res = await useBaseFetch("/order/product/", {
            method: "POST",
            body: form,
            headers: {
               Authorization: `Token ${accountStore.token}`
            }
         })

         return res
      },
   },
   getters: {
      isProductInFavorite(state) {
         return (productId) => {
            if (!state.favoriteProducts.length) return false
            return state.favoriteProducts.some((product) => product.id === productId)
         }
      }
   }
});
