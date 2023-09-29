<script setup>
const personalInfo = {
   'first name': 'Болтиев',
   'last name': 'Дауд',
   email: 'fredded21@gmail.com',
}
const workingExperience = 3
const projectsDone = ['Artpole', 'galaxydust', 'iat', 'IT-Pro', 'SasoriPad']
const technologyStack = ['JS', 'Nuxt', 'Vue', 'PHP', 'Tailwind', 'Bootstrap', 'React', 'Webpack']
</script>
<template>
   <section class="public">
      <div class="wrapper">
         <h1>User info</h1>
         <div class="public__blocks">
            <div class="public__user">
               <h2>Personal info</h2>
               <div class="user__info" v-for="(info, k) in personalInfo" :key="k" personalInfo>
                  <span>{{ k }}</span>
                  <span>{{ info }}</span>
               </div>
            </div>
            <div class="public__experience">
               <h2>Working experience</h2>
               <div class="experience__year">{{ workingExperience }} года</div>
            </div>
            <div class="public__projects">
               <h2>Projects done</h2>
               <div class="projects__done">
                  <span v-for="project in projectsDone" :key="project">{{ project }}</span>
               </div>
            </div>
            <div class="public__technology">
               <h2>Technology stack</h2>
               <div class="technology__Stack">
                  <span v-for="technology in technologyStack" :key="technology">{{ technology }}</span>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
<style lang="scss">
.public {
   margin-top: 60px;

   & h1 {
      text-align: center;
   }

   &__blocks>div {
      border-bottom: 1px solid rgb(147, 147, 147);
      padding-bottom: 10px;
   }

   & .user__info {
      display: flex;
      max-width: 300px;
      justify-content: space-between;
   }

   & .projects__done,
   & .technology__Stack {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
   }
}
</style>