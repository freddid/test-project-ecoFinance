export default defineNuxtRouteMiddleware((to, from) => {
   const store = useDataStore()

   if (!store.userAuth) {
      if (process.client) alert('You are not authorized')
      return navigateTo('/')
   }
})