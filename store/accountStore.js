import { defineStore } from "pinia";
export const useAccountStore = defineStore("useAccountStore", {
   state: () => ({
      // isLogin: false,
      token: "",
      infoAboutMe: {},
      orders: []
   }),
   actions: {
      async registr(data) {
         const localData = {}
         localData.username = data.email
         localData.password = data.password

         let response = await useBaseFetch("/cabinet/register/", {
            body: data,
            method: "POST",
         });

         console.log('response', response['phone_number']);

         if (response['phone_number']) {
            console.log('make login');
            await this.login(localData);
            return
         }

         if (response.password) {
            return response.password[0]
         }

         if (response.email) {
            return response.email[0]
         }


      },
      async login(data) {
         let response = await useBaseFetch("/cabinet/login/", {
            body: data,
            method: "POST",
         });

         console.log('response', response);

         if (response.token) {
            this.saveToken(response.token);
            return
         }

         if (response.password) {
            return response.password[0]
         }

         if (response.email) {
            return response.email[0]
         }

      },
      logout() {
         // this.isLogin = false;
         this.token = "";
         localStorage.token = "";
      },
      initStore() {
         if (!localStorage.token) {
            localStorage.token = "";
         } else {
            this.saveToken(localStorage.token);
         }
      },
      saveToken(token) {
         localStorage.token = token;
         // this.isLogin = true;
         this.token = token;
      },

      async getInfoAboutMe() {
         let res = await useBaseFetch("/cabinet/me/", {
            headers: {
               Authorization: `Token ${this.token}`,
            },
         });

         if (res) {
            this.infoAboutMe = res
         }
      },
      async updateProfile(form) {
         const res = await useBaseFetch('/cabinet/update/', {
            method: 'PATCH',
            body: form,
            headers: {
              Authorization: `Token ${this.token}`
            }
         })

         if (res) {
            await this.getInfoAboutMe()
         }
      },
      async getOrders() {
         let res = await useBaseFetch("/cabinet/my_orders/", {
            headers: {
               Authorization: `Token ${this.token}`
            }
         })

         if (res) {
            console.log('res', res);
            this.orders = res
         }
         // return res
      },
   },
   getters: {
      isLogin() {
         console.log('islogin', this.token.length || false);
         return this.token.length || false
      }
   }
});
