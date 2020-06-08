<template>
  <div>
    <select @change="changeData()" v-model="selected" class="input">
      <option value="weekly">Weekly</option>
      <option value="monthly">Monthly</option>
    </select>
    <apexcharts width="100%" type="bar" :options="options" :series="series"></apexcharts>
  </div>
</template>

<script src="./consultation.js"></script>
<style lang="scss" src="./consultation.scss"></style>