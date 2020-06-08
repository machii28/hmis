<template>
  <div>
    <div class="w-full py-5">
      <h1 class="block w-full p-5 text-2xl font-bold">Consultations</h1>

      <div class="card m-4 px-5 rounded-lg">
        <div class="flex">
          <h1 class="text-lg mt-4 inline font-bold">
            Patient Lookup
          </h1>
        </div>

        <div class="flex">
          <div class="w-4/12 p-3">
            <label>Last Name</label>
            <div class="flex">
              <v-select 
                :options="seniors" 
                class="w-full"
                label="full_name"
                @input="selectSenior"
                ></v-select>
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="w-3/12 p-3">
            <img :src="senior.image ? senior.image : 'https://via.placeholder.com/150'" class="mx-auto" width="150px" alt="">
          </div>

          <div class="w-3/12 p-3 relative">
            <h1 class="border-b position absolute w-full" style="bottom: 10px">
              Name: {{ senior.full_name }}
            </h1>
          </div>

          <div class="w-3/12 p-3 relative">
            <h1 class="border-b position absolute w-full" style="bottom: 10px">
              Age: {{ senior.age ? senior.age : '' }}
            </h1>
          </div>

          <div class="w-3/12 p-3 relative">
            <h1 class="border-b position absolute w-full" style="bottom: 10px">
              Birthday: {{ senior.date_of_birth ? senior.date_of_birth : '' }}
            </h1>
          </div>
        </div>

        <div class="card p-5 font-serif">
          <div class="flex">
            <div class="w-full">
              <h1 class="text-lg font-bold text-center">Previous Consultations</h1>
            </div>
          </div>
        </div>

        <div class="card p-5">
          <div class="flex text-center">
            <div class="w-full">
              <table class="table-auto w-full">
                <thead>
                  <tr class="border-b border-gray-500">
                    <td>Disease</td>
                    <td>Remarks</td>
                    <td>Date of Consultation</td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-gray-500 py-4" v-for="(seniorConsultation, index) in consultations" :key="index">
                    <td>{{ seniorConsultation.disease }}</td>
                    <td>{{ seniorConsultation.remarks }}</td>
                    <td>{{ seniorConsultation.date_of_consultation }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="card m-4 px-5 rounded-lg">
        <div class="flex">
          <h1 class="text-lg mt-4 inline font-bold">
            Consultation Form
          </h1>
        </div>

        <div class="flex">
          <div class="w-4/12 p-3">
            <label>Disease</label>
            <v-select 
              :options="diseases" 
              taggable
              label="name"
              @option:created="newOption"
              @input="selectOption"
              ></v-select>
          </div>

          <div class="w-8/12 p-3">
            <label>Remarks</label>
            <textarea v-model="consultation.remarks" cols="30" rows="10" class="input p-3 focus:outline-none"></textarea>
          </div>
        </div>

        <div class="flex">
          <div class="full p-3">
            <button class="button rounded-lg float-right" @click="saveConsultations()">Add Consultation</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./consultation.js"></script>
<style lang="scss" src="./consultation.scss"></style>