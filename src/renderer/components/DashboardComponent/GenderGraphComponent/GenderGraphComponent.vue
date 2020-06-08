<template>
  <div>
    <div class="flex">
        <div class="card w-6/12 mx-4 p-5 rounded-lg font-bold">
          <h1>Gender Ratio</h1>

          <div class="w-full">
            <apexcharts width="70%" class="mx-auto" type="donut" :options="genderOptions" :series="genderSeries"></apexcharts>
          </div>
        </div>
        <div class="card w-6/12 mx-4 p-5 rounded-lg font-bold">
          <h1>Age Ratio</h1>
          <div class="w-full">
            <apexcharts width="70%" class="mx-auto" type="donut" :options="ageOptions" :series="ageSeries"></apexcharts>
          </div>
        </div>
      </div>
  </div>
</template>

<script src="./gender.js"></script>
<style lang="scss" src="./gender.scss"></style>