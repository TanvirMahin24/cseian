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
        <SearchComponent
          placeholder="Search by Names, Series, Country"
          action={searchDirectory}
        />
        {data ? (
          <>
            <DirectoryList data={data} />
          </>
        ) : (
          <></>
        )}
      </DashboardPage>
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.directory.result,
});

export default connect(mapStateToProps, { searchDirectory })(Directory);
