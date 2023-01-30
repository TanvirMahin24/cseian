import React, { useState } from "react";
import styles from "./SettingsForm.module.css";
import { connect } from "react-redux";
import { Field, Formik, Form } from "formik";
import { Button, InputGroup, Form as BootstrapForm } from "react-bootstrap";
import * as Yup from "yup";
import { useModals } from "@mantine/modals";
import { PasswordChangeForm } from "../PasswordChangeForm";
import { toastr } from "react-redux-toastr";

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
    fname: user && user.first_name ? user.first_name : "",
    lname: user && user.last_name ? user.last_name : "",
    phone: user && user.phone ? user.phone : "",
    email: user && user.email ? user.email : "",
  };

  const SignupSchema = Yup.object().shape({
    fname: Yup.string().required("First name is required!"),
    lname: Yup.string().required("Last name is required!"),
    phone: Yup.string()
      .min(11, "Number must be 11 digits")
      .max(11, "Number must be 11 digits")
      .required("Phone number is required!"),
    email: Yup.string()
      .email("Enter a valid email!")
      .required("Email is required!"),
  });
  return (
    <div className="px-md-5 px-3">
      <h2 className="border_left mt-3">Settings</h2>
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
                    First Name
                  </label>
                  {errors.fname && touched.fname ? (
                    <small className="text-danger pt-2">{errors.fname}</small>
                  ) : null}
                </div>
                <Field
                  as={BootstrapForm.Control}
                  placeholder="Type your first name..."
                  name="fname"
                  isValid={!errors.fname && touched.fname}
                  type="text"
                  className={`${styles.input} w-100`}
                  isInvalid={errors.fname && touched.fname}
                />
              </InputGroup>
              <InputGroup className="mb-3 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center pb-2">
                  <label htmlFor="lname" className="d-block">
                    Last Name
                  </label>
                  {errors.lname && touched.lname ? (
                    <small className="text-danger pt-2">{errors.lname}</small>
                  ) : null}
                </div>
                <Field
                  as={BootstrapForm.Control}
                  placeholder="Type your last name..."
                  name="lname"
                  isValid={!errors.lname && touched.lname}
                  type="text"
                  className={`${styles.input} w-100`}
                  isInvalid={errors.lname && touched.lname}
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
                  className={`${styles.input} w-100`}
                  isInvalid={errors.email && touched.email}
                />
              </InputGroup>

              <div className="pt-3 d-flex align-items-center">
                <Button
                  type="submit"
                  className={"btn_primary me-4"}
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(SettingsForm);
