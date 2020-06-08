<template>
  <div>
    <div class="w-full my-5 dashboard">
      <h1 class="block w-full p-5 text-2xl font-bold">Dashboard</h1>

      <barangay-graph-component></barangay-graph-component>
      <gender-graph-component></gender-graph-component>
      

      <div class="flex">
        <div class="w-full">
          <div class="card mx-4 my-3 p-5 rounded-lg font-bold">
            <h1>Disease</h1>
            <disease-graph-component></disease-graph-component>
          </div>
        </div>
        <div class="w-full">
          <div class="w-full">
            <div class="card mx-4 my-3 p-5 rounded-lg font-bold">
            <h1>Consultations</h1>
              <consultation-graph-component></consultation-graph-component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./dashboard.js"></script>
<style lang="scss" src="./dashboard.scss"></style>