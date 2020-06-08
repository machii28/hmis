<template>
  <div class="form">
    <div class="flex card rounded-lg p-4">
      <div class="w-full">
        <h1 class="text-lg inline font-bold">
          Registration Form
        </h1>
        <button class="button px-4 py-20 rounded-lg float-right" @click="clickSave()">Save</button>
        <button class="button px-4 py-20 rounded-lg float-right" @click="closeForm()">Back</button>
      </div>
    </div>
    <div class="flex card rounded-lg p-4">
      <div class="w-full p-3">
        <div class="float-right">
          <img src="~@/assets/photo.png" id="imgUpload" width="150px" height="150px">
          <input type="file" class="pb-2 pt-0 input focus:outline-none" style="width: 150px; margin-top: 10px;" accept="image/*" @change="avatarUpload">
        </div>
      </div>
    </div>
    <div class="flex card rounded-lg p-4">
      <div class="w-4/12 p-3">
        <label>First Name *</label>
        <input v-model="senior.first_name" type="text" placeholder="Juan" class="pb-2 pt-0 input focus:outline-none">
      </div>
      <div class="w-4/12 p-3">
        <label>Middle Name</label>
        <input v-model="senior.middle_name" type="text" placeholder="Bautista" class="pb-2 pt-0 input focus:outline-none">
      </div>
      <div class="w-4/12 p-3">
        <label>Last Name *</label>
        <input v-model="senior.last_name" type="text" placeholder="Dela Cruz" class="pb-2 pt-0 input focus:outline-none">
      </div>
    </div>
    <div class="flex card rounded-lg p-4">
      <div class="w-4/12 p-3">
        <label>Date of Birth *</label>
        <input v-model="senior.date_of_birth" type="date" class="pb-2 pt-0 input focus:outline-none">
      </div>
      <div class="w-4/12 p-3">
        <label>Age *</label>
        <input type="number" v-model="senior.age" class="pb-2 pt-0 input focus:outline-none">
      </div>
      <div class="w-4/12 p-3">
        <label>Gender</label>
        <select v-model="senior.sex" class="pb-2 pt-0 input focus:outline-none">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
    </div>
    <div class="flex card rounded-lg p-4">
      <div class="w-6/12 p-3">
        <label>Place of Birth</label>
        <input v-model="senior.place_of_birth" type="text" class="pb-2 pt-0 input focus:outline-none">
      </div>
      <div class="w-6/12 p-3">
        <label>Civil Status</label>
        <select v-model="senior.civil_status" class="pb-2 pt-0 input focus:outline-none">
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Widowed">Widowed</option>
          <option value="Seperated">Seperated</option>
        </select>
      </div>
    </div>
    <div class="flex card rounded-lg p-4">
      <div class="w-6/12 p-3">
        <label>Address</label>
        <textarea v-model="senior.address" rows="2" class="pb-2 pt-0 input focus:outline-none"></textarea>
      </div>
      <div class="w-6/12 p-3">
        <label>Barangay</label>
        <select v-model="senior.barangay" class="pb-2 pt-0 input focus:outline-none">
          <option value="-A">I-A</option>
          <option value="I-B">I-B</option>
          <option value="II-A">II-A</option>
          <option value="II-B">II-B</option>
          <option value="II-C">II-C</option>
          <option value="II-D">II-D</option>
          <option value="II-E">II-E</option>
          <option value="II-F">II-F</option>
          <option value="III-A">III-A</option>
          <option value="III-B">III-B</option>
          <option value="III-C">III-C</option>
          <option value="III-D">III-D</option>
          <option value="III-E">III-E</option>
          <option value="III-F">III-F</option>
          <option value="IV-A">IV-A</option>
          <option value="IV-B">IV-B</option>
          <option value="IV-C">IV-C</option>
          <option value="V-A">V-A</option>
          <option value="V-B">V-B</option>
          <option value="V-C">V-C</option>
          <option value="V-D">V-D</option>
          <option value="VI-A">VI-A</option>
          <option value="VI-B">VI-B</option>
          <option value="VI-D">VI-D</option>
          <option value="VI-E">VI-E</option>
          <option value="VII-A">VII-A</option>
          <option value="VII-B">VII-B</option>
          <option value="VII-C">VII-C</option>
          <option value="VII-D">VII-D</option>
          <option value="VII-E">VII-E</option>
          <option value="Atisan">Atisan</option>
          <option value="Bagong Bayan">Bagong Bayan</option>
          <option value="Bagong Pook">Bagong Pook</option>
          <option value="Bautista">Bautista</option>
          <option value="Concepcion">Concepcion</option>
          <option value="Del Remedio">Del Remedio</option>
          <option value="Dolores">Dolores</option>
          <option value="San Antonio 1">San Antonio 1</option>
          <option value="San Antonio 2">San Antonio 2</option>
          <option value="San Bartolome">San Bartolome</option>
          <option value="San Buenaventura">San Buenaventura</option>
          <option value="San Crispin">San Crispin</option>
          <option value="San Cristobal">San Cristobal</option>
          <option value="San Diego">San Diego</option>
          <option value="San Francisco">San Francisco</option>
          <option value="San Gabriel">San Gabriel</option>
          <option value="San Gregorio">San Gregorio</option>
          <option value="San Ignacio">San Ignacio</option>
          <option value="San Isidro">San Isidro</option>
          <option value="San Joaquin">San Joaquin</option>
          <option value="San Jose">San Jose</option>
          <option value="San Juan">San Juan</option>
          <option value="San Lorenzo">San Lorenzo</option>
          <option value="San Lucas 1">San Lucas 1</option>
          <option value="San Lucas 2">San Lucas 2</option>
          <option value="San Marcos">San Marcos</option>
          <option value="San Mateo">San Mateo</option>
          <option value="San Miguel">San Miguel</option>
          <option value="San Nicolas">San Nicolas</option>
          <option value="San Pedro">San Pedro</option>
          <option value="San Rafael">San Rafael</option>
          <option value="San Roque">San Roque</option>
          <option value="San Vicente">San Vicente</option>
          <option value="Santa Ana">Santa Ana</option>
          <option value="Santa Catalina">Santa Catalina</option>
          <option value="Santa Cruz">Santa Cruz</option>
          <option value="Santa Elena">Santa Elena</option>
          <option value="Santa Filomena">Santa Filomena</option>
          <option value="Santa Isabel">Santa Isabel</option>
          <option value="Santa Maria">Santa Maria</option>
          <option value="Santa Maria Magdalena">Santa Maria Magdalena</option>
          <option value="Santa Monica">Santa Monica</option>
          <option value="Santa Veronica">Santa Veronica</option>
          <option value="Santiago I">Santiago I</option>
          <option value="Santiago II">Santiago II</option>
          <option value="Santisimo Rosario">Santisimo Rosario</option>
          <option value="Santo Angel">Santo Angel</option>
          <option value="Santo Cristo">Santo Cristo</option>
          <option value="Santo Niño">Santo Niño</option>
          <option value="Soledad">Soledad</option>
        </select>
      </div>
    </div>
    <div class="flex card rounded-lg p-4">
      <div class="w-6/12 p-3">
        <label>Phone Number</label>
        <input v-model="senior.phone_number" type="text" class="pb-2 pt-0 input focus:outline-none">
      </div>
      <div class="w-6/12 p-3">
        <label>Educational Attainment</label>
        <input v-model="senior.education_attainment" type="text" class="pb-2 pt-0 input focus:outline-none">
      </div>
    </div>
    <div class="flex card rounded-lg p-4">
      <div class="w-4/12 p-3">
        <label>Occupation</label>
        <input v-model="senior.occupation" type="text" class="pb-2 pt-0 input focus:outline-none">
      </div>
      <div class="w-4/12 p-3">
        <label>Other Skills</label>
        <input v-model="senior.other_skill" type="text" class="pb-2 pt-0 input focus:outline-none">
      </div>
      <div class="w-4/12 p-3">
        <label>Annual Income</label>
        <input v-model="senior.annual_income" type="text" class="pb-2 pt-0 input focus:outline-none">
      </div>
    </div>
    <div class="flex card rounded-lg p-4">
      <h1 class="text-lg font-bold">
        Family Composition
      </h1>
    </div>
    <div class="flex card rounded-lg p-4">
      <table class="table-fixed mx-auto w-full">
        <thead>
          <tr>
            <th class="px-4 py-2">
              Name
            </th>
            <th class="px-4 py-2">
              Relationship
            </th>
            <th class="px-4 py-2">
              Age
            </th>
            <th class="px-4 py-2">
              Civil Status
            </th>
            <th class="px-4 py-2">
              Occupation
            </th>
            <th class="px-4 py-2">
              Annual Income
            </th>
            <th class="px-4 py-2">
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-t" v-for="(fam, index) in senior.family_composition" :key="index">
            <td class="border-r border-l p-2 text-center">{{ fam.name }}</td>
            <td class="border-r border-l p-2 text-center">{{ fam.relationship }}</td>
            <td class="border-r border-l p-2 text-center">{{ fam.age }}</td>
            <td class="border-r border-l p-2 text-center">{{ fam.civil_status }}</td>
            <td class="border-r border-l p-2 text-center">{{ fam.occupation }}</td>
            <td class="border-r border-l p-2 text-center">{{ fam.income }}</td>
            <td class="border-r border-l p-2 text-center">
              <a href="javascript:void(0)" @click="removeFamily()">Remove</a>
            </td>
          </tr>
          <tr class="mt-5">
            <td class="p-2">
              <input v-model="family.name" type="text" class="pb-2 pt-0 input focus:outline-none">
            </td>
            <td class="p-2">
              <input v-model="family.relationship" type="text" class="pb-2 pt-0 input focus:outline-none">
            </td>
            <td class="p-2">
              <input v-model="family.age" type="text" class="pb-2 pt-0 input focus:outline-none">
            </td>
            <td class="p-2">
              <select v-model="family.civil_status" class="pb-2 pt-0 input focus:outline-none">
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Widowed">Widowed</option>
                <option value="Seperated">Seperated</option>
              </select>
            </td>
            <td class="p-2">
              <input v-model="family.occupation" type="text" class="pb-2 pt-0 input focus:outline-none">
            </td>
            <td class="p-2">
              <input v-model="family.income" type="text" class="pb-2 pt-0 input focus:outline-none">
            </td>
            <td class="p-2">
              <button class="button w-full rounded-lg text-xs" @click="addFamily()">Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex card rounded-lg p-4">
      <h1 class="text-lg font-bold">
        Membership to Senior Citizen Association
      </h1>
    </div>
    <div class="flex card rounded-lg p-4">
      <div class="w-full p-3">
        <label>Name of Association</label>
        <input v-model="senior.senior_citize_membership.name" type="text" class="pb-2 pt-0 input focus:outline-none">
      </div>
    </div>
    <div class="flex card rounded-lg p-4">
      <div class="w-full p-3">
        <label>Address</label>
        <textarea v-model="senior.senior_citize_membership.address" cols="30" rows="2" class="pb-2 pt-0 input focus:outline-none"></textarea>
      </div>
    </div>
    <div class="flex card rounded-lg p-4">
      <div class="w-6/12 p-3">
        <label>Date of Membership</label>
        <input v-model="senior.senior_citize_membership.date_of_membership" type="date" class="pb-2 pt-0 input focus:outline-none">
      </div>
      <div class="w-6/12 p-3">
        <label>Position</label>
        <input v-model="senior.senior_citize_membership.position" type="text" class="pb-2 pt-0 input focus:outline-none">
      </div>
    </div>
    <div class="flex card rounded-lg p-4">
      <div class="w-full">
        <button class="button px-4 py-20 rounded-lg float-right" @click="clickSave()">Save</button>
      </div>
    </div>
  </div>
</template>

<script src="./form.js"></script>

<style lang="scss" src="./form.scss"></style>