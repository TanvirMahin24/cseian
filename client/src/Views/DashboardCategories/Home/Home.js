import React from "react";
import { DashboardPage } from "../../DashboardPage";
import { MapSection } from "../../../Components/MapSection";
//import { NewsDashboard } from "../../../Components/NewsDashboard";
import { StatsDashboard } from "../../../Components/StatsDashboard";
import { ThesisDashboard } from "../../../Components/ThesisDashboard";

const Home = () => {
  return (
    <DashboardPage>
      <div className="pb-5">
        <StatsDashboard />
        <MapSection />
        {/* <NewsDashboard />kk */}
        {/* <ThesisDashboard /> */}
      </div>
    </DashboardPage>
  );
};

export default Home;
