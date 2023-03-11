import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Col, Form as BootstrapForm, Row } from "react-bootstrap";
import * as Yup from "yup";
import { connect } from "react-redux";
import styles from "./PostInForumForm.module.css";
import "./PostInForumForm.css";
import MDEditor from "@uiw/react-md-editor";
import { postCreate } from "../../../Actions/Forum.action";

const PostInForumForm = ({ postCreate }) => {
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const onSubmitHandeler = async (values) => {
    setLoading(true);
    let check = await postCreate(values, img);
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
    description: "",
    postTitle: "",
  };
  const PostInForumSchema = Yup.object().shape({
    description: Yup.string().required("Description required!"),
    postTitle: Yup.string().required("Title is required!"),
  });
  return (
    <Formik
      initialValues={initVals}
      validationSchema={PostInForumSchema}
      onSubmit={(values) => onSubmitHandeler(values)}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <Form id="" as={BootstrapForm}>
          <div className="mb-3 w-100">
            <Row>
              <Col xs={12}>
                <div className="d-flex justify-content-between align-items-center pb-2">
                  <label htmlFor="postTitle" className="d-block">
                    Title
                  </label>
                  {errors.postTitle && touched.postTitle ? (
                    <small className="text-danger ">{errors.postTitle}</small>
                  ) : null}
                </div>
              </Col>
              <Col xs={12}>
                <Field
                  as={BootstrapForm.Control}
                  name="postTitle"
                  type="text"
                  placeholder="Title"
                  className="w-100"
                  isValid={!errors.postTitle && touched.postTitle}
                  isInvalid={errors.postTitle && touched.postTitle}
                />
              </Col>
            </Row>
          </div>
          <span className={`${styles.label} pb-2 d-block`}>Description</span>
          <div className={styles.editor__wrapper}>
            <MDEditor
              value={values.description}
              onChange={(e) => setFieldValue("description", e)}
              className={styles.md}
            />
          </div>

          <div className=" mt-4">
            <span className="d-block pb-2">Select image (optional)</span>
            <input
              name="image"
              onChange={onChangeHandeler}
              type="file"
              id="customFileLangHTML"
            />
          </div>

          <div className="text-center">
            <button
              className={`${styles.submit} btn btn-danger px-5 mt-3`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading" : "CREATE POST"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default connect(null, { postCreate })(PostInForumForm);
