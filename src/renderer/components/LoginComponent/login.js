export default {
  name: 'LoginComponent',
  data() {
    return {
      username: '',
      password: '',
      isWrongCredentials: false,
    };
  },
  methods: {
    login() {
      const $this = this;
      const usersTable = $this.$users;

      /* usersTable.find({}, (error, data) => {
        if (error) throw error;

        console.log(data);
      }); */

      usersTable.find({ username: $this.username, password: $this.password }, (error, data) => {
        if (error) throw error;

        if (data.length === 0) {
          $this.isWrongCredentials = true;
        } else {
          $this.isWrongCredentials = false;
          window.localStorage.setItem('user', JSON.stringify(data[0]));
          const user = JSON.parse(window.localStorage.getItem('user'));

          $this.$audits.insert({
            name: user.name,
            logs: `${user.name} Logged in`,
            date: new Date().toDateString(),
            time: `${new Date().getHours()}:${new Date().getMinutes()}`,
          });

          $this.$router.push('/dashboard');
        }
      });
    },
  },
};
