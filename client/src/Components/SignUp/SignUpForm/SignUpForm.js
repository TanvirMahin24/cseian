import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Form as BootstrapForm, Row, Col, InputGroup } from "react-bootstrap";
import * as Yup from "yup";
import "./SignUpForm.css";
import styles from "./SignUpForm.module.css";
import { signupAction } from "../../../Actions/AuthActions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router";
import ImageDropZone from "./ImageDropZone/ImageDropZone";
import defaultImg from "../../../Assets/SignUpForm/defaultImg.png";

const SignUpForm = ({ signupAction }) => {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState();
  const [files, setFiles] = useState(defaultImg);
  const onSubmitHandeler = async (values) => {
    //LOGIN POST ACTION CALL
    let check = await signupAction(values, selectedFile);
    console.log(check);
    if (check === true) {
      history.push("/login");
    }
    //console.log(files);
  };

  useEffect(() => {
    if (!selectedFile) {
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (file) => {
    if (!file || file.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    //console.log(selectedFile);
    setSelectedFile(file);
  };

  const initVals = {
    image: defaultImg,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    country: "",
    city: "",
    availableTimeToContact: "",
    linkedin: "",
    id: "",
    department_check: "",
    jobTitle: "",
    jobOrganization: "",
    jobBrunch: "",
  };

  const SignupSchema = Yup.object().shape({
    first_name: Yup.string().required("First Name is required!"),
    last_name: Yup.string().required("Last Name is required!"),
    id: Yup.number().required("Student ID is required!"),
    email: Yup.string().email("Invalid email").required("Email is required!"),
    phone: Yup.string().required("Phone Number is required!"),
    country: Yup.string().required("Country is required!"),
    city: Yup.string().required("City is required!"),
    password: Yup.string().required("Password is required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords do not match!")
      .required("Password is required!"),
    linkedin: Yup.string().required("Linkedin is required!"),
    availableTimeToContact: Yup.string().required(
      "Available time to contact is required!"
    ),
  });
  return (
    <Formik
      initialValues={initVals}
      validationSchema={SignupSchema}
      onSubmit={(values) => onSubmitHandeler(values)}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <Form className="py-5" id="signup__form" as={BootstrapForm}>
          <Row className="mb-3">
            <Col md={3}>
              <div
                className={`${styles.img__wrapper}  mx-auto mb-3 mb-md-0  rounded-circle`}
              >
                <img src={files} alt="user" className={`${styles.img}`} />
              </div>
            </Col>
            <Col md={9} className="my-auto">
              <ImageDropZone
                setFiles={setFiles}
                setFieldValue={setFieldValue}
                values={values}
                onSelectFile={onSelectFile}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Field
                as={BootstrapForm.Control}
                placeholder="First Name*"
                name="first_name"
                isValid={!errors.first_name && touched.first_name}
                type="text"
                isInvalid={errors.first_name && touched.first_name}
              />
              {errors.first_name && touched.first_name ? (
                <small className="text-danger">{errors.first_name}</small>
              ) : null}
            </Col>
            <Col>
              <Field
                placeholder="Last Name*"
                as={BootstrapForm.Control}
                name="last_name"
                isValid={!errors.last_name && touched.last_name}
                type="text"
                isInvalid={errors.last_name && touched.last_name}
              />
              {errors.last_name && touched.last_name ? (
                <small className="text-danger">{errors.last_name}</small>
              ) : null}
            </Col>
          </Row>
          <InputGroup className="mb-3">
            <Field
              as={BootstrapForm.Control}
              className="col-12"
              name="email"
              type="email"
              placeholder="Email Address*"
              isValid={!errors.email && touched.email}
              isInvalid={errors.email && touched.email}
            />
            {errors.email && touched.email ? (
              <small className="text-danger col-12">{errors.email}</small>
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
            <Col>
              <Field
                as={BootstrapForm.Control}
                placeholder="Confirm Password"
                name="confirmPassword"
                type="password"
                isValid={!errors.confirmPassword && touched.confirmPassword}
                isInvalid={errors.confirmPassword && touched.confirmPassword}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <small className="text-danger">{errors.confirmPassword}</small>
              ) : null}
            </Col>
          </Row>
          <Row>
            <Col className="mb-3">
              <Field
                as={BootstrapForm.Control}
                placeholder="Country"
                name="country"
                type="text"
                isValid={!errors.country && touched.country}
                isInvalid={errors.country && touched.country}
              />
              {errors.country && touched.country ? (
                <small className="text-danger">{errors.country}</small>
              ) : null}
            </Col>
            <Col className="mb-3">
              <Field
                as={BootstrapForm.Control}
                placeholder="Phone Number"
                name="phone"
                type="text"
                isValid={!errors.phone && touched.phone}
                isInvalid={errors.phone && touched.phone}
              />
              {errors.phone && touched.phone ? (
                <small className="text-danger">{errors.phone}</small>
              ) : null}
            </Col>
          </Row>

          <InputGroup className="mb-3 mt-3 mt-sm-0">
            <Field
              as={BootstrapForm.Control}
              className="col-12"
              name="city"
              type="text"
              placeholder="Your Current City*"
              isValid={!errors.city && touched.city}
              isInvalid={errors.city && touched.city}
            />

            {errors.city && touched.city ? (
              <small className="text-danger col-12">{errors.city}</small>
            ) : null}
          </InputGroup>
          <span className="d-block font-weight-bolder text-primary pb-3">
            More Information
          </span>
          <Row className="mb-3">
            <Col>
              <Field
                as={BootstrapForm.Control}
                placeholder="Linkedin url"
                name="linkedin"
                type="text"
                isValid={!errors.linkedin && touched.linkedin}
                isInvalid={errors.linkedin && touched.linkedin}
              />
              {errors.linkedin && touched.linkedin ? (
                <small className="text-danger">{errors.linkedin}</small>
              ) : null}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Field
                as={BootstrapForm.Control}
                placeholder="Available Time To Contact"
                name="availableTimeToContact"
                type="text"
                isValid={
                  !errors.availableTimeToContact &&
                  touched.availableTimeToContact
                }
                isInvalid={
                  errors.availableTimeToContact &&
                  touched.availableTimeToContact
                }
              />
              {errors.availableTimeToContact &&
              touched.availableTimeToContact ? (
                <small className="text-danger">
                  {errors.availableTimeToContact}
                </small>
              ) : null}
            </Col>
          </Row>

          <InputGroup className="mb-3">
            <Field
              as={BootstrapForm.Control}
              name="id"
              type="text"
              placeholder="Student ID*"
              className="col-12"
              isValid={!errors.id && touched.id}
              isInvalid={errors.id && touched.id}
            />
            {errors.id && touched.id ? (
              <small className="text-danger col-12">{errors.id}</small>
            ) : null}
          </InputGroup>
          <InputGroup className="mb-3">
            <Field
              as={BootstrapForm.Control}
              name="jobTitle"
              type="text"
              placeholder="Job Title"
              className="col-12"
              isValid={!errors.jobTitle && touched.jobTitle}
              isInvalid={errors.jobTitle && touched.jobTitle}
            />
            {errors.jobTitle && touched.jobTitle ? (
              <small className="text-danger col-12">{errors.jobTitle}</small>
            ) : null}
          </InputGroup>
          <InputGroup className="mb-3">
            <Field
              as={BootstrapForm.Control}
              name="jobOrganization"
              type="text"
              placeholder="Job Organization"
              className="col-12"
              isValid={!errors.jobOrganization && touched.jobOrganization}
              isInvalid={errors.jobOrganization && touched.jobOrganization}
            />
            {errors.jobOrganization && touched.jobOrganization ? (
              <small className="text-danger col-12">
                {errors.jobOrganization}
              </small>
            ) : null}
          </InputGroup>
          <InputGroup className="mb-3">
            <Field
              as={BootstrapForm.Control}
              name="jobBrunch"
              type="text"
              placeholder="Job Branch"
              className="col-12"
              isValid={!errors.jobBrunch && touched.jobBrunch}
              isInvalid={errors.jobBrunch && touched.jobBrunch}
            />
            {errors.jobBrunch && touched.jobBrunch ? (
              <small className="text-danger col-12">{errors.jobBrunch}</small>
            ) : null}
          </InputGroup>
          <InputGroup className="mb-3">
            <Col xs={12} className="d-flex px-0">
              <Field
                as={BootstrapForm.Control}
                id="department_check"
                name="department_check"
                type="checkbox"
              />
              <label
                className="pl-2"
                id="department_check_label"
                htmlFor="department_check"
              >
                {" "}
                Select if are a faculty at Dept. of CSE, RUET
              </label>
            </Col>
            {errors.department_check && touched.department_check ? (
              <small className="text-danger col-12">
                {errors.department_check}
              </small>
            ) : null}
          </InputGroup>

          <button
            className={`btn btn-danger px-5 mt-3 ${styles.submit}`}
            type="submit"
          >
            SIGN UP
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default connect(null, { signupAction })(SignUpForm);
