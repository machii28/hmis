<template>
  <div>
    <div class="login-card flex">
      <div class="w-3/12 login-image">
        <img class="p-5" src="~@/assets/logo-sanpablo.svg" alt="">
      </div>
      <div class="max-w-md w-full mx-auto app-title">
        <h1 class="text-center py-8 text-4xl font-bold">
          H.I.M.S.
          <span class="font-hairline block text-sm">
            Healthcare Information Management System
          </span>
        </h1>

        <div class="mx-10 my-20">
          <input type="text" v-bind:class="{error: isWrongCredentials}" placeholder="Username" v-model="username" class="input focus:outline-none">

          <input type="password" v-bind:class="{error: isWrongCredentials}" placeholder="Password" v-model="password" class="input focus:outline-none">

          <button @click="login()" class="my-3 button login-button hover:outline-none hover:text-white focus:outline-none focus:text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./login.js"></script>
<style src="./login.scss"></style>