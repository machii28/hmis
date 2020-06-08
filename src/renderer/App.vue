<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'clinic-is',
    data() {
      return {
        usersTable: this.$users,
        diseaseTable: this.$diseases,
        auditTable: this.$audits,
      };
    },
    created() {
      this.load();
    },
    methods: {
      load() {
        const $this = this;
        $this.usersTable.loadDatabase();
        $this.diseaseTable.loadDatabase();
        $this.auditTable.loadDatabase();

        /* $this.usersTable.remove({}, { multi: true }, () => {
  
        }); */

        $this.diseaseTable.count({}).exec((error, count) => {
          if (error) throw error;

          if (count === 0) {
            $this.loadDiseases();
          }
        });

        $this.usersTable.find({}).exec((error, data) => {
          if (error) throw error;

          if (data.length === 0) {
            const admin = {
              username: 'admin',
              name: 'Admin',
              role: 'admin',
              password: 'admin',
              active: true,
            };

            $this.usersTable.insert(admin, () => {});
          }
        });
      },
      loadDiseases() {
        const diseases = [
          {
            name: 'Alzheimer',
          },
          {
            name: '(ALS)',
          },
          {
            name: 'Arrhythmia',
          },
          {
            name: 'Arthritis',
          },
          {
            name: 'Atrial Fibrillation',
          },
          {
            name: 'Autism',
          },
          {
            name: 'Bedsores',
          },
          {
            name: 'Hypertension',
          },
          {
            name: 'Diabetes',
          },
          {
            name: 'Glaucoma',
          },
        ];

        this.diseaseTable.insert(diseases, () => {
  
        });
      },
    },
  };
</script>

<style></style>
