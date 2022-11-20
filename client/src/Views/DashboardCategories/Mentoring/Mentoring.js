import React from "react";
import { PageHeader } from "../../../Components/Shared/PageHeader";
import mentoringBg from "../../../Assets/PageBg/mentoringBg.png";
import { DashboardPage } from "../../DashboardPage";

const Mentoring = () => {
  return (
    <DashboardPage>
      <PageHeader
        title="Mentoring"
        bg={`url(${mentoringBg})`}
        description={`From brain science to biomedical engineering to the arts and humanities, Brown researchers fuel discovery, solve global problems and confront complex 21st century challenges with a relentless focus on the greater good`}
      />
    </DashboardPage>
  );
};

export default Mentoring;
