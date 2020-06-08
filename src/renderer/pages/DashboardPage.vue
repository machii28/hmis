<template>
  <div>
    <div class="flex">
      <sidebar-component></sidebar-component>
      <div class="w-full py-2 pl-20">
        <dashboard-component></dashboard-component>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from './../components/SidebardComponent/SidebarComponent';
import DashboardComponent from './../components/DashboardComponent/DashboardComponent';

export default {
  name: 'dashboard-page',
  components: {
    SidebarComponent,
    DashboardComponent,
  },
};
</script>

<style lang="scss">
  
</style>