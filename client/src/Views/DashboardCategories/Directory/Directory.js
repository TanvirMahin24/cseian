import React from "react";
import { DirectoryList } from "../../../Components/DirectoryList";
import { SearchComponent } from "../../../Components/Shared/SearchComponent";
import { Footer } from "../../../Components/Footer";
import { DashboardPage } from "../../DashboardPage";

const Directory = () => {
  return (
    <>
      <DashboardPage>
        <SearchComponent placeholder="Search by Names, Series, Country" />
        <DirectoryList />
      </DashboardPage>
      <Footer />
    </>
  );
};

export default Directory;
