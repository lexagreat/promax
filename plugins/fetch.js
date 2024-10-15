export default defineNuxtPlugin((nuxtApp) => {
   // Переопределяем $fetch, чтобы добавить глобальный baseURL
   nuxtApp.provide("fetch", (url, options = {}) => {
      options.baseURL =
         process.env.API_BASE_URL || "http://188.225.18.241:8080";
      return $fetch(url, options);
   });
});
