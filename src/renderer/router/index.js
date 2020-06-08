import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/pages/LandingPage').default,
    },
    {
      path: '/dashboard',
      name: 'dashboard-page',
      component: require('@/pages/DashboardPage').default,
    },
    {
      path: '/seniors',
      name: 'senior-page',
      component: require('@/pages/SeniorPage').default,
    },
    {
      path: '/consultation-list',
      name: 'consultation-page',
      component: require('@/pages/ConsultationListpage').default,
    },
    {
      path: '/consultations',
      name: 'consulation-page',
      component: require('@/pages/ConsultationPage').default,
    },
    {
      path: '/about',
      name: 'about-page',
      component: require('@/pages/AboutPage').default,
    },
    {
      path: '/settings',
      name: 'account-setting-page',
      component: require('@/pages/AccountSettingsPage').default,
    },
    {
      path: '/users',
      name: 'users-page',
      component: require('@/pages/UserPage').default,
    },
    {
      path: '/audits',
      name: 'audit-trail',
      component: require('@/pages/AuditTrailPage').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
