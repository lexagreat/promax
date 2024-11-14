import { defineStore } from "pinia";
import { useAccountStore } from "./accountStore";

export const useProductsStore = defineStore("useProductsStore", {
   state: () => ({
      favoriteProducts: []
   }),
   actions: {
      async getFavoriteProducts() {
         const accountStore = useAccountStore()
         let favoriteProducts = await useBaseFetch("/catalog/favorite-get", {
            method: "GET",
            headers: {
               Authorization: `Token ${accountStore.token}`
            }
         });
         console.log('favoriteProducts', favoriteProducts);
         if (favoriteProducts.length) {
            this.favoriteProducts = favoriteProducts
         }
      },
      async addFavoriteProduct(productId, product) {
         const accountStore = useAccountStore()
         console.log('token', accountStore.token);

         const res = await useBaseFetch("/catalog/favorite-add", {
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

         let res = await useBaseFetch("/catalog/favorite-delete", {
            method: "DELETE",
            body: { productId },
            headers: {
               Authorization: `Token ${accountStore.token}`
            }
         });
         console.log('res', res);
         if (res.result === true) {
            const index = this.favoriteProducts.findIndex((product) => product.id === productId)
            this.favoriteProducts.splice(index, 1)
         }
         console.log('this.favoriteProducts', this.favoriteProducts);
      },
      async toggleFavoriteProduct(productId, product) {
         console.log('toggle', productId)
         if (this.isProductInFavorite(productId)) {
           console.log('delete')
           await this.deleteFavoriteProduct(productId)
         } else {
           console.log('add')
           await this.addFavoriteProduct(productId, product)
         }
      }
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
