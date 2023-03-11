// ADMINS
import {
  Home as DashboardHome,
  Forum as DashboardForum,
  Directory as DashboardDirectory,
  Job as DashboardJob,
  Mentoring as DashboardMentoring,
  Research as DashboardResearch,
  Thesis as DashboardThesis,
  News as DashboardNews,
  Profile as DashboardProfile,
} from "../Views/DashboardCategories";
import Post from "../Views/DashboardCategories/Post/Post";

const ProtectedRoutes = [
  {
    path: "/dashboard",
    component: DashboardHome,
    exact: true,
  },
  {
    path: "/dashboard/forum/:id",
    component: Post,
    exact: true,
  },
  {
    path: "/dashboard/forum",
    component: DashboardForum,
    exact: true,
  },
  {
    path: "/dashboard/directory",
    component: DashboardDirectory,
    exact: true,
  },
  {
    path: "/dashboard/job",
    component: DashboardJob,
    exact: true,
  },
  {
    path: "/dashboard/directory",
    component: DashboardDirectory,
    exact: true,
  },
  {
    path: "/dashboard/mentoring",
    component: DashboardMentoring,
    exact: true,
  },
  {
    path: "/dashboard/research",
    component: DashboardResearch,
    exact: true,
  },
  {
    path: "/dashboard/thesis",
    component: DashboardThesis,
    exact: true,
  },
  {
    path: "/dashboard/news",
    component: DashboardNews,
    exact: true,
  },
  {
    path: "/dashboard/profile",
    component: DashboardProfile,
    exact: true,
  },
];

export default ProtectedRoutes;
