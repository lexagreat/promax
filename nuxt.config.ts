// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },
   runtimeConfig: {
      public: {
         baseURL: process.env.BASE_URL || "http://188.225.18.241:8888",
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
});
