import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Col, Form as BootstrapForm, FormGroup, Row } from "react-bootstrap";
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
  };
  const PostInForumSchema = Yup.object().shape({
    description: Yup.string().required("Description required!"),
  });
  return (
    <Formik
      initialValues={initVals}
      validationSchema={PostInForumSchema}
      onSubmit={(values) => onSubmitHandeler(values)}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <Form id="" as={BootstrapForm}>
          <span className={`${styles.label} pb-2 d-block`}>Description</span>
          <div className={styles.editor__wrapper}>
            <MDEditor
              value={values.description}
              onChange={(e) => setFieldValue("description", e)}
              className={styles.md}
            />
          </div>
          {/* <span className={`${styles.label} pb-2 pt-4 d-block`}>
            Select Image
          </span>
          <input
            type="file"
            name="image"
            onChange={onChangeHandeler}
            className="form-control"
            value={img}
          /> */}

          <div className=" mt-4">
            <input
              name="image"
              onChange={onChangeHandeler}
              type="file"
              id="customFileLangHTML"
            />
            <label class="custom-file-label" for="customFileLangHTML">
              Select Image
            </label>
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
