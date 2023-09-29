<script setup>
const props = defineProps({
   userData: {
      type: Object,
      default: () => ({})
   }
})
</script>
<template>
   <div class="user-card">
      <img :src="userData.picture.medium" alt="">
      <div class="user-card__full-name">
         {{ userData.name.first }} {{ userData.name.last }}
      </div>
      <div class="user-card__dob">
         {{ userData.dob.date }}
      </div>
      <div class="user-card__phone">
         {{ userData.phone }}
      </div>
      <div class="user-card__location">
         {{ userData.location.country }}
      </div>
   </div>
</template>
<style lang="scss">
.user-card {
   border: 1px solid rgb(148, 148, 148);
   padding: 10px;
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   align-items: center;
   gap: 10px;
}
</style>