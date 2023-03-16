import { useModals } from "@mantine/modals";
import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { connect } from "react-redux";
import AddJobModal from "./AddJobModal/AddJobModal";
import styles from "./SettingsJobList.module.css";

const SettingsJobList = ({ user }) => {
  const modals = useModals();
  const onAddClick = () => {
    modals.openModal({
      title: "Add Job",
      children: (
        <>
          <AddJobModal user={user} modals={modals} />
        </>
      ),
      closeOnClickOutside: false,
    });
  };
  if (!user || !user.memberStudentId) {
    return <>Loading...</>;
  }
  return (
    <div>
      <Card className={styles.card}>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <h2>Work Experience</h2>
            <Button onClick={onAddClick}>
              <span className="my-auto mr-2">
                <AiOutlinePlus color="#fff" />
              </span>{" "}
              Add Job
            </Button>
          </div>
          <hr />
          <ListGroup>
            {user?.memberCurrentJobs.map((job) => (
              <ListGroup.Item key={job.alumniJobId}>
                <span className="d-block">
                  <span className="fw-bold">{job.alumniJobTitle}</span> at{" "}
                  <span className="fw-bold">{job.alumniJobOrganization}</span>
                </span>
                {job.alumniJobOrganizationBrunch ? (
                  <span className="d-block">
                    <span className="fw-bold">Branch:</span>{" "}
                    {job.alumniJobOrganizationBrunch}
                  </span>
                ) : (
                  <></>
                )}

                <span className="d-block">
                  <span className="fw-bold">Field:</span> {job.alumniJobField}
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(SettingsJobList);
