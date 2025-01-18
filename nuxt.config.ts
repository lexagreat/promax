// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },
   runtimeConfig: {
      public: {
         baseURL: process.env.BASE_URL || "https://backend.xn----7sbbsydmpeeherg.xn--p1ai",
      },
   },
   app: {
      head: {
         link: [
            {
               rel: "stylesheet",
               href: "https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css",
            },
         ],
         script: [
            {
               src: "/jquery-and-slick.min.js",
               type: "text/javascript",
               // defer: true,
               tagPosition: "bodyClose",
            },
            {
               src: "https://code.jquery.com/ui/1.12.1/jquery-ui.min.js",
               type: "text/javascript",
               // defer: true,
               tagPosition: "bodyClose",
            },
            {
               src: "https://cdnjs.cloudflare.com/ajax/libs/imask/7.6.1/imask.min.js",
               type: "text/javascript",
               // defer: true,
               tagPosition: "bodyClose",
            },
            {
               src: "/script.js",
               type: "text/javascript",
               // defer: true,
               tagPosition: "bodyClose",
            },
         ],
      },
   },
   modules: [
      "@pinia/nuxt",
      "vue-yandex-maps/nuxt"
   ],
   yandexMaps: {
      apikey: '13dcbcc2-99fd-4b4b-8c3b-668751fe2b0f',
      lang: 'ru_RU',
   }
});
