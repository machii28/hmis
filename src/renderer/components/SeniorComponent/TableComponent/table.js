export default {
  name: 'table-component',
  data() {
    return {
      columns: ['image', 'name', 'age', 'barangay', 'actions'],
      data: [],
      options: {},
      editableColumns: [],
      sortable: [],
      filterable: [],
      seniorTable: this.$seniors,
      user: JSON.parse(window.localStorage.getItem('user')),
    };
  },
  mounted() {
    this.loadData();
    console.log(this.user);
  },
  methods: {
    loadData() {
      const $this = this;
      $this.seniorTable.loadDatabase();

      $this.seniorTable.find({}, (error, seniors) => {
        if (error) throw error;

        $this.data = seniors.map(senior => ({
          image: senior.image,
          name: `${senior.first_name} ${senior.last_name}`,
          age: senior.age,
          barangay: senior.barangay,
          id: senior._id,
        }));
      });
    },
    edit(id) {
      this.$emit('edit', id);
    },
    view(id) {
      this.$emit('view', id);
    },
    remove(id) {
      const $this = this;

      if (window.confirm('Are you sure you want to remove ?')) {
        $this.seniorTable.remove({ _id: id }, (error) => {
          if (error) throw error;

          window.alert('Senior has been removed');
          $this.loadData();
        });
      }
    },
  },
};
