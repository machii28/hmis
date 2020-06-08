export default {
  name: 'SidebarComponent',
  data() {
    return {
      isAdmin: true,
    };
  },
  mounted() {
    const user = JSON.parse(window.localStorage.getItem('user'));

    if (user.role === 'admin') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  },
  methods: {
    logout() {
      const user = JSON.parse(window.localStorage.getItem('user'));

      this.$audits.insert({
        name: user.name,
        logs: `${user.name} Logged out`,
        date: new Date().toDateString(),
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      });

      this.$router.push('/');
      window.localStorage.removeItem('user');
    },
  },
};
