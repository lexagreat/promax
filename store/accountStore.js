import { defineStore } from "pinia";
export const useAccountStore = defineStore("useAccountStore", {
   state: () => ({
      isLogin: false,
      token: "",
   }),
   actions: {
      async registr(data) {
         const localData = data
         localData.username = data.name
         delete(localData.name)

         let response = await useBaseFetch("/cabinet/register", {
            body: data,
            method: "POST",
         });

         if (response.name && response.name === 'FetchError') {
            return 'Пользователь с таким email уже существует'
          }

         if (response.email) {
            let logres = await this.login(localData);
            return logres;
         }
      },
      async login(data) {
         let response = await useBaseFetch("/cabinet/login", {
            body: data,
            method: "POST",
         });

         console.log('response', response.name);

         if (response.name && response.name === 'FetchError') {
            return 'Пользователь с таким email не существует'
         }

         if (response.token) {
            this.saveToken(response.token);
            return true;
         }
      },
      logout() {
         this.isLogin = false;
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
         this.isLogin = true;
         this.token = token;
      },

      async getInfoAboutMe() {
         let response = await useBaseFetch("/cabinet/me", {
            headers: {
               Authorization: `Token ${this.token}`, // добавляем токен авторизации
            },
         });
         return response;
      },
   },
});
