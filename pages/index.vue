<script setup>
const store = useDataStore()

const password = ref('')
const email = ref('')

const login = () => {
   if (store.mockData.email !== email.value || store.mockData.password !== password.value) return alert('Email or Password incorrectly')

   store.userAuth = true
   alert('Successful authorization!')
}
</script>
<template>
   <section class="login">
      <div class="wrapper">
         <h1>login to account</h1>
         <form v-if="!store.userAuth" @submit.prevent="login" class="login__form" action="">
            <div class="login__form_block">
               <label for="email">Email</label>
               <input v-model="email" type="email" name="email" id="email">
            </div>
            <div class="login__form_block">
               <label for="password">Password</label>
               <input v-model="password" type="password" name="password" id="password">
            </div>
            <button type="submit">login</button>
         </form>
         <div v-else class="login__success">
            You have successfully logged in
            <button @click="store.logout">Logout</button>
         </div>
      </div>
   </section>
</template>
<style lang="scss">
.login {
   margin-top: 60px;

   & .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   & h1 {
      margin: 0 0 30px 0;
   }

   &__form {
      display: flex;
      flex-direction: column;
      gap: 20px;

      &_block {
         display: flex;
         flex-direction: column;
      }
   }

   &__success {
      text-align: center;
      font-size: 24px;
      font-weight: 800;
      display: flex;
      flex-direction: column;
      gap: 30px;
   }
}
</style>