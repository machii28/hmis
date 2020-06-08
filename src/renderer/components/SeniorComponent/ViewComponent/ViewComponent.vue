<template>
  <div>
    <div class="card p-5">
      <div class="flex">
        <div class="w-full">
          <button class="float-right button rounded-lg" @click="print()">
            Print
          </button>
          <button class="float-right button rounded-lg" @click="viewClosed()">
            Back
          </button>
        </div>
      </div>
    </div>
    <div class="card p-20 font-serif view">
      <div id="view">
        <div class="flex">
          <div class="w-full">
            <img src="~@/assets/logo-sanpablo.svg" class="image" alt="" width="150px">
          </div>
        </div>
        <div class="flex">
          <div class="w-full font-serif text-center">
            <h1 class="text-2xl font-bold">Office of the City Mayor</h1>
            <h1 class="text-xl italic">Unit for Senior Citizens Affairs</h1>
            <h1 class="text-xl italic">San Pablo City</h1>
          </div>
        </div>
        <div class="flex mt-5">
          <div class="w-full text-center">
            <h1 class="text-lg font-serif mt-5 text-xl">Registration Form</h1>
          </div>
        </div>
        <div class="flex">
          <div class="w-full">
            <img :src="senior.image" alt="" class="float-right" width="150px">
          </div>
        </div>
        <div class="flex mt-5">
          <div class="w-full mt-10">
            <h1 class="w-full float-left text-xl block border-b border-gray-500">
              Name: 
              <span class="mx-20 text-hairline">{{ senior.last_name }},</span>
              <span class="mx-20 text-hairline">{{ senior.first_name }},</span>
              <span class="mx-20 text-hairline">{{ senior.middle_name }}</span>
            </h1>
            <h1 class="w-full float-left text-xl block ml-20">
              <span class="mx-20 text-hairline text-sm">(Surname)</span>
              <span class="mx-20 text-hairline text-sm">(Firstname)</span>
              <span class="mx-20 text-hairline text-sm">(Middlename)</span>
            </h1>
          </div>
        </div>
        <div class="flex mt-5">
          <div class="w-4/12">
            <h1 class="w-full border-b border-gray-500 text-xl">
              Date of Birth: 
              <span class="mx-20 text-hairline">{{ senior.date_of_birth }}</span>
            </h1>
          </div>
          <div class="w-4/12">
            <h1 class="w-full border-b border-gray-500 text-xl">
              Age: 
              <span class="mx-20 text-hairline">{{ senior.age }}</span>
            </h1>
          </div>
          <div class="w-4/12">
            <h1 class="w-full border-b border-gray-500 text-xl">
              Sex: 
              <span class="mx-20 text-hairline">{{ senior.sex }}</span>
            </h1>
          </div>
        </div>
        <div class="flex mt-5">
          <div class="w-6/12">
            <h1 class="w-full border-b border-gray-500 text-xl">
              Place of Birth: 
              <span class="mx-20 text-hairline">{{ senior.place_of_birth }}</span>
            </h1>
          </div>
          <div class="w-6/12">
            <h1 class="w-full border-b border-gray-500 text-xl">
              Civil Status:
              <span class="mx-20 text-hairline">{{ senior.civil_status }}</span>
            </h1>
          </div>
        </div>
        <div class="flex mt-5">
          <div class="w-full">
            <h1 class="w-full border-b border-gray-500 text-xl">
              Address: 
              <span class="mx-20 text-hairline">{{ senior.address }}</span>
              <span class="mx-20 text-hairline">Brgy. {{ senior.barangay }}</span>
            </h1>
          </div>
        </div>
        <div class="flex mt-5">
          <div class="w-6/12">
            <h1 class="w-full border-b border-gray-500 text-xl">
              Telephone No: 
              <span class="mx-20 text-hairline">{{ senior.phone_number }}</span>
            </h1>
          </div>
          <div class="w-6/12">
            <h1 class="w-full border-b border-gray-500 text-xl">
              Educational Attainment: 
              <span class="mx-20 text-hairline">{{ senior.educational_attainment }}</span>
            </h1>
          </div>
        </div>
        <div class="flex mt-5">
          <div class="w-full">
            <h1 class="w-full border-b border-gray-500 text-xl">
              Occupation: 
              <span class="mx-20 text-hairline">{{ senior.occupation }}</span>
            </h1>
          </div>
        </div>
        <div class="flex mt-5">
          <div class="w-6/12">
            <h1 class="w-full border-b border-gray-500 text-xl">
              Other Skill: 
              <span class="mx-20 text-hairline">{{ senior.other_skill }}</span>
            </h1>
          </div>
          <div class="w-6/12">
            <h1 class="w-full border-b border-gray-500 text-xl">
              Annual Income: 
              <span class="mx-20 text-hairline">{{ senior.annual_income }}</span>
            </h1>
          </div>
        </div>
        
        
        <div class="flex mt-5">
          <div class="w-full text-center">
            <h1 class="text-lg font-serif mt-5 text-xl">Family Composition</h1>
          </div>
        </div>

        <div class="flex mt-10">
          <div class="w-full text-center">
            <table class="table-auto w-full">
              <thead>
                <tr class="border-b border-gray-500">
                  <td>Name</td>
                  <td>Relationship</td>
                  <td>Age</td>
                  <td>Civil Status</td>
                  <td>Occupation</td>
                  <td>Income</td>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-500 py-4" v-for="(family, index) in senior.family_composition" :key="index">
                  <td>{{ family.name }}</td>
                  <td>{{ family.relationship }}</td>
                  <td>{{ family.age }}</td>
                  <td>{{ family.civil_status }}</td>
                  <td>{{ family.occupation }}</td>
                  <td>{{ family.income }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="flex mt-5">
          <div class="w-full text-center">
            <h1 class="text-lg font-serif mt-5 text-xl">Membership to Senior Citizen Association</h1>
          </div>
        </div>

        <div class="flex">
          <div class="w-full">
            <h1 class="w-full border-b border-gray-500 text-xl">
              Name of Association:  
              <span class="mx-20 text-hairline">{{ senior.senior_citize_membership.name }}</span>
            </h1>
          </div>
        </div>

        <div class="flex">
          <div class="w-full">
            <h1 class="w-full border-b border-gray-500 text-xl">
              Address of Association:  
              <span class="mx-20 text-hairline">{{ senior.senior_citize_membership.address }}</span>
            </h1>
          </div>
        </div>

        <div class="flex">
          <div class="w-6/12">
            <h1 class="w-full border-b border-gray-500 text-xl">
              Date of Membership: 
              <span class="mx-20 text-hairline">{{ senior.senior_citize_membership.date_of_membership }}</span>
            </h1>
          </div>
          <div class="w-6/12">
            <h1 class="w-full border-b border-gray-500 text-xl">
              Position: 
              <span class="mx-20 text-hairline">{{ senior.senior_citize_membership.position }}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./view.js"></script>

<style lang="scss" src="./view.scss"></style>