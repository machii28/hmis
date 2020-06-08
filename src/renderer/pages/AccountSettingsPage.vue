<template>
  <div>
    <div class="flex">
      <sidebar-component></sidebar-component>
      <div class="w-full pl-20 pt-2">
        <div class="flex">
          <div class="w-full pt-5">
            <div class="mx-4">
              <h1 class="text-2xl font-bold">Account Settings</h1>
            </div>
          </div>
        </div>

        <div class="flex">
          <div class="w-full pt-5">
            <div class="card rounded-lg m-4 px-5">
              <div class="mx-10">
                <input type="text" v-bind:class="{error: isWrongCredentials}" placeholder="Name" v-model="user.name" class="input focus:outline-none">

                <input type="text" v-bind:class="{error: isWrongCredentials}" placeholder="Username" v-model="user.username" class="input focus:outline-none">

                <input type="password" v-bind:class="{error: isWrongCredentials}" placeholder="Old Password" v-model="oldpassworddata" class="input focus:outline-none">

                <input type="password" v-bind:class="{error: isWrongCredentials}" placeholder="New Password" v-model="user.password" class="input focus:outline-none">

                <input type="password" v-bind:class="{error: isWrongCredentials}" placeholder="Confirm New Password" v-model="confirmpassword" class="input focus:outline-none">

                <button @click="updateInfo()" class="my-3 button login-button hover:outline-none hover:text-white focus:outline-none focus:text-white">
                  Update Info
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from './../components/SidebardComponent/SidebarComponent.vue';

export default {
  name: 'account-setting-page',
  components: {
    SidebarComponent,
  },
  data() {
    return {
      user: {
        username: '',
        password: '',
        name: '',
      },
      oldpassworddata: '',
      oldusernamedata: '',
      oldpassword: '',
      confirmpassword: '',
      isWrongCredentials: false,
      usersTable: this.$users,
    };
  },
  mounted() {
    this.loadUser();
    this.usersTable.loadDatabase();
  },
  methods: {
    loadUser() {
      const that = this;
      const user = JSON.parse(window.localStorage.getItem('user'));

      that.usersTable.find({ _id: user.id }).exec((error, data) => {
        if (error) throw error;

        that.user.name = data[0].name;
        that.user.username = data[0].username;
        that.oldusernamedata = data[0].username;
        that.oldpassworddata = data[0].password;
        that.oldpassword = data[0].password;
      });
    },
    updateInfo() {
      const that = this;

      if (that.user.password === '') {
        alert('Please enter a valid password');
        that.isWrongCredentials = true;
      } else if (that.user.password !== that.confirmpassword) {
        alert('Invalid Confirmation password');
        that.isWrongCredentials = true;
      } else {
        that.usersTable.find({
          username: that.oldusernamedata,
          password: that.oldpassworddata,
        }).exec((error, data) => {
          if (error) throw error;

          if (data.length === 0) {
            alert('Invalid Credentials');

            that.isWrongCredentials = true;
          } else {
            that.usersTable.update({
              username: that.oldusernamedata,
            }, that.user, (error) => {
              if (error) throw error;

              alert('Account has been updated');

              that.user.password = '';
              that.confirmpassword = '';
              that.oldpassworddata = '';
              that.isWrongCredentials = false;
            });
          }
        });
      }
    },
  },
};
</script>

<style lang="scss">
  .error {
    border-bottom: 2px solid rgb(235, 11, 11) !important;
  }
</style>