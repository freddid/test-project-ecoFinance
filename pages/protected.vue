<script setup>
const store = useDataStore()
definePageMeta({
   middleware: ["auth"]
})

if (!store.usersData.length) {
   store.getUsersInfo()
}
</script>
<template>
   <section class="protected">
      <div class="wrapper">
         <div class="protected__title">
            <h1>Protected page</h1>
            <button @click="store.logout">Logout</button>
         </div>
         <div class="protected__cards" v-if="store.usersData.length">
            <BlockUserCard v-for="userData in store.usersData" :key="userData.id.value" :user-data="userData" />
         </div>
         <div class="protected__Logout">
            <button @click="store.getUsersInfo">get next 10 users data</button>
         </div>
      </div>
   </section>
</template>
<style lang="scss">
.protected {
   margin-top: 60px;
   padding-bottom: 60px;

   &__title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & h1 {
         text-align: center;
      }
   }

   &__Logout {
      margin-top: 40px;
      display: flex;
      justify-content: center;
   }

   &__cards {
      display: flex;
      flex-direction: column;
      gap: 10px;
   }
}
</style>