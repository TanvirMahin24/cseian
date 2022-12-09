import React from "react";
import { Formik, Form, Field } from "formik";
import { Form as BootstrapForm, Row, Col, InputGroup } from "react-bootstrap";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";
import "./LoginForm.css";
import { connect } from "react-redux";
import { login } from "../../../Actions/AuthActions";
import { useHistory } from "react-router";

const LoginForm = ({ login }) => {
  const history = useHistory();
  const onSubmitHandeler = (values) => {
    //LOGIN POST ACTION CALL
    let check = login(values.username, values.password);
    if (check === true) {
      setTimeout(() => {
        history.push("/dashboard");
      }, 1000);
    }
    //console.log(values.email, values.password);
  };

  const initVals = {
    username: "",
    password: "",
    //department_check: "",
  };

  const LoginSchema = Yup.object().shape({
    password: Yup.string().required("Password is required!"),
    username: Yup.string().required("Username is required!"),
  });
  return (
    <Formik
      initialValues={initVals}
      validationSchema={LoginSchema}
      onSubmit={(values) => onSubmitHandeler(values)}
    >
      {({ errors, touched }) => (
        <Form id="login__form" as={BootstrapForm}>
          <InputGroup className="mb-3">
            <Field
              as={BootstrapForm.Control}
              className="col-12"
              name="username"
              type="text"
              placeholder="Username"
              isValid={!errors.username && touched.username}
              isInvalid={errors.username && touched.username}
            />
            {errors.username && touched.username ? (
              <small className="text-danger col-12">{errors.username}</small>
            ) : null}
          </InputGroup>
          <Row className="mb-3">
            <Col>
              <Field
                as={BootstrapForm.Control}
                name="password"
                type="password"
                isInvalid={errors.password && touched.password}
                placeholder="Password"
                isValid={!errors.password && touched.password}
              />
              {errors.password && touched.password ? (
                <small className="text-danger">{errors.password}</small>
              ) : null}
            </Col>
          </Row>
          {/* <InputGroup className="mb-3">
            <Col xs={12} className="d-flex px-0">
              <Field
                as={BootstrapForm.Control}
                id="department_check"
                name="department_check"
                type="checkbox"
              />
              <label
                className={`${styles.label} pl-2`}
                id="department_check_label"
                htmlFor="department_check"
              >
                {" "}
                Select if you are a faculty at Dept. of CSE, RUET
              </label>
            </Col>
            {errors.department_check && touched.department_check ? (
              <small className="text-danger col-12">
                {errors.department_check}
              </small>
            ) : null}
          </InputGroup> */}
          <div className="text-center">
            <button
              className={`${styles.submit} btn btn-danger px-5 mt-3`}
              type="submit"
            >
              LOGIN
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default connect(null, { login })(LoginForm);
