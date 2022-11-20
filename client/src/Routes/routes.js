import { LandingPage } from "../Views/LandingPage";
import { LandingPageMain } from "../Views/LandingPageMain";
import { LoginPage } from "../Views/LoginPage";
import { SignUpPage } from "../Views/SignUpPage";
import { CommingSoonPage } from "../Views/CommingSoonPage";

const routes = [
  {
    path: "/",
    component: LandingPageMain,
    exact: true,
  },
  {
    path: "/signup",
    component: SignUpPage,
    exact: true,
  },
  {
    path: "/login",
    component: LoginPage,
    exact: true,
  },
  {
    path: "/comming-soon",
    component: CommingSoonPage,
    exact: true,
  },
];

export default routes;
