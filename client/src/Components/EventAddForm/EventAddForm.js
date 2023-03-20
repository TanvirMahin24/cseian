import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Col, Form as BootstrapForm, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import * as Yup from "yup";
import { createEvent } from "../../Actions/event.action";
import styles from "./EventAddForm.module.css";

const EventAddForm = ({ createEvent }) => {
  const [loading, setLoading] = useState(false);

  const [img, setImg] = useState(null);
  const onSubmitHandeler = async (values) => {
    if (!img) {
      toastr.error("Error", "Please upload image!");
      return;
    }
    setLoading(true);

    let check = await createEvent(values, img);
    if (check === true) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const onChangeHandeler = (e) => {
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
    } else {
      setImg(null);
    }
  };

  const initVals = {
    eventName: "",
    eventDescription: "",
    recepientBankAccountNo: "",
    eventDate: "",
    deadline: "",
    eventVanue: "",
    status: 0,
  };
  const PostInForumSchema = Yup.object().shape({
    eventName: Yup.string().required("Name required!"),
    eventDescription: Yup.string().required("Description is required!"),
    eventDate: Yup.string().required("Date is required!"),
    deadline: Yup.string().required("Deadline is required!"),
    eventVanue: Yup.string().required("Vanue is required!"),
    status: Yup.number().required("Status is required!"),
  });
  return (
    <Formik
      initialValues={initVals}
      validationSchema={PostInForumSchema}
      enableReinitialize
      onSubmit={(values) => onSubmitHandeler(values)}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <Form id="" as={BootstrapForm}>
          <div className="mb-3 w-100">
            <Row>
              <Col xs={12}>
                <div className="d-flex justify-content-between align-items-center pb-2">
                  <label htmlFor="eventName" className="d-block">
                    Event Name
                  </label>
                  {errors.eventName && touched.eventName ? (
                    <small className="text-danger ">{errors.eventName}</small>
                  ) : null}
                </div>
              </Col>
              <Col xs={12}>
                <Field
                  as={BootstrapForm.Control}
                  name="eventName"
                  type="text"
                  placeholder="Event name..."
                  className="w-100"
                  isValid={!errors.eventName && touched.eventName}
                  isInvalid={errors.eventName && touched.eventName}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3 w-100">
            <Row>
              <Col xs={12}>
                <div className="d-flex justify-content-between align-items-center pb-2">
                  <label htmlFor="eventVanue" className="d-block">
                    Event Vanue
                  </label>
                  {errors.eventVanue && touched.eventVanue ? (
                    <small className="text-danger ">{errors.eventVanue}</small>
                  ) : null}
                </div>
              </Col>
              <Col xs={12}>
                <Field
                  as={BootstrapForm.Control}
                  name="eventVanue"
                  type="text"
                  placeholder="Event vanue..."
                  className="w-100"
                  isValid={!errors.eventVanue && touched.eventVanue}
                  isInvalid={errors.eventVanue && touched.eventVanue}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3 w-100">
            <Row>
              <Col xs={12}>
                <div className="d-flex justify-content-between align-items-center pb-2">
                  <label htmlFor="status" className="d-block">
                    Event Vanue
                  </label>
                  {errors.status && touched.status ? (
                    <small className="text-danger ">{errors.status}</small>
                  ) : null}
                </div>
              </Col>
              <Col xs={12}>
                <select
                  value={values.status}
                  className="form-control"
                  onChange={(e) => setFieldValue("status", e.target.value)}
                  aria-label="status"
                >
                  <option value="0">Internal</option>
                  <option value="1">Public</option>
                  <option value="2">Alumni</option>
                </select>
              </Col>
            </Row>
          </div>
          <div className="mb-3 w-100">
            <Row>
              <Col xs={12}>
                <div className="d-flex justify-content-between align-items-center pb-2">
                  <label htmlFor="eventDescription" className="d-block">
                    Description
                  </label>
                  {errors.eventDescription && touched.eventDescription ? (
                    <small className="text-danger ">
                      {errors.eventDescription}
                    </small>
                  ) : null}
                </div>
              </Col>
              <Col xs={12}>
                <Field
                  as={"textarea"}
                  rows={8}
                  name="eventDescription"
                  type="text"
                  placeholder="Description"
                  className="w-100 form-control"
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3 w-100">
            <Row>
              <Col xs={12}>
                <div className="d-flex justify-content-between align-items-center pb-2">
                  <label htmlFor="eventDate" className="d-block">
                    Date
                  </label>
                  {errors.eventDate && touched.eventDate ? (
                    <small className="text-danger ">{errors.eventDate}</small>
                  ) : null}
                </div>
              </Col>
              <Col xs={12}>
                <Field
                  as={BootstrapForm.Control}
                  name="eventDate"
                  type="datetime-local"
                  placeholder="Dateof event"
                  className="w-100"
                  isValid={!errors.eventDate && touched.eventDate}
                  isInvalid={errors.eventDate && touched.eventDate}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3 w-100">
            <Row>
              <Col xs={12}>
                <div className="d-flex justify-content-between align-items-center pb-2">
                  <label htmlFor="deadline" className="d-block">
                    Registration Deadline
                  </label>
                  {errors.deadline && touched.deadline ? (
                    <small className="text-danger ">{errors.deadline}</small>
                  ) : null}
                </div>
              </Col>
              <Col xs={12}>
                <Field
                  as={BootstrapForm.Control}
                  name="deadline"
                  type="datetime-local"
                  placeholder="Deadline"
                  className="w-100"
                  isValid={!errors.deadline && touched.deadline}
                  isInvalid={errors.deadline && touched.deadline}
                />
              </Col>
            </Row>
          </div>
          <div className=" mt-4">
            <span className="d-block pb-2">Select ricept image</span>
            <input
              name="image"
              onChange={onChangeHandeler}
              type="file"
              id="customFileLangHTML"
            />
          </div>
          <div className="text-center pt-4">
            <button
              className={`${styles.submit} btn btn-danger px-5 mt-3`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading" : "Submit"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default connect(null, { createEvent })(EventAddForm);
