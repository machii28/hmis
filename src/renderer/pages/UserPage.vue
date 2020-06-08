<template>
  <div>
    <div class="flex">
      <sidebar-component></sidebar-component>
      <div class="w-full py-2 pl-20">
        <div class="w-full py-5">
          <h1 class="block w-full p-5 text-2xl font-bold">
            Users
          </h1>

          <div class="card m-4 px-5 rounded-lg" v-if="!isFormActive">
            <div class="w-full">
              <button class="float-right button px-5 py-2 mt-2 rounded-lg" @click="formOpen()">Add User</button>
            </div>
            <v-client-table :columns="columns" :data="data">
              <div slot="status" slot-scope="props">
                <p v-if="props.row.active === true" class="bg-green-500 text-white p-1">Active</p>

                <p v-if="!props.row.active" class="bg-red-500 text-white p-1">Inactive</p>
              </div>

              <div slot="actions" slot-scope="props">
                <a v-if="props.row.active === true" href="javascript:void(0)" @click="deactivate(props.row.id)" class="text-teal-500 font-normal text-sm">Deactivate</a>
                
                <a v-if="props.row.active === false" href="javascript:void(0)" @click="activate(props.row.id)" class="text-teal-500 font-normal text-sm">Activate</a>
              </div>
            </v-client-table>
          </div>

          <div class="mx-2 px-2">
            <userform-component @formClosed="formClosed()" v-if="isFormActive"></userform-component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from './../components/SidebardComponent/SidebarComponent.vue';
import UserFormComponentVue from '../components/UserFormComponent/UserFormComponent.vue';

export default {
  name: 'senior-page',
  components: {
    SidebarComponent,
    'userform-component': UserFormComponentVue,
  },
  data() {
    return {
      columns: ['name', 'role', 'status', 'actions'],
      data: [],
      options: {},
      editableColumns: [],
      sortable: [],
      filterable: [

      ],
      isFormActive: false,
      usersTable: this.$users,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      const that = this;
      that.usersTable.loadDatabase();

      that.usersTable.find({}).exec((error, data) => {
        that.data = data.map(element => ({
          name: element.name,
          role: element.role,
          active: element.active,
          id: element._id,
        }));
      });
    },
    formClosed() {
      this.isFormActive = false;
      this.load();
    },
    formOpen() {
      this.isFormActive = true;
    },
    deactivate(id) {
      const that = this;
      if (window.confirm('Deactivate this user ?')) {
        that.usersTable.update({ _id: id }, { $set: { active: false } }, (error) => {
          if (error) throw error;
          that.load();
        });

        that.usersTable.find({ _id: id }).exec((error, data) => {
          if (error) throw error;

          const userInfo = JSON.parse(window.localStorage.getItem('user'));
          that.$audits.insert({
            name: userInfo.name,
            logs: `${userInfo.name} Deactivated the user ${data[0].name}`,
            date: new Date().toDateString(),
            time: `${new Date().getHours()}:${new Date().getMinutes()}`,
          });
        });
      }
    },
    activate(id) {
      const that = this;
      if (window.confirm('Deactivate this user ?')) {
        that.usersTable.update({ _id: id }, { $set: { active: true } }, (error) => {
          if (error) throw error;
          that.load();
        });

        that.usersTable.find({ _id: id }).exec((error, data) => {
          if (error) throw error;

          const userInfo = JSON.parse(window.localStorage.getItem('user'));
          that.$audits.insert({
            name: userInfo.name,
            logs: `${userInfo.name} Activated the user ${data[0].name}`,
            date: new Date().toDateString(),
            time: `${new Date().getHours()}:${new Date().getMinutes()}`,
          });
        });
      }
    },
  },
};
</script>

<style lang="scss">
</style>