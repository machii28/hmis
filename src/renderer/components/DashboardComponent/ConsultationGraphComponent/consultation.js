import VueApexCharts from 'vue-apexcharts';
import moment from 'moment';

export default {
  name: 'ConsultationGraphComponent',
  components: {
    apexcharts: VueApexCharts,
  },
  data() {
    return {
      consultationTable: this.$consultations,
      options: {},
      series: [],
      weekly: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      monthly: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      selected: 'weekly',
    };
  },
  mounted() {
    this.loadData();
    this.consultationTable.loadDatabase();
  },
  methods: {
    loadData() {
      const that = this;

      that.loadWeekly();
    },
    changeData() {
      const that = this;

      if (that.selected === 'weekly') {
        that.loadWeekly();
      }

      if (that.selected === 'monthly') {
        that.loadMonthly();
      }
    },
    loadWeekly() {
      const that = this;
      const sunday = moment().day(0);
      const monday = moment().day(1);
      const tuesday = moment().day(2);
      const wednesday = moment().day(3);
      const thursday = moment().day(4);
      const friday = moment().day(5);
      const saturday = moment().day(6);
      const dataSeries = [];

      that.consultationTable.count({
        date: sunday.toISOString().substring(0, 10),
      }).exec((error, data) => {
        if (error) throw error;

        dataSeries.push(data);
      });

      that.consultationTable.count({
        date: monday.toISOString().substring(0, 10),
      }).exec((error, data) => {
        if (error) throw error;

        dataSeries.push(data);
      });

      that.consultationTable.count({
        date: tuesday.toISOString().substring(0, 10),
      }).exec((error, data) => {
        if (error) throw error;

        dataSeries.push(data);
      });

      that.consultationTable.count({
        date: wednesday.toISOString().substring(0, 10),
      }).exec((error, data) => {
        if (error) throw error;

        dataSeries.push(data);
      });

      that.consultationTable.count({
        date: thursday.toISOString().substring(0, 10),
      }).exec((error, data) => {
        if (error) throw error;

        dataSeries.push(data);
      });

      that.consultationTable.count({
        date: friday.toISOString().substring(0, 10),
      }).exec((error, data) => {
        if (error) throw error;

        dataSeries.push(data);
      });

      that.consultationTable.count({
        date: saturday.toISOString().substring(0, 10),
      }).exec((error, data) => {
        if (error) throw error;

        dataSeries.push(data);
      });

      window.setTimeout(() => {
        that.options = {
          xaxis: {
            categories: that.weekly,
          },
        };

        that.series.push({
          name: 'Consultations',
          data: dataSeries,
        });
      }, 1000);
    },
    loadMonthly() {
      const that = this;

      that.options = {
        xaxis: {
          categories: that.monthly,
        },
      };
    },
  },
};
