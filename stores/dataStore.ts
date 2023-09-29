export const useDataStore = defineStore('DataStore', {
   state: () => ({
      mockData: {
         email: 'admin@example.com',
         password: 'Qwerty12345'
      },
      userAuth: false,
      usersData: []
   }),

   actions: {
      async getUsersInfo() {
         try {
            const res = await useFetch('https://randomuser.me/api/?results=10')
            this.usersData.push(...res.data.value.results)
         } catch (error) {
            console.log(error)
         }
      },
      logout() {
         this.userAuth = false
         navigateTo('/')
         alert('You logout')
      }
   }
});

if (import.meta.hot) {
   import.meta.hot.accept(acceptHMRUpdate(useDataStore, import.meta.hot));
}