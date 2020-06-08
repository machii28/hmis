<template>
  <div>
    <div class="flex">
      <sidebar-component></sidebar-component>
      <div class="w-full pl-20 px-2">
        <div class="flex">
          <div class="w-full pt-5">
            <div class="m-4">
              <h1 class="text-xl font-bold">Healthcare Information Management System</h1>
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="w-full">
            <div class="card rounded-lg m-4 px-5">
              <h1 class="text-xl font-hairline p-4">
                A health information system (HIS) refers to a system designed to manage healthcare data. This includes systems that collect, store, manage and transmit a patient’s electronic medical record (EMR), a hospital’s operational management or a system supporting healthcare policy decisions.
              </h1>
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="w-full">
            <div class="card rounded-lg m-4 px-5">
              <h1 class="text-xl font-hairline p-4">
                Health information systems also include those systems that handle data related to the activities of providers and health organizations. As an integrated effort, these may be leveraged to improve patient outcomes, inform research, and influence policy-making and decision-making. Because health information systems commonly access, process, or maintain large volumes of sensitive data, security is a primary concern.
              </h1>
            </div>
          </div>
        </div>

        <div>
          <div class="flex">
            <div class="w-full pt-5">
              <div class="m-4">
                <h1 class="text-xl font-bold">Mission</h1>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="w-full">
              <div class="card rounded-lg m-4 px-5">
                <h1 class="text-xl font-hairline p-4">
                  Helping The Senior Citizens Age Gracefully
                </h1>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div class="flex">
            <div class="w-full pt-5">
              <div class="m-4">
                <h1 class="text-xl font-bold">Vission</h1>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="w-full">
              <div class="card rounded-lg m-4 px-5">
                <h1 class="text-xl font-hairline p-4">
                  Society of Respected and Valued senior Citizens of San Pablo City
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="flex">
            <div class="w-full pt-5">
              <div class="m-4">
                <h1 class="text-xl font-bold">Goal</h1>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="w-full">
              <div class="card rounded-lg m-4 px-5">
                <h1 class="text-xl font-hairline p-4">
                  To enrich the physical, mental and social well-being of all Senior Citizens in our City
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from './../components/SidebardComponent/SidebarComponent.vue';

export default {
  name: 'about-page',
  components: {
    SidebarComponent,
  },
};
</script>

<style lang="scss">
  
</style>