<template>
  <div>
    <div class="flex">
      <sidebar-component></sidebar-component>
      <div class="w-full py-2 pl-20">
        <div class="py-5">
          <h1 class="block w-full p-5 text-2xl font-bold">Consultations</h1>

          <div class="card m-4 px-5 rounded-lg">
            <div class="w-full">
              <button class="float-right button px-5 py-2 mt-2 rounded-lg" @click="print()">Print</button>
              <button class="float-right button px-5 py-2 mt-2 rounded-lg" @click="$router.push('/consultations')">Add Consultation</button>
            </div>

            <div class="card-header p-2">
              <h1 class="text-lg mt-4 inline font-bold">
                List of Consultations
              </h1>
            </div>

            <div class="card-body">
              <v-client-table :columns="columns" :data="data">

              </v-client-table>
            </div>
          </div>

          <div id="print-table" v-if="showPrint">
            <table class="w-full">
              <thead>
                <tr class="text-center">
                  <th class="border border-black">Name</th>
                  <th class="border border-black">Disease</th>
                  <th class="border border-black">Date of Consulation</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(consultation, index) in data" :key="index">
                  <td class="border border-black">{{ consultation.patient }}</td>
                  <td class="border border-black">{{ consultation.disease }}</td>
                  <td class="border border-black">{{ consultation.date_of_consultation }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from './../components/SidebardComponent/SidebarComponent';

export default {
  name: 'ConsulationListPage',
  components: {
    SidebarComponent,
  },
  data() {
    return {
      consultationtable: this.$consultations,
      seniorstable: this.$seniors,
      columns: ['patient', 'disease', 'date_of_consultation'],
      data: [],
      parsedData: [],
      showPrint: false,
      consultation: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      const that = this;
      that.consultationtable.find({}, (error, consultations) => {
        that.parsedData = consultations;

        that.parse();
      });
    },
    parse() {
      const that = this;
      const newData = [];

      that.parsedData.forEach((parsed) => {
        that.seniorstable.loadDatabase();
        that.seniorstable.find({ _id: parsed.senior_id }, (error, data) => {
          if (error) throw error;

          newData.push({
            patient: `${data[0].first_name} ${data[0].last_name}`,
            disease: parsed.disease,
            date_of_consultation: parsed.date_of_consultation,
          });
        });
      });

      that.data = newData;
    },
    print() {
      const that = this;
      that.showPrint = true;

      window.setTimeout(() => {
        const header = '<html><head><title></title></head><body>';
        const footer = '</body>';

        const newstring = document.getElementById('print-table').innerHTML;
        const oldstring = document.body.innerHTML;

        document.body.innerHTML = header + newstring + footer;
        window.print();
        document.body.innerHTML = oldstring;

        window.location.reload();
      }, 1000);
    },
  },
};
</script>