import React from "react";
import { PageHeader } from "../../../Components/Shared/PageHeader";
import newsBg from "../../../Assets/PageBg/newsBg.png";
import { SearchComponent } from "../../../Components/Shared/SearchComponent";
import { DashboardPage } from "../../DashboardPage";
import { NewsList } from "../../../Components/NewsList";

const News = () => {
  return (
    <DashboardPage>
      <div className="d-flex justify-content-center pb-4">
        <SearchComponent
          placeholder="Search for Mentors,Mentorships"
          research
        />
      </div>
      <PageHeader
        title="‘Molecular glue’ makes perovskite solar cells dramatically more reliable over time
        "
        bg={`url(${newsBg})`}
        description={`From brain science to biomedical engineering to the arts and humanities, Brown researchers fuel discovery, solve global problems and confront complex 21st century challenges with a relentless focus on the greater good`}
      />
      <NewsList />
    </DashboardPage>
  );
};

export default News;
