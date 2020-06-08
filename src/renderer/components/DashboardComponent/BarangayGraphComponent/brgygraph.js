import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'BarangayGraphComponent',
  components: {
    apexcharts: VueApexCharts,
  },
  data() {
    return {
      series: [],
      options: {
        labels: [],
      },
      seniorTable: this.$seniors,
    };
  },
  mounted() {
    this.loadData();
    this.seniorTable.loadDatabase();
  },
  methods: {
    loadData() {
      const barangays = ['I-A', 'I-B', 'II-A', 'II-B', 'II-C', 'II-D', 'II-E', 'II-F', 'III-A', 'III-B', 'III-C', 'III-D', 'III-E', 'III-F', 'IV-A', 'IV-B', 'IV-C', 'V-A', 'V-B', 'V-C', 'V-D', 'VI-A', 'VI-B', 'VI-D', 'VI-E', 'VII-A', 'VII-B', 'VII-C', 'VII-D', 'VII-E', 'Atisan', 'Bagong Bayan', 'Bagong Pook', 'Bautista', 'Concepcion', 'Del Remedio', 'Dolores', 'San Antonio 1', 'San Antonio 2', 'San Bartolome', 'San Buenaventura', 'San Crispin', 'San Cristobal', 'San Diego', 'San Francisco', 'San Gabriel', 'San Gregorio', 'San Ignacio', 'San Isidro', 'San Joaquin', 'San Jose', 'San Juan', 'San Lorenzo', 'San Lucas 1', 'San Lucas 2', 'San Marcos', 'San Mateo', 'San Miguel', 'San Nicolas', 'San Pedro', 'San Rafael', 'San Roque', 'San Vicente', 'Santa Ana', 'Santa Catalina', 'Santa Cruz', 'Santa Elena', 'Santa Filomena', 'Santa Isabel', 'Santa Maria', 'Santa Maria Magdalena', 'Santa Monica', 'Santa Veronica', 'Santiago I', 'Santiago II', 'Santisimo Rosario', 'Santo Angel', 'Santo Cristo', 'Santo Niño', 'Soledad'];
      const $this = this;

      barangays.forEach((barangay) => {
        $this.seniorTable.count({ barangay }, (error, count) => {
          if (error) throw error;

          $this.series.push(count);
          $this.options.labels.push(barangay);
        });
      });
    },
  },
};
