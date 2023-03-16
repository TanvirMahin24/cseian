import React, { useState } from "react";
import styles from "./SettingsForm.module.css";
import { connect } from "react-redux";
import { Field, Formik, Form } from "formik";
import {
  Button,
  InputGroup,
  Form as BootstrapForm,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import * as Yup from "yup";
import { useModals } from "@mantine/modals";
import { PasswordChangeForm } from "../PasswordChangeForm";
import { toastr } from "react-redux-toastr";
import { BiLinkExternal } from "react-icons/bi";
import { editProfile } from "../../Actions/AuthActions";
import { getProfile } from "../../Actions/Directory.action";

const SettingsForm = ({ user, editProfile, getProfile }) => {
  const [submitting, setSubmitting] = useState(false);
  const [img, setImg] = useState(null);
  const modals = useModals();
  const onSubmitHandeler = async (values) => {
    setSubmitting(true);
    // TODO ::: create account action
    let check = await editProfile(values, img);
    if (check === true) {
      toastr.success("Profile Updated Successfully");
      setSubmitting(false);
    }
    setSubmitting(false);
  };

  const handleUpload = (e) => {
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
    } else {
      setImg(null);
    }
  };

  const handleUploadAvatar = () => {
    modals.openModal({
      title: "Change Password",
      centered: true,
      closeOnClickOutside: false,
      children: (
        <>
          <PasswordChangeForm modals={modals} />
        </>
      ),
    });
  };

  let initVals = {
    fname: user && user.memberName ? user.memberName : "",
    memberStudentId: user && user.memberStudentId ? user.memberStudentId : "",
    phone: user && user.memberContact ? user.memberContact : "",
    email: user && user.memberEmail ? user.memberEmail : "",
    availableTimeToContact:
      user && user.memberAvailableContactHour
        ? user.memberAvailableContactHour
        : "",
    linkedin: user && user.memberLinkedin ? user.memberLinkedin : "",
    country: user && user.memberCountry ? user.memberCountry : "",
    city: user && user.memberCity ? user.memberCity : "",
  };

  const SignupSchema = Yup.object().shape({
    fname: Yup.string().required("First name is required!"),
    linkedin: Yup.string().notRequired(),
    availableTimeToContact: Yup.string().required("This is required!"),
    country: Yup.string().required("Country is required!"),
    city: Yup.string().required("City is required!"),
    memberStudentId: Yup.string().required("Student ID is required!"),
    phone: Yup.string()
      .min(11, "Number must be 11 digits")
      .max(11, "Number must be 11 digits")
      .required("Phone number is required!"),
    email: Yup.string()
      .email("Enter a valid email!")
      .required("Email is required!"),
  });
  return (
    <Card className={styles.card}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <h2>Settings</h2>
          <Button onClick={() => getProfile(user?.memberStudentId)}>
            <span className="my-auto mr-2">
              <BiLinkExternal />
            </span>{" "}
            View Your Profile
          </Button>
        </div>
        <div className={styles.form}>
          <Formik
            initialValues={initVals}
            validationSchema={SignupSchema}
            enableReinitialize
            onSubmit={(values) => onSubmitHandeler(values)}
          >
            {({ errors, touched }) => (
              <Form>
                <InputGroup className="mb-3 d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center pb-2">
                    <label htmlFor="fname" className="d-block">
                      Name
                    </label>
                    {errors.fname && touched.fname ? (
                      <small className="text-danger pt-2">{errors.fname}</small>
                    ) : null}
                  </div>
                  <Field
                    as={BootstrapForm.Control}
                    placeholder="Type your  name..."
                    name="fname"
                    isValid={!errors.fname && touched.fname}
                    type="text"
                    className={`${styles.input} w-100`}
                    isInvalid={errors.fname && touched.fname}
                  />
                </InputGroup>
                <InputGroup className="mb-3 d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center pb-2">
                    <label htmlFor="memberStudentId" className="d-block">
                      Student ID
                    </label>
                    {errors.memberStudentId && touched.memberStudentId ? (
                      <small className="text-danger pt-2">
                        {errors.memberStudentId}
                      </small>
                    ) : null}
                  </div>
                  <Field
                    disabled
                    as={BootstrapForm.Control}
                    placeholder="Type your student ID..."
                    name="memberStudentId"
                    isValid={!errors.memberStudentId && touched.memberStudentId}
                    type="text"
                    className={`${styles.input} w-100`}
                    isInvalid={
                      errors.memberStudentId && touched.memberStudentId
                    }
                  />
                </InputGroup>
                <InputGroup className="mb-3 d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center pb-2">
                    <label htmlFor="phone" className="d-block">
                      Phone Number
                    </label>
                    {errors.phone && touched.phone ? (
                      <small className="text-danger pt-2">{errors.phone}</small>
                    ) : null}
                  </div>
                  <Field
                    as={BootstrapForm.Control}
                    placeholder="Type your phone no..."
                    name="phone"
                    isValid={!errors.phone && touched.phone}
                    type="text"
                    className={`${styles.input} w-100`}
                    isInvalid={errors.phone && touched.phone}
                  />
                </InputGroup>
                <InputGroup className="mb-3 d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center pb-2">
                    <label htmlFor="email" className="d-block">
                      Email
                    </label>
                    {errors.email && touched.email ? (
                      <small className="text-danger pt-2">{errors.email}</small>
                    ) : null}
                  </div>
                  <Field
                    as={BootstrapForm.Control}
                    placeholder="Type your email..."
                    name="email"
                    isValid={!errors.email && touched.email}
                    type="text"
                    disabled
                    className={`${styles.input} w-100`}
                    isInvalid={errors.email && touched.email}
                  />
                </InputGroup>
                <InputGroup className="mb-3 d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center pb-2">
                    <label htmlFor="availableTimeToContact" className="d-block">
                      Available time to contact
                    </label>
                    {errors.availableTimeToContact &&
                    touched.availableTimeToContact ? (
                      <small className="text-danger pt-2">
                        {errors.availableTimeToContact}
                      </small>
                    ) : null}
                  </div>
                  <Field
                    as={BootstrapForm.Control}
                    placeholder="Type your available time to contact..."
                    name="availableTimeToContact"
                    isValid={
                      !errors.availableTimeToContact &&
                      touched.availableTimeToContact
                    }
                    type="text"
                    className={`${styles.input} w-100`}
                    isInvalid={
                      errors.availableTimeToContact &&
                      touched.availableTimeToContact
                    }
                  />
                </InputGroup>
                <Row>
                  <Col md={6}>
                    <InputGroup className="mb-3 d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-center pb-2">
                        <label htmlFor="country" className="d-block">
                          Country
                        </label>
                        {errors.country && touched.country ? (
                          <small className="text-danger pt-2">
                            {errors.country}
                          </small>
                        ) : null}
                      </div>
                      <Field
                        as={BootstrapForm.Control}
                        placeholder="Type your country..."
                        name="country"
                        isValid={!errors.country && touched.country}
                        type="text"
                        className={`${styles.input} w-100`}
                        isInvalid={errors.country && touched.country}
                      />
                    </InputGroup>
                  </Col>
                  <Col md={6}>
                    <InputGroup className="mb-3 d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-center pb-2">
                        <label htmlFor="city" className="d-block">
                          City
                        </label>
                        {errors.city && touched.city ? (
                          <small className="text-danger pt-2">
                            {errors.city}
                          </small>
                        ) : null}
                      </div>
                      <Field
                        as={BootstrapForm.Control}
                        placeholder="Type yourcity..."
                        name="city"
                        isValid={!errors.city && touched.city}
                        type="text"
                        className={`${styles.input} w-100`}
                        isInvalid={errors.city && touched.city}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <InputGroup className="mb-3 d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center pb-2">
                    <label htmlFor="linkedin" className="d-block">
                      Linkedin
                    </label>
                    {errors.linkedin && touched.linkedin ? (
                      <small className="text-danger pt-2">
                        {errors.linkedin}
                      </small>
                    ) : null}
                  </div>
                  <Field
                    as={BootstrapForm.Control}
                    placeholder="Type your Linkedin..."
                    name="linkedin"
                    isValid={!errors.linkedin && touched.linkedin}
                    type="text"
                    className={`${styles.input} w-100`}
                    isInvalid={errors.linkedin && touched.linkedin}
                  />
                </InputGroup>
                <span className="d-block pt-3 pb-2">
                  Change profile picture
                </span>
                <input onChange={handleUpload} type="file" name="image" id="" />

                <div className="pt-4 d-flex align-items-center">
                  <Button
                    type="submit"
                    className={"btn_primary mr-4"}
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Save"}
                  </Button>
                  <Button
                    className={"btn_primary"}
                    onClick={() => handleUploadAvatar()}
                  >
                    Change Password
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { editProfile, getProfile })(
  SettingsForm
);
