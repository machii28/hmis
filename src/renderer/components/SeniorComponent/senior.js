import TableComponent from './TableComponent/TableComponent.vue';
import FormComponent from './FormComponent/FormComponent.vue';
import ViewComponent from './ViewComponent/ViewComponent.vue';

export default {
  name: 'SeniorComponent',
  components: {
    TableComponent,
    FormComponent,
    ViewComponent,
  },
  data() {
    return {
      isFormActive: false,
      isViewActive: false,
      seniorId: '',
      seniors: [],
      seniorsTable: this.$seniors,
      showPrint: false,
    };
  },
  methods: {
    openForm() {
      this.seniorId = '';
      this.isFormActive = true;
    },
    formClosed() {
      this.isFormActive = false;
    },
    viewClosed() {
      this.isViewActive = false;
    },
    seniorEdit(id) {
      const $this = this;

      $this.seniorId = id;
      $this.isFormActive = true;
    },
    seniorView(id) {
      const $this = this;

      $this.isViewActive = true;
      $this.seniorId = id;
    },
    print() {
      const that = this;

      that.seniorsTable.loadDatabase();

      that.seniorsTable.find({}).exec((error, data) => {
        if (error) throw error;

        that.seniors = data;
        that.showPrint = true;

        window.setTimeout(() => {
          const header = '<html><head><title></title></head><body>';
          const footer = '</body>';

          const newstring = document.getElementById('print-table').innerHTML;
          const oldstring = document.body.innerHTML;

          document.body.innerHTML = header + newstring + footer;
          window.print();
          document.body.innerHTML = oldstring;

          const userInfo = JSON.parse(window.localStorage.getItem('user'));
          that.$audits.insert({
            name: userInfo.name,
            logs: `${userInfo.name} printed seniors list`,
            date: new Date().toDateString(),
            time: `${new Date().getHours()}:${new Date().getMinutes()}`,
          });

          window.location.reload();
        }, 1000);
      });
    },
  },
};
