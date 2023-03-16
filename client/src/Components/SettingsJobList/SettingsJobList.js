import { useModals } from "@mantine/modals";
import React from "react";
import { Button, Card } from "react-bootstrap";
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
          <AddJobModal user={user} />
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
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(SettingsJobList);
