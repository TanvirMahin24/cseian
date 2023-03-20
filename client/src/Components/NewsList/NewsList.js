import React, { useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Moment from "react-moment";
import { connect } from "react-redux";
import { getEventList } from "../../Actions/event.action";
import LoaderComponent from "../Shared/LoaderComponent/LoaderComponent";
import styles from "./NewsList.module.css";
import { useModals } from "@mantine/modals";
import { EventRegForm } from "../EventRegForm";
import { EventAddForm } from "../EventAddForm";

const NewsList = ({ data, getEventList, user }) => {
  const modals = useModals();
  useEffect(() => {
    if (!data) {
      getEventList();
    }
  }, []);

  const registerModal = (id) => {
    modals.openModal({
      title: "Register Now",
      closeOnClickOutside: false,
      children: <EventRegForm id={id} />,
    });
  };
  const addEventModal = () => {
    modals.openModal({
      title: "Add Event",
      closeOnClickOutside: false,
      children: <EventAddForm />,
    });
  };
  return (
    <div className="container-fluid pb-5">
      <div className="d-flex flex-md-row flex-column justify-content-between align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-start py-4">
          <div className={`${styles.line} order__1`}></div>
          <span className={`${styles.heading} order__2 d-block`}>
            Latest Events
          </span>
        </div>
        {user?.memberRole === "ADMIN" ? (
          <Button onClick={() => addEventModal()}>Add Event</Button>
        ) : (
          <></>
        )}
      </div>
      {!data ? (
        <LoaderComponent />
      ) : (
        <Row>
          {data.map((event) => (
            <Col key={event.eventId} md={4} className={`py-3`}>
              <Card className={styles.card} bg="white">
                <Card.Body>
                  <Card.Title className={styles.crd__title}>
                    {event.eventName}
                  </Card.Title>
                  <span className="d-block">
                    Date:{" "}
                    <Moment format={"DD MMMM YYYY"}>{event.eventDate}</Moment>
                  </span>
                  <span className="d-block">Venue: {event.eventVenue}</span>
                  <span className="d-block pb-3">
                    Registration Deadline:{" "}
                    <Moment format={"DD MMMM YYYY"}>
                      {event.registrationDeadline}
                    </Moment>
                  </span>
                  <Button onClick={() => registerModal(event.eventId)}>
                    {" "}
                    Register Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  data: state.event.event,
  user: state.auth.user,
});
export default connect(mapStateToProps, { getEventList })(NewsList);
