const fs = require('fs');

export default {
  name: 'FormComponent',
  props: ['id'],
  data() {
    return {
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
      family: {
        name: '',
        relationship: '',
        age: '',
        civil_status: '',
        occupation: '',
        income: '',
      },
      seniorTable: this.$seniors,
    };
  },
  mounted() {
    this.seniorTable.loadDatabase();

    if (this.id) {
      this.loadData();
    }
  },
  methods: {
    clickSave() {
      if (window.confirm('Are you sure you want to save the data ? ')) {
        this.save();
      }
    },
    loadData() {
      const $this = this;

      $this.seniorTable.find({ _id: $this.id }, (error, senior) => {
        if (error) throw error;

        $this.senior = {
          image: senior[0].image,
          imageFile: {},
          first_name: senior[0].first_name,
          last_name: senior[0].last_name,
          middle_name: senior[0].middle_name,
          date_of_birth: senior[0].date_of_birth,
          age: Number(senior[0].age),
          sex: senior[0].sex,
          place_of_birth: senior[0].place_of_birth,
          civil_status: senior[0].civil_status,
          address: senior[0].address,
          barangay: senior[0].barangay,
          phone_number: senior[0].phone_number,
          educational_attainment: senior[0].educational_attainment,
          other_skill: senior[0].other_skill,
          occupation: senior[0].occupation,
          annual_income: senior[0].annual_income,
          family_composition: senior[0].family_composition,
          senior_citize_membership: {
            name: senior[0].senior_citize_membership.name,
            address: senior[0].senior_citize_membership.address,
            date_of_membership: senior[0].senior_citize_membership.date_of_membership,
            position: senior[0].senior_citize_membership.position,
          },
          date_of_registration: '',
        };
      });
    },
    save() {
      const $this = this;
      const fileName = Math.floor(10000 + (Math.random() * 90000));

      if ($this.senior.imageFile.path) {
        fs.copyFile($this.senior.imageFile.path, `C://Users//Public//${fileName}${$this.senior.imageFile.name}`, (error) => {
          if (error) throw error;
        });

        $this.senior.image = `C://Users//Public//${fileName}${$this.senior.imageFile.name}`;
      }

      $this.senior.age = Number($this.senior.age);

      if ($this.id) {
        $this.seniorTable.update({ _id: $this.id }, $this.senior, (error) => {
          if (error) throw error;

          window.alert('Successfully saved');

          const userInfo = JSON.parse(window.localStorage.getItem('user'));
          this.$audits.insert({
            name: userInfo.name,
            logs: `${userInfo.name} updated the senior ${$this.senior.first_name} ${$this.senior.last_name}`,
            date: new Date().toDateString(),
            time: `${new Date().getHours()}:${new Date().getMinutes()}`,
          });
        });
      } else {
        $this.seniorTable.insert($this.senior, (error) => {
          if (error) throw error;

          window.alert('Successfully saved');

          const userInfo = JSON.parse(window.localStorage.getItem('user'));
          this.$audits.insert({
            name: userInfo.name,
            logs: `${userInfo.name} saved the senior ${$this.senior.first_name} ${$this.senior.last_name}`,
            date: new Date().toDateString(),
            time: `${new Date().getHours()}:${new Date().getMinutes()}`,
          });
          $this.cleanInput();
        });
      }
    },
    cleanInput() {
      this.senior = {
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
      };
    },
    avatarUpload(event) {
      const file = event.target.files[0];
      const img = document.getElementById('imgUpload');
      img.src = file.path;
      this.senior.imageFile = file;
    },
    addFamily() {
      const $this = this;
      let input = {};

      input = {
        name: $this.family.name,
        relationship: $this.family.relationship,
        age: $this.family.age,
        civil_status: $this.family.civil_status,
        occupation: $this.family.occupation,
        income: $this.family.income,
      };

      $this.senior.family_composition.push(input);
      $this.family.name = '';
      $this.family.relationship = '';
      $this.family.age = '';
      $this.family.civil_status = '';
      $this.family.occupation = '';
      $this.family.income = '';
    },
    removeFamily(index) {
      setTimeout(() => {
        this.senior.family_composition.splice(index, 1);
      }, 100);
    },
    closeForm() {
      this.$emit('formClosed');
    },
  },
};
