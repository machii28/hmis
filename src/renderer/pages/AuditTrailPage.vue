<template>
  <div>
    <sidebar-component></sidebar-component>
    <div class="w-full py-2 pl-20">
      <h1 class="block w-full p-5 text-2xl">
        Audit Trail
      </h1>

      <div class="card m-4 px-5 rounded-lg">
        <v-client-table :columns="columns" :data="data">

        </v-client-table>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from './../components/SidebardComponent/SidebarComponent.vue';

export default {
  name: 'AuditTrailPage',
  components: {
    SidebarComponent,
  },
  mounted() {
    this.load();
  },
  data() {
    return {
      data: [],
      columns: ['user', 'logs', 'date', 'time'],
      auditTable: this.$audits,
    };
  },
  methods: {
    load() {
      const that = this;
      that.auditTable.find({}).exec((error, data) => {
        that.data = data.map(element => ({
          user: element.name,
          logs: element.logs,
          date: element.date,
          time: element.time,
        }));
      });
    },
  },
};
</script>