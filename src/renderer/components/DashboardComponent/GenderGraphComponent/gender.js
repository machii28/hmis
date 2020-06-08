import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'GenderGraphComponent',
  components: {
    apexcharts: VueApexCharts,
  },
  data() {
    return {
      genderSeries: [],
      genderOptions: {
        labels: [],
      },
      ageSeries: [],
      ageOptions: {
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
      const genders = ['Male', 'Female'];
      const $this = this;

      genders.forEach((gender) => {
        $this.seniorTable.count({ sex: gender }, (error, count) => {
          if (error) throw error;

          $this.genderSeries.push(count);
          $this.genderOptions.labels.push(gender);
        });
      });

      const ages = ['Below 60', '60-70', '70-80', '80-90', '90-100', 'Above 100'];

      ages.forEach((age) => {
        $this.ageOptions.labels.push(age);

        if (age === 'Below 60') {
          $this.seniorTable.find({ age: { $lt: 60 } }, (error, data) => {
            if (error) throw error;

            $this.ageSeries.push(data.length);
          });
        }

        if (age === '60-70') {
          $this.seniorTable.find({ age: { $gte: 60, $lt: 70 } }, (error, data) => {
            if (error) throw error;

            $this.ageSeries.push(data.length);
          });
        }

        if (age === '70-80') {
          $this.seniorTable.find({ age: { $gte: 70, $lt: 80 } }, (error, data) => {
            if (error) throw error;

            $this.ageSeries.push(data.length);
          });
        }

        if (age === '80-90') {
          $this.seniorTable.find({ age: { $gte: 80, $lt: 90 } }, (error, data) => {
            if (error) throw error;

            $this.ageSeries.push(data.length);
          });
        }

        if (age === '90-100') {
          $this.seniorTable.find({ age: { $gte: 90, $lt: 100 } }, (error, data) => {
            if (error) throw error;

            $this.ageSeries.push(data.length);
          });
        }

        if (age === 'Above 100') {
          $this.seniorTable.find({ age: { $gte: 100 } }, (error, data) => {
            if (error) throw error;

            $this.ageSeries.push(data.length);
          });
        }
      });
    },
  },
};
