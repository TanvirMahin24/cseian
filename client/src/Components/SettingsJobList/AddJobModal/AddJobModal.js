import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button, Form as BootstrapForm, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import * as Yup from "yup";
import { addJobProfile } from "../../../Actions/AuthActions";
import styles from "../SettingsJobList.module.css";

const AddJobModal = ({ user, addJobProfile }) => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmitHandeler = async (values) => {
    setSubmitting(true);
    // TODO ::: create account action
    let check = await addJobProfile(values);
    if (check === true) {
      toastr.success("Job Added Successfully");
      setSubmitting(false);
    }
    setSubmitting(false);
  };

  let initVals = {
    jobTitle: "",
    jobField: "",
    jobOrganization: "",
    jobBrunch: "",
  };

  const SignupSchema = Yup.object().shape({
    jobTitle: Yup.string().required("Title is required!"),
    jobField: Yup.string().required("Field is required!"),
    jobOrganization: Yup.string().required("Organization is required!"),
    jobBrunch: Yup.string().notRequired(),
  });
  if (!user) {
    return <>Loading...</>;
  }
  return (
    <div>
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
                <label htmlFor="jobTitle" className="d-block">
                  Job Title
                </label>
                {errors.jobTitle && touched.jobTitle ? (
                  <small className="text-danger pt-2">{errors.jobTitle}</small>
                ) : null}
              </div>
              <Field
                as={BootstrapForm.Control}
                placeholder="Type your job title..."
                name="jobTitle"
                isValid={!errors.jobTitle && touched.jobTitle}
                type="text"
                className={`${styles.input} w-100`}
                isInvalid={errors.jobTitle && touched.jobTitle}
              />
            </InputGroup>
            <InputGroup className="mb-3 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center pb-2">
                <label htmlFor="jobOrganization" className="d-block">
                  Organization
                </label>
                {errors.jobOrganization && touched.jobOrganization ? (
                  <small className="text-danger pt-2">
                    {errors.jobOrganization}
                  </small>
                ) : null}
              </div>
              <Field
                as={BootstrapForm.Control}
                placeholder="Type your organization..."
                name="jobOrganization"
                isValid={!errors.jobOrganization && touched.jobOrganization}
                type="text"
                className={`${styles.input} w-100`}
                isInvalid={errors.jobOrganization && touched.jobOrganization}
              />
            </InputGroup>
            <InputGroup className="mb-3 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center pb-2">
                <label htmlFor="jobBrunch" className="d-block">
                  Branch
                </label>
                {errors.jobBrunch && touched.jobBrunch ? (
                  <small className="text-danger pt-2">{errors.jobBrunch}</small>
                ) : null}
              </div>
              <Field
                as={BootstrapForm.Control}
                placeholder="Type your branch..."
                name="jobBrunch"
                isValid={!errors.jobBrunch && touched.jobBrunch}
                type="text"
                className={`${styles.input} w-100`}
                isInvalid={errors.jobBrunch && touched.jobBrunch}
              />
            </InputGroup>
            <InputGroup className="mb-3 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center pb-2">
                <label htmlFor="jobField" className="d-block">
                  Field
                </label>
                {errors.jobField && touched.jobField ? (
                  <small className="text-danger pt-2">{errors.jobField}</small>
                ) : null}
              </div>
              <Field
                as={BootstrapForm.Control}
                placeholder="Type your job field/sector..."
                name="jobField"
                isValid={!errors.jobField && touched.jobField}
                type="text"
                className={`${styles.input} w-100`}
                isInvalid={errors.jobField && touched.jobField}
              />
            </InputGroup>

            <div className="pt-4 d-flex align-items-center">
              <Button
                type="submit"
                className={"btn_primary mr-4"}
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Save"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default connect(null, { addJobProfile })(AddJobModal);
