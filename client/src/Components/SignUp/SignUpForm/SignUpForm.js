import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Form as BootstrapForm, Row, Col, InputGroup } from "react-bootstrap";
import * as Yup from "yup";
import defaultImg from "../../../Assets/SignUpForm/defaultImg.png";
import "./SignUpForm.css";
import CountryData from "./countryData/CountryData";
import styles from "./SignUpForm.module.css";
import { FormSelectField } from "./FormSelectField";
import { ImageDropZone } from "./ImageDropZone";
import { signupAction } from "../../../Actions/AuthActions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router";

const SignUpForm = ({ signupAction }) => {
  const history = useHistory();
  const [files, setFiles] = useState(defaultImg);
  const [selectedFile, setSelectedFile] = useState();
  const onSubmitHandeler = (values) => {
    //LOGIN POST ACTION CALL
    let check = signupAction(values, selectedFile);
    console.log(check);
    if (check) {
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
    files: defaultImg,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    mobile_country: "+880",
    city: "",
    series: "series",
    section: "section",
    program: "program",
    id: "",
    department_check: "",
  };

  const SignupSchema = Yup.object().shape({
    password: Yup.string().required("Password is required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords do not match!")
      .required("Password is required!"),
    email: Yup.string().email("Invalid email").required("Email is required!"),
    first_name: Yup.string().required("First Name is required!"),
    last_name: Yup.string().required("Last Name is required!"),
    city: Yup.string().required("City is required!"),
    series: Yup.string().notOneOf(["series"]).required("Series is required!"),
    section: Yup.string()
      .notOneOf(["section"])
      .required("Section is required!"),
    program: Yup.string()
      .notOneOf(["program"])
      .required("Section is required!"),
    id: Yup.number().required("Student ID is required!"),
    mobile_country: Yup.number().required("Country code is required!"),
    phone: Yup.number().required("Phone Number is required!"),
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
            <FormSelectField
              as={Col}
              md="3"
              controlId="mobile_country"
              type="select"
              name="mobile_country"
              className={`${errors.series && touched.series ? "error" : " "}`}
            >
              {CountryData.map((data) => (
                <option value={data.dial_code} key={data.code}>
                  {data.code} {data.dial_code}
                </option>
              ))}
            </FormSelectField>
            <Col>
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
            <FormSelectField
              as={Col}
              sm="4"
              controlId="seriesId"
              type="select"
              name="series"
              className={`${errors.series && touched.series ? "error" : " "}`}
            >
              <option value="series" disabled>
                Series*
              </option>
              <option>20</option>
              <option>19</option>
              <option>18</option>
              <option>17</option>
              <option>16</option>
              <option>15</option>
              <option>14</option>
            </FormSelectField>

            <FormSelectField
              as={Col}
              sm="4"
              controlId="sectionId"
              type="select"
              name="section"
            >
              <option value="section" disabled>
                Section*
              </option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </FormSelectField>
          </Row>
          <FormSelectField
            controlId="program"
            type="select"
            name="program"
            className={`${errors.program && touched.program ? "error" : " "}`}
          >
            <option value="program" disabled>
              Program*
            </option>
            <option>Web Development</option>
            <option>Game Development</option>
            <option>App Development</option>
          </FormSelectField>

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
