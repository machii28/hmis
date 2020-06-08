<template>
  <div>
    <div class="w-full py-5">
      <h1 class="block w-full p-5 text-2xl">Seniors</h1>

      <div class="card m-4 px-5 rounded-lg" v-if="!isFormActive && !isViewActive">
        <div class="w-full">
          <button class="float-right button px-5 py-2 mt-2 rounded-lg" @click="openForm()">Add Senior</button>
          <button class="float-right button px-5 py-2 mt-2 rounded-lg" @click="print()">Print</button>
        </div>
        <table-component @edit="seniorEdit" @view="seniorView"></table-component>

        <div id="print-table" v-if="showPrint">
          <table class="w-full">
            <thead>
              <tr class="text-center">
                <th class="border border-black">Name</th>
                <th class="border border-black">Date of Birth</th>
                <th class="border border-black">Age</th>
                <th class="border border-black">Sex</th>
                <th class="border border-black">Address</th>
                <th class="border border-black">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(senior, index) in seniors" :key="index">
                <td class="border border-black">{{ `${senior.first_name} ${senior.last_name}` }}</td>
                <td class="border border-black">{{ senior.date_of_birth }}</td>
                <td class="border border-black">{{ senior.age }}</td>
                <td class="border border-black">{{ senior.sex }}</td>
                <td class="border border-black">{{ senior.barangay }}</td>
                <td class="border border-black">{{ senior.civil_status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="m-2 px-2">
        <form-component :id="seniorId" @formClosed="formClosed()" v-if="isFormActive"></form-component>
        <view-component :id="seniorId" @viewClosed="viewClosed()" v-if="isViewActive"></view-component>
      </div>
    </div>
  </div>
</template>

<script src="./senior.js"></script>
<style lang="scss" src="./senior.scss"></style>