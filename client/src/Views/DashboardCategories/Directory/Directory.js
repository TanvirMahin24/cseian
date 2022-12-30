import React, { useEffect } from "react";
import { DirectoryList } from "../../../Components/DirectoryList";
import { SearchComponent } from "../../../Components/Shared/SearchComponent";
import { Footer } from "../../../Components/Footer";
import { DashboardPage } from "../../DashboardPage";
import { connect } from "react-redux";
import { searchDirectory } from "../../../Actions/Directory.action";

const Directory = ({ searchDirectory, data }) => {
  useEffect(() => {
    if (data === null) {
      searchDirectory("");
    }
  }, []);
  return (
    <>
      <DashboardPage>
        {data ? (
          <>
            <SearchComponent placeholder="Search by Names, Series, Country" />
            <DirectoryList data={data} />
          </>
        ) : (
          <></>
        )}
      </DashboardPage>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.directory.result,
});

export default connect(mapStateToProps, { searchDirectory })(Directory);
