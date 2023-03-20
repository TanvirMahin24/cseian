import React from "react";
import { PageHeader } from "../../../Components/Shared/PageHeader";
import thesisBg from "../../../Assets/PageBg/thesisBg.png";
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
        title="Events"
        bg={`url(${thesisBg})`}
        description={`Find all the events that are happening right now!`}
      />
      <NewsList />
    </DashboardPage>
  );
};

export default News;
