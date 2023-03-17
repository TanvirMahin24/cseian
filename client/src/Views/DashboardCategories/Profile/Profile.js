import React from "react";
import SettingsForm from "../../../Components/SettingsForm/SettingsForm";
import SettingsJobList from "../../../Components/SettingsJobList/SettingsJobList";
import { DashboardPage } from "../../DashboardPage";

const Profile = () => {
  return (
    <DashboardPage>
      <SettingsForm />
      <SettingsJobList />
    </DashboardPage>
  );
};

export default Profile;
