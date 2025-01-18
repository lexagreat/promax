export default defineNuxtPlugin((nuxtApp) => {
   // Переопределяем $fetch, чтобы добавить глобальный baseURL
   nuxtApp.provide("fetch", (url, options = {}) => {
      options.baseURL =
         process.env.API_BASE_URL || "https://backend.xn----7sbbsydmpeeherg.xn--p1ai";
      return $fetch(url, options);
   });
});
