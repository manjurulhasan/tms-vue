import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
import DashboardView from '../views/admin_pages/DashboardView.vue'
import ManagerLists from '../views/admin_pages/ManagerList.vue'
import ManagerCreate from '../views/admin_pages/ManagerCreate.vue'
import TaskList from '../views/admin_pages/TaskList.vue'
import TaskCreate from '../views/admin_pages/TaskCreate.vue'
import TenantList from '../views/admin_pages/TenantList.vue'
import TenantCreate from '../views/admin_pages/TenantCreate.vue'
import SupportCreate from '../views/admin_pages/SupportCreate.vue'
import SettingsView from '../views/admin_pages/SettingsView.vue'
import DocumentsView from '../views/admin_pages/DocumentsView.vue'
import ReportsView from '../views/admin_pages/ReportsView.vue'
import TransactionView from '../views/admin_pages/TransactionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView
    },
    {
      path: '/managers',
      name: 'Managers',
      component: ManagerLists
    },
    {
      path: '/managers/create',
      name: 'Manager Create',
      component: ManagerCreate
    },
    {
      path: '/managers/edit/:user_id',
      name: 'Manager Edit',
      component: ManagerCreate
    },
    {
      path: '/tasks',
      name: 'Task List',
      component: TaskList
    },
    {
      path: '/tasks/create',
      name: 'Task Create',
      component: TaskCreate
    },
    {
      path: '/tenants',
      name: 'Tenants List',
      component: TenantList
    },
    {
      path: '/tenants/create',
      name: 'Tenant Create',
      component: TenantCreate
    },
    {
      path: '/tenants/edit/:tenant_id',
      name: 'Tenant Edit',
      component: TenantCreate
    },
    {
      path: '/support',
      name: 'Support Create',
      component: SupportCreate
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingsView
    },
    {
      path: '/reports',
      name: 'Reports',
      component: ReportsView
    },
    {
      path: '/documents',
      name: 'Documents',
      component: DocumentsView
    },
    {
      path: '/transactions',
      name: 'Transactions',
      component: TransactionView
    }
  ]
})

export default router
