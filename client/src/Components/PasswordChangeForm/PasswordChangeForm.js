import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import { Button, InputGroup, Form as BootstrapForm } from "react-bootstrap";
import * as Yup from "yup";
import styles from "./PasswordChangeForm.module.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { connect } from "react-redux";

const PasswordChangeForm = ({ modals }) => {
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);
  const [isPasswordVisibleOld, setIsPasswordVisibleOld] = useState(false);

  const onSubmitHandeler = async (values) => {
    setLoading(true);
    let check = true;
    if (check === true) {
      setTimeout(() => {
        setLoading(false);
        modals.closeAll();
      }, 500);
    } else {
      setLoading(false);
    }
  };

  let initVals = {
    password: "",
    password2: "",
    newPassword: "",
  };

  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .required("Old password is required!")

      .min(6, "Password is too short!"),
    newPassword: Yup.string()
      .required("New password is required!")

      .min(6, "Password is too short!"),
    password2: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "New passwords do not match!")
      .required("Retype new Password is required!"),
  });
  return (
    <div className="text-center">
      <Formik
        initialValues={initVals}
        validationSchema={SignupSchema}
        onSubmit={(values) => onSubmitHandeler(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <InputGroup className="mb-3 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center">
                <label htmlFor="password" className="d-block">
                  Old Password
                </label>
                {errors.password && touched.password ? (
                  <small className="text-danger">{errors.password}</small>
                ) : null}
              </div>
              <Field
                as={BootstrapForm.Control}
                placeholder="Type your old password"
                name="password"
                isValid={!errors.password && touched.password}
                type={isPasswordVisibleOld ? "text" : "password"}
                className={`${styles.input} w-100 icon-hidden`}
                isInvalid={errors.password && touched.password}
                style={{ position: "relative" }}
              />
              {!isPasswordVisibleOld ? (
                <AiOutlineEye
                  className={styles.eyeIcon}
                  color="black"
                  onClick={() => setIsPasswordVisibleOld(!isPasswordVisibleOld)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className={styles.eyeIcon}
                  onClick={() => setIsPasswordVisibleOld(!isPasswordVisibleOld)}
                />
              )}
            </InputGroup>
            <InputGroup className="mb-3 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center">
                <label htmlFor="newPassword" className="d-block">
                  New Password
                </label>
                {errors.newPassword && touched.newPassword ? (
                  <small className="text-danger">{errors.newPassword}</small>
                ) : null}
              </div>
              <Field
                as={BootstrapForm.Control}
                placeholder="Create your own password"
                name="newPassword"
                isValid={!errors.newPassword && touched.newPassword}
                type={isPasswordVisible ? "text" : "password"}
                className={`${styles.input} w-100 icon-hidden`}
                isInvalid={errors.newPassword && touched.newPassword}
                style={{ position: "relative" }}
              />
              {!isPasswordVisible ? (
                <AiOutlineEye
                  className={styles.eyeIcon}
                  color="black"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className={styles.eyeIcon}
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                />
              )}
            </InputGroup>
            <InputGroup className="mb-3 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center">
                <label htmlFor="password2" className="d-block">
                  Re-type Password
                </label>
                {errors.password2 && touched.password2 ? (
                  <small className="text-danger">{errors.password2}</small>
                ) : null}
              </div>
              <Field
                as={BootstrapForm.Control}
                placeholder="Re-type to confirm password"
                name="password2"
                isValid={!errors.password2 && touched.password2}
                type={isPasswordVisible2 ? "text" : "password"}
                className={`${styles.input} w-100 icon-hidden`}
                isInvalid={errors.password2 && touched.password2}
                style={{ position: "relative" }}
              />
              {!isPasswordVisible2 ? (
                <AiOutlineEye
                  className={styles.eyeIcon}
                  onClick={() => setIsPasswordVisible2(!isPasswordVisible2)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className={styles.eyeIcon}
                  onClick={() => setIsPasswordVisible2(!isPasswordVisible2)}
                />
              )}
            </InputGroup>

            <div className="pt-3">
              <Button
                variant="primary"
                type="submit"
                className="btn_primary"
                disabled={loading}
              >
                {loading ? "Loading..." : "Change Password"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default connect(null, null)(PasswordChangeForm);
