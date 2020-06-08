<template>
  <div>
    <div class="flex">
      <sidebar-component></sidebar-component>
      <div class="w-full py-2 pl-20">
        <consultation-component></consultation-component>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from './../components/SidebardComponent/SidebarComponent';
import ConsultationComponent from './../components/ConsultationComponent/ConsultationComponent';


export default {
  name: 'consultation-page',
  components: {
    SidebarComponent,
    ConsultationComponent,
  },
};
</script>