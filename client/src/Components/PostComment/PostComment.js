import { Field, Form, Formik } from "formik";
import React from "react";
import {
  Card,
  Col,
  Form as BootstrapForm,
  InputGroup,
  Row,
} from "react-bootstrap";
import * as Yup from "yup";
import styles from "./PostComment.module.css";

import { connect } from "react-redux";
import { commentCreate } from "../../Actions/Forum.action";

const PostComment = ({ commentCreate, postId }) => {
  const onSubmitHandeler = async (values, action) => {
    let check = await commentCreate(values);
    if (check === true) {
      action.resetForm();
    }
  };

  const initVals = {
    comment: "",
    postId,
  };

  const LoginSchema = Yup.object().shape({
    comment: Yup.string().notRequired(),
  });
  return (
    <Row className={`py-3`}>
      <Col md={11} className={styles.post}>
        <Formik
          initialValues={initVals}
          validationSchema={LoginSchema}
          onSubmit={(values, action) => onSubmitHandeler(values, action)}
          enableReinitialize
        >
          {({ errors, touched }) => (
            <Form id="login__form" as={BootstrapForm}>
              <InputGroup className="mb-3">
                <Field
                  as={"textarea"}
                  className="form-control"
                  name="comment"
                  rows={8}
                  type="text"
                  placeholder="Type your comment here..."
                  isValid={!errors.comment && touched.comment}
                  isInvalid={errors.comment && touched.comment}
                />
                {errors.comment && touched.comment ? (
                  <small className="text-danger col-12">{errors.comment}</small>
                ) : null}
              </InputGroup>

              <div className="text-right">
                <button
                  className={`${styles.submit} btn btn-danger px-5 mt-3`}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>{" "}
      </Col>
    </Row>
  );
};

export default connect(null, { commentCreate })(PostComment);
