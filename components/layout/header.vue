<script setup>
const menu = [
   { name: 'Login', link: '/' },
   { name: 'Public', link: '/public' },
   { name: 'Protected', link: '/protected' },
]
</script>
<template>
   <header class="header">
      <div class="wrapper">
         <nav class="header__menu">
            <ul>
               <li class="header__li" v-for="el in menu" :key="el.name">
                  <nuxt-link :to="el.link">{{ el.name }}</nuxt-link>
               </li>
            </ul>
         </nav>
      </div>
   </header>
</template>
<style lang="scss">
.header {
   margin: 0 auto;
   padding: 30px 0;

   &__menu ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      gap: 30px;

      & li a {
         color: #000;
         font-weight: 700;
         text-decoration: none;
         font-size: 20px;
         text-transform: uppercase;
         transition: .3 all;

         &:hover {
            opacity: .6;
         }
      }
   }
}
</style>