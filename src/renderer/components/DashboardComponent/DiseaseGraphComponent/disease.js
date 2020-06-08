import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'DiseaseGraphComponent',
  components: {
    apexcharts: VueApexCharts,
  },
  data() {
    return {
      diseaseTable: this.$diseases,
      consultationTable: this.$consultations,
      options: {},
      series: [],
    };
  },
  mounted() {
    this.loadData();
    this.diseaseTable.loadDatabase();
  },
  methods: {
    loadData() {
      const $this = this;
      const listOfDiseases = [];
      const dataOfDiseases = [];

      $this.diseaseTable.find({}, (error, data) => {
        if (error) throw error;

        data.forEach((element) => {
          listOfDiseases.push(element.name);
        });
      });

      setTimeout(() => {
        listOfDiseases.forEach((data) => {
          $this.consultationTable.count({ disease: data }).exec((error, data) => {
            if (error) throw error;

            dataOfDiseases.push(data);
          });
        });
      }, 2000);

      setTimeout(() => {
        $this.options = {
          xaxis: {
            categories: listOfDiseases,
          },
        };

        $this.series.push({
          name: 'Diseases',
          data: dataOfDiseases,
        });
      }, 5000);
    },
  },
};
