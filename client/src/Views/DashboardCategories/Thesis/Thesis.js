import React from "react";
import { PageHeader } from "../../../Components/Shared/PageHeader";
import thesisBg from "../../../Assets/PageBg/thesisBg.png";
import { DashboardPage } from "../../DashboardPage";
import { SearchComponent } from "../../../Components/Shared/SearchComponent";
import { ThesisList } from "../../../Components/ThesisList";

const Thesis = () => {
  return (
    <DashboardPage>
      <div className="d-flex justify-content-center pb-4">
        <SearchComponent placeholder="Search for Thesis,  journal" thesis />
      </div>
      <PageHeader
        title="Thesis"
        bg={`url(${thesisBg})`}
        description={`From brain science to biomedical engineering to the arts and humanities, Brown researchers fuel discovery, solve global problems and confront complex 21st century challenges with a relentless focus on the greater good`}
      />
      <ThesisList />
    </DashboardPage>
  );
};

export default Thesis;
