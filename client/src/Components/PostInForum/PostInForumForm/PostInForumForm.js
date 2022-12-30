import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Col, Form as BootstrapForm, FormGroup, Row } from "react-bootstrap";
import * as Yup from "yup";
import { Editor } from "react-draft-wysiwyg";
import styles from "./PostInForumForm.module.css";
import "./PostInForumForm.css";
import MDEditor from "@uiw/react-md-editor";

const PostInForumForm = () => {
  const onSubmitHandeler = (values) => {
    //CREATE FORUM POST ACTION CALL
    console.log(values);
  };

  const initVals = {
    postTitle: "",
    companyName: "",
    location: "",
    description: "",
    deadline: "",
    durationType: "",
    placementType: "",
    applicationlink: "",
  };
  const PostInForumSchema = Yup.object().shape({
    postTitle: Yup.string().required("Title is required!"),
    companyName: Yup.string().required("Company is required!"),
    location: Yup.string().required("Location is required!"),
    description: Yup.string().required("Description required!"),
    deadline: Yup.string().required("Deadline required!"),
    durationType: Yup.string().required("Type required!"),
    placementType: Yup.string().required("Placement type required!"),
    applicationlink: Yup.string().required("Link is required!"),
  });
  return (
    <Formik
      initialValues={initVals}
      validationSchema={PostInForumSchema}
      onSubmit={(values) => onSubmitHandeler(values)}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <Form id="post__in__forum__form" as={BootstrapForm}>
          <Row>
            <Col md={7}>
              <FormGroup className="mb-3">
                <BootstrapForm.Label className={styles.label}>
                  Title
                </BootstrapForm.Label>
                <Field
                  as={BootstrapForm.Control}
                  className="col-12"
                  name="postTitle"
                  placeholder="Title of job..."
                  type="text"
                  isValid={!errors.postTitle && touched.postTitle}
                  isInvalid={errors.postTitle && touched.postTitle}
                />
                {errors.postTitle && touched.postTitle ? (
                  <small className="text-danger col-12">
                    {errors.postTitle}
                  </small>
                ) : null}
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup className="mb-3">
                <BootstrapForm.Label className={styles.label}>
                  Company Name
                </BootstrapForm.Label>
                <Field
                  as={BootstrapForm.Control}
                  className="col-12"
                  name="companyName"
                  placeholder="Company of job..."
                  type="text"
                  isValid={!errors.companyName && touched.companyName}
                  isInvalid={errors.companyName && touched.companyName}
                />
                {errors.companyName && touched.companyName ? (
                  <small className="text-danger col-12">
                    {errors.companyName}
                  </small>
                ) : null}
              </FormGroup>
            </Col>
          </Row>

          <FormGroup className="mb-3">
            <BootstrapForm.Label className={styles.label}>
              Location
            </BootstrapForm.Label>
            <Field
              as={BootstrapForm.Control}
              className="col-12"
              name="location"
              type="text"
              placeholder="Location"
              isValid={!errors.location && touched.location}
              isInvalid={errors.location && touched.location}
            />
            {errors.location && touched.location ? (
              <small className="text-danger col-12">{errors.location}</small>
            ) : null}
          </FormGroup>
          <FormGroup className="mb-3">
            <BootstrapForm.Label className={styles.label}>
              Deadline
            </BootstrapForm.Label>
            <Field
              as={BootstrapForm.Control}
              className="col-12"
              name="deadline"
              type="text"
              placeholder="Location"
              isValid={!errors.deadline && touched.deadline}
              isInvalid={errors.deadline && touched.deadline}
            />
            {errors.deadline && touched.deadline ? (
              <small className="text-danger col-12">{errors.deadline}</small>
            ) : null}
          </FormGroup>

          <span className={`${styles.label} pb-2 d-block`}>Description</span>
          <div className={styles.editor__wrapper}>
            <MDEditor
              value={values.description}
              onChange={(e) => setFieldValue("description", e)}
              className={styles.md}
            />
          </div>

          <div className="text-center">
            <button
              className={`${styles.submit} btn btn-danger px-5 mt-3`}
              type="submit"
            >
              CREATE JOB
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PostInForumForm;
