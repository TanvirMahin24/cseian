import React from "react";
import { PageHeader } from "../../../Components/Shared/PageHeader";
import researchBg from "../../../Assets/PageBg/thesisBg.png";
import { DashboardPage } from "../../DashboardPage";
import { SearchComponent } from "../../../Components/Shared/SearchComponent";
import { ResearchList } from "../../../Components/ResearchList";

const Research = () => {
  return (
    <DashboardPage>
      <div className="d-flex justify-content-center pb-4">
        <SearchComponent placeholder="Search for Research" research />
      </div>
      <PageHeader
        title="Research"
        bg={`url(${researchBg})`}
        description={`From brain science to biomedical engineering to the arts and humanities, Brown researchers fuel discovery, solve global problems and confront complex 21st century challenges with a relentless focus on the greater good`}
      />
      <ResearchList />
    </DashboardPage>
  );
};

export default Research;
