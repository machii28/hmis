<template>
  <div>
    <div class="flex">
      <div class="card w-full mx-4 my-3 p-5 rounded-lg font-bold">
        <h1>No. of Seniors in San Pablo City</h1>
        
        <div class="w-6/12 mx-auto">
          <apexcharts width="80%" type="donut" :options="options" :series="series"></apexcharts>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./brgygraph.js"></script>
<style lang="scss" src="./brgygraph.scss"></style>