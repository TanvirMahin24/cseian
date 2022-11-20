import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Form as BootstrapForm, FormGroup } from "react-bootstrap";
import * as Yup from "yup";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import styles from "./PostInForumForm.module.css";
import "./PostInForumForm.css";

const PostInForumForm = () => {
  const [description, setDescription] = useState(EditorState.createEmpty());
  const onSubmitHandeler = (values) => {
    //CREATE FORUM POST ACTION CALL
    console.log(values);
    //console.log(description.getCurrentContent());
  };
  const onContentStateChange = (val) => {
    setDescription(val);
  };

  const toolbarConfig = {
    options: ["inline", "link", "embedded", "emoji", "image"],
    image: {
      uploadEnabled: true,
      previewImage: true,
      inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
    },
  };

  const initVals = {
    title: "",
    series: "",
    include_in: false,
    exclude_in: false,
  };
  const PostInForumSchema = Yup.object().shape({
    title: Yup.string().required("Title is required!"),
  });
  return (
    <Formik
      initialValues={initVals}
      validationSchema={PostInForumSchema}
      onSubmit={(values) => onSubmitHandeler(values)}
    >
      {({ errors, touched, values, setValues }) => (
        <Form id="post__in__forum__form" as={BootstrapForm}>
          <FormGroup className="mb-3">
            <BootstrapForm.Label className={styles.label}>
              Title
            </BootstrapForm.Label>
            <Field
              as={BootstrapForm.Control}
              className="col-12"
              name="title"
              type="text"
              isValid={!errors.title && touched.title}
              isInvalid={errors.title && touched.title}
            />
            {errors.title && touched.title ? (
              <small className="text-danger col-12">{errors.title}</small>
            ) : null}
          </FormGroup>
          <span className={`${styles.label} pb-2 d-block`}>Description</span>
          <div className={styles.editor__wrapper}>
            <Editor
              toolbar={toolbarConfig}
              editorState={description}
              onEditorStateChange={onContentStateChange}
              name="description"
              wrapperClassName={styles.editor}
              id="description"
            />
          </div>
          <FormGroup className="my-3">
            <BootstrapForm.Label className={styles.label}>
              Series
            </BootstrapForm.Label>
            <Field
              as={BootstrapForm.Control}
              className="col-12"
              name="series"
              type="text"
              isValid={!errors.series && touched.series}
              isInvalid={errors.series && touched.series}
            />
            {errors.series && touched.series ? (
              <small className="text-danger col-12">{errors.series}</small>
            ) : null}
          </FormGroup>
          <div className="text-center">
            <button
              className={`${styles.submit} btn btn-danger px-5 mt-3`}
              type="submit"
            >
              CREATE FORM
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PostInForumForm;
