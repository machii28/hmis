<template>
  <div>
    <v-client-table :columns="columns" :data="data">
      <img slot="image" slot-scope="props" :src="props.row.image" width="150px" class="mx-auto">

      <div slot="actions" slot-scope="props">
        <a href="javascript:void(0);" @click="edit(props.row.id)" class="text-teal-500 font-normal text-sm">Edit</a>
        <a href="javascript:void(0);" v-if="user.role === 'admin'" @click="remove(props.row.id)" class="text-red-500 font-normal text-sm">Delete</a>
        <a href="javascript:void(0);" @click="view(props.row.id)" class="text-blue-500 font-normal text-sm">View</a>
      </div>
    </v-client-table>
  </div>
</template>

<script src="./table.js"></script>
<style lang="scss" src="./table.scss"></style>