<template>
  <div>
    <div class="flex card rounded-lg p-4">
      <div class="w-full">
        <h1 class="text-lg inline font-hold">
          User Registration Form
        </h1>
        <button class="button px-4 py-20 rounded-lg float-right" @click="save()">Save</button>
        <button class="button px-4 py-20 rounded-lg float-right" @click="back()">Back</button>
      </div>
    </div>

    <div class="flex card rounded-lg p-4">
      <div class="w-6/12 p-3">
        <label>Name: </label>
        <input type="text" v-model="user.name" class="pb-2 pt-0 input focus:outline-none">
      </div>
      <div class="w-6/12 p-3">
        <label>Username: </label>
        <input type="text" v-model="user.username" class="pb-2 pt-0 input focus:outline-none">
      </div>
    </div>

    <div class="flex card rounded-lg p-4">
      <div class="w-6/12 p-3">
        <label>Password: </label>
        <input type="text" v-model="user.password" class="pb-2 pt-0 input focus:outline-none">
      </div>
      <div class="w-6/12 p-3">
        <label>Role: </label>
        <select v-model="user.role" class="pb-2 pt-0 input focus:outline-none">
          <option value="admin" selected>Admin</option>
          <option value="encoder">Encoder</option>
        </select>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'UserFormComponent',
  data() {
    return {
      user: {
        name: '',
        username: '',
        password: '',
        role: '',
        active: true,
      },
      usersTable: this.$users,
    };
  },
  methods: {
    back() {
      this.$emit('formClosed');
    },
    save() {
      const that = this;
      that.usersTable.loadDatabase();

      that.usersTable.insert(that.user, (error) => {
        if (error) throw error;

        alert('User successfully saved');

        const userInfo = JSON.parse(window.localStorage.getItem('user'));
        that.$audits.insert({
          name: userInfo.name,
          logs: `${userInfo.name} Activated the user ${that.user.name}`,
          date: new Date().toDateString(),
          time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        });

        that.user.name = '';
        that.user.username = '';
        that.user.password = '';
        that.user.role = 'admin';
        that.user.active = true;
      });
    },
  },
};
</script>

<style lang="scss">

</style>