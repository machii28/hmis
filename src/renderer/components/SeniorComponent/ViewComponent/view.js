export default {
  name: 'ViewComponent',
  props: ['id'],
  data() {
    return {
      seniorTable: this.$seniors,
      senior: {
        image: '',
        imageFile: {},
        first_name: '',
        last_name: '',
        middle_name: '',
        date_of_birth: '',
        age: 0,
        sex: '',
        place_of_birth: '',
        civil_status: '',
        address: '',
        barangay: '',
        phone_number: '',
        educational_attainment: '',
        other_skill: '',
        occupation: '',
        annual_income: '',
        family_composition: [],
        senior_citize_membership: {
          name: '',
          address: '',
          date_of_membership: '',
          position: '',
        },
        date_of_registration: '',
      },
    };
  },
  mounted() {
    this.load();
    this.seniorTable.loadDatabase();
  },
  methods: {
    load() {
      const $this = this;

      /* $this.seniorTable.find({}, (error, senior) => {
        if (error) throw error;

        console.log(senior);
      }); */

      $this.seniorTable.find({ _id: $this.id }, (error, senior) => {
        if (error) throw error;

        $this.senior = {
          image: senior[0].image,
          imageFile: {},
          first_name: senior[0].first_name,
          last_name: senior[0].last_name,
          middle_name: senior[0].middle_name,
          date_of_birth: senior[0].date_of_birth,
          age: senior[0].age,
          sex: senior[0].sex,
          place_of_birth: senior[0].place_of_birth,
          civil_status: senior[0].civil_status,
          address: senior[0].address,
          barangay: senior[0].barangay,
          phone_number: senior[0].phone_number,
          educational_attainment: senior[0].educational_attainment,
          other_skill: senior[0].other_skill,
          annual_income: senior[0].annual_income,
          occupation: senior[0].occupation,
          family_composition: senior[0].family_composition,
          senior_citize_membership: {
            name: senior[0].senior_citize_membership.name,
            address: senior[0].senior_citize_membership.address,
            date_of_membership: senior[0].senior_citize_membership.date_of_membership,
            position: senior[0].senior_citize_membership.position,
          },
        };
      });
    },
    print() {
      const headstr = '<html><head><title></title></head><body>';
      const footstr = '</body>';
      const newstr = document.getElementById('view').innerHTML;
      const oldstr = document.body.innerHTML;
      document.body.innerHTML = headstr + newstr + footstr;
      window.print();
      document.body.innerHTML = oldstr;

      const userInfo = JSON.parse(window.localStorage.getItem('user'));
      this.$audits.insert({
        name: userInfo.name,
        logs: `${userInfo.name} printed the information of senior ${this.senior.first_name} ${this.senior.last_name}`,
        date: new Date().toDateString(),
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      });

      window.location.reload();
    },
    viewClosed() {
      this.$emit('viewClosed');
    },
  },
};
