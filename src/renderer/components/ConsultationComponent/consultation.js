import VueSelect from 'vue-select';

export default {
  name: 'ConsulationComponent',
  components: {
    vSelect: VueSelect,
  },
  data() {
    return {
      seniorTable: this.$seniors,
      consultationTable: this.$consultations,
      diseaseTable: this.$diseases,
      last_name: '',
      senior: {},
      diseases: {},
      seniors: {},
      consultation: {
        senior_id: '',
        disease: '',
        remarks: '',
        date_of_consultation: '',
      },
      consultations: {},
    };
  },
  mounted() {
    this.seniorTable.loadDatabase();
    this.diseaseTable.loadDatabase();
    this.loadDiseases();
    this.loadSeniors();
  },
  methods: {
    loadSeniors() {
      const that = this;

      that.seniorTable.find({}, (error, data) => {
        if (error) throw error;

        that.seniors = data.map(da => ({
          full_name: `${da.first_name} ${da.last_name}`,
          _id: da._id,
          age: da.age,
          date_of_birth: da.date_of_birth,
          image: da.image,
        }));
      });
    },
    selectSenior(senior) {
      const $this = this;
      $this.senior = senior;

      $this.consultationTable.find({ senior_id: $this.senior._id }, (error, data) => {
        if (error) throw error;

        $this.consultations = data;
      });
    },
    loadDiseases() {
      const $this = this;

      $this.diseaseTable.find({}, (error, data) => {
        if (error) throw error;

        $this.diseases = data;
      });
    },
    newOption(disease) {
      const $this = this;

      $this.diseaseTable.insert(disease, (error, data) => {
        if (error) throw error;

        $this.diseases.push(data);
      });
    },
    selectOption(disease) {
      const $this = this;

      $this.consultation.disease = disease.name;
    },
    saveConsultations() {
      const $this = this;
      const date = new Date();

      if (Object.keys($this.senior).length === 0) {
        window.alert('Please select a senior patient');
      } else if ($this.senior) {
        $this.consultation.senior_id = $this.senior._id;
        $this.consultation.date_of_consultation = date.toISOString().substring(0, 10);

        const input = $this.consultation;

        $this.consultationTable.insert(input, (error) => {
          if (error) throw error;

          window.alert('Consultation Recorded');

          const userInfo = JSON.parse(window.localStorage.getItem('user'));
          this.$audits.insert({
            name: userInfo.name,
            logs: `${userInfo.name} conducted a consultation for ${$this.senior.first_name} ${$this.senior.last_name}`,
            date: new Date().toDateString(),
            time: `${new Date().getHours()}:${new Date().getMinutes()}`,
          });

          $this.consultation = {
            senior_id: '',
            disease: '',
            remarks: '',
            date_of_consultation: '',
          };
        });
      } else {
        window.alert('Please select a patient for consultation');
      }
    },
  },
};
