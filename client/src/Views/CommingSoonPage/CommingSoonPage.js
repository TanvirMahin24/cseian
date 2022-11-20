import React from "react";
import commingSoonImg from "../../Assets/CommingSoon/comming-soon.png";
import { Footer } from "../../Components/Footer";
import { TopbarDashboard } from "../../Components/TopbarDashboard";
import { IoMdArrowBack } from "react-icons/io";
import { useHistory } from "react-router";

const CommingSoonPage = () => {
  const history = useHistory();
  const backHandeler = () => {
    history.goBack();
  };
  return (
    <div className="text-center">
      <TopbarDashboard />
      <img
        src={commingSoonImg}
        alt=""
        style={{ maxWidth: 600, width: "100%" }}
      />
      <div className="pb-5">
        <button className="btn btn-danger" onClick={() => backHandeler()}>
          <IoMdArrowBack className="mr-2" />
          Go Back
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default CommingSoonPage;
