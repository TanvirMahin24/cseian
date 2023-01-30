import React, { useState } from "react";
import styles from "./SettingsForm.module.css";
import { connect } from "react-redux";
import { Field, Formik, Form } from "formik";
import {
  Button,
  InputGroup,
  Form as BootstrapForm,
  Card,
} from "react-bootstrap";
import * as Yup from "yup";
import { useModals } from "@mantine/modals";
import { PasswordChangeForm } from "../PasswordChangeForm";
import { toastr } from "react-redux-toastr";
import { BiLinkExternal } from "react-icons/bi";

const SettingsForm = ({ user, updateUserAction }) => {
  const [submitting, setSubmitting] = useState(false);
  const modals = useModals();
  const onSubmitHandeler = async (values) => {
    setSubmitting(true);
    // TODO ::: create account action
    let check = true;
    if (check === true) {
      toastr.success("Profile Updated Successfully");
      setSubmitting(false);
    }
    setSubmitting(false);
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
  };

  const SignupSchema = Yup.object().shape({
    fname: Yup.string().required("First name is required!"),
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
          <Button>
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

                <div className="pt-3 d-flex align-items-center">
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

export default connect(mapStateToProps, null)(SettingsForm);
