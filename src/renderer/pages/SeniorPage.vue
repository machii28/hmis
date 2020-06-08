<template>
  <div>
    <div class="flex">
      <sidebar-component></sidebar-component>
      <div class="w-full py-2 pl-20">
        <senior-component></senior-component>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from './../components/SidebardComponent/SidebarComponent';
import SeniorComponent from './../components/SeniorComponent/SeniorComponent';

export default {
  name: 'dashboard-page',
  components: {
    SidebarComponent,
    SeniorComponent,
  },
};
</script>

<style lang="scss">
  
</style>