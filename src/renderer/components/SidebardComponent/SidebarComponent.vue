<template>
  <div>
    <div class="sidebar h-screen w-16 menu bg-white px-4 flex items-center nunito static fixed shadow">
      <ul class="list-reset ">
        <li class="my-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/San_Pablo_City_Laguna_seal.svg/1200px-San_Pablo_City_Laguna_seal.svg.png" class="w-9/12 hover:m-auto" alt="">
        </li>
        <li v-if="isAdmin" class="my-2 md:my-0">
          <a @click="$router.push('/dashboard')" href="javascript:void(0)" class="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-white">
            <i class="fas fa-chart-line fa-fw mr-3"></i><span class="w-full inline-block pb-1 md:pb-0 text-sm">Dashboard</span>
          </a>
        </li>
        <li v-if="isAdmin" class="my-2 md:my-0 ">
          <a href="javascript:void(0)" @click="$router.push('/users')" class="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-white">
            <i class="fas fa-user fa-fw mr-3"></i><span class="w-full inline-block pb-1 md:pb-0 text-sm">Users</span>
          </a>
        </li>
        <li class="my-2 md:my-0">
          <a href="javascript:void(0)" @click="$router.push('/seniors')" class="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-white">
            <i class="fa fa-heartbeat fa-fw mr-3"></i><span class="w-full inline-block pb-1 md:pb-0 text-sm">Seniors</span>
          </a>
        </li>
        <li class="my-2 md:my-0">
          <a href="javascript:void(0)" @click="$router.push('/consultation-list')" class="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-white">
            <i class="fas fa-file-medical fa-fw mr-3"></i><span class="w-full inline-block pb-1 md:pb-0 text-sm">Consultation</span>
          </a>
        </li>
        <li class="my-2 md:my-0">
          <a href="javascript:void(0)" @click="$router.push('/about')" class="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-white">
            <i class="fa fa-question-circle fa-fw mr-3"></i><span class="w-full inline-block pb-1 md:pb-0 text-sm">About</span>
          </a>
        </li>
        <li class="my-2 md:my-0">
          <a href="javascript:void(0)" @click="$router.push('/settings')" class="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-white">
            <i class="fa fa-user-circle fa-fw mr-3"></i><span class="w-full inline-block pb-1 md:pb-0 text-sm">Account</span>
          </a>
        </li>
        <li v-if="isAdmin" class="my-2 md:my-0">
          <a href="javascript:void(0)" @click="$router.push('/audits')" class="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-white">
            <i class="fa fa-tv fa-fw mr-3"></i><span class="w-full inline-block pb-1 md:pb-0 text-sm">Audit Trail</span>
          </a>
        </li>
        <li class="my-2 md:my-0">
          <a @click="logout()" href="javascript:void(0)" class="block py-1 md:py-3 pl-1 align-middle no-underline hover:text-white">
            <i class="fas fa-sign-out-alt fa-fw mr-3"></i><span class="w-full inline-block pb-1 md:pb-0 text-sm">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./sidebar.js"></script>
<style src="./sidebar.scss"></style>