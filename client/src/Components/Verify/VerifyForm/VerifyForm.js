import React from "react";
import { Formik, Form, Field } from "formik";
import { Form as BootstrapForm, Row, Col, InputGroup } from "react-bootstrap";
import * as Yup from "yup";
import styles from "./VerifyForm.module.css";
import "./VerifyForm.css";
import { connect } from "react-redux";
import { verify, resendCode } from "../../../Actions/AuthActions";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";

const VerifyForm = ({ verify, id, resendCode }) => {
  const history = useHistory();

  const onSubmitHandeler = async (values) => {
    //LOGIN POST ACTION CALL
    let check = await verify(values);
    if (check === true) {
      setTimeout(() => {
        history.push("/login");
      }, 1000);
      return;
    }
    //console.log(values.email, values.password);
  };

  const initVals = {
    userId: id,
    varificationCode: "",
    //department_check: "",
  };

  const LoginSchema = Yup.object().shape({
    varificationCode: Yup.string().required("Code is required!"),
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
              name="varificationCode"
              type="text"
              placeholder="Code"
              isValid={!errors.varificationCode && touched.varificationCode}
              isInvalid={errors.varificationCode && touched.varificationCode}
            />
            {errors.varificationCode && touched.varificationCode ? (
              <small className="text-danger col-12">
                {errors.varificationCode}
              </small>
            ) : null}
          </InputGroup>

          <div className="text-center">
            <button
              className={`${styles.submit} btn btn-danger px-5 mt-3`}
              type="submit"
            >
              Submit
            </button>
          </div>
          <div className="text-center">
            <span>
              Didn't recive code?{" "}
              <span
                className="text-primary link"
                onClick={() => resendCode(id)}
              >
                Resend Code
              </span>
            </span>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default connect(null, { verify, resendCode })(VerifyForm);
