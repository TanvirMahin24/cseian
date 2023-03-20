import { LandingPage } from "../Views/LandingPage";
import { LandingPageMain } from "../Views/LandingPageMain";
import { LoginPage } from "../Views/LoginPage";
import { SignUpPage } from "../Views/SignUpPage";
import { CommingSoonPage } from "../Views/CommingSoonPage";
import { VerifyPage } from "../Views/VerifyPage";

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
    path: "/verify/:id",
    component: VerifyPage,
    exact: true,
  },
  {
    path: "/comming-soon",
    component: CommingSoonPage,
    exact: true,
  },
];

export default routes;
