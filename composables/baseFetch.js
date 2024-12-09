export async function useBaseFetch(request, opts) {
   const config = useRuntimeConfig();

   try {
      let myRequest = await $fetch(request, {
         baseURL: config.public.baseURL,
         ...opts,
      });

      return myRequest;
   } catch (err) {
      if (err.data) {
         return err.data
      }

      return err;
   }
}
