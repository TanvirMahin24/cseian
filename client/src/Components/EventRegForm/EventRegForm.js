import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Col, Form as BootstrapForm, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";
import * as Yup from "yup";
import { registerToEvent } from "../../Actions/event.action";
import styles from "./EventRegForm.module.css";

const EventRegForm = ({ registerToEvent, id }) => {
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const onSubmitHandeler = async (values) => {
    if (!img) {
      toastr.error("Error", "Please upload image of the ricept!");
      return;
    }
    setLoading(true);

    let check = await registerToEvent(values, img);
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
    eventId: id,
    transactionId: "",
    recepientBankAccountNo: "",
    bankName: "",
  };
  const PostInForumSchema = Yup.object().shape({
    transactionId: Yup.string().required("Transaction Id required!"),
    recepientBankAccountNo: Yup.string().required("This is required!"),
    bankName: Yup.string().required("Bank Name is required!"),
  });
  return (
    <Formik
      initialValues={initVals}
      validationSchema={PostInForumSchema}
      enableReinitialize
      onSubmit={(values) => onSubmitHandeler(values)}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <Form id="" as={BootstrapForm}>
          <div className="mb-3 w-100">
            <Row>
              <Col xs={12}>
                <div className="d-flex justify-content-between align-items-center pb-2">
                  <label htmlFor="recepientBankAccountNo" className="d-block">
                    Recepient Bank Account No.
                  </label>
                  {errors.recepientBankAccountNo &&
                  touched.recepientBankAccountNo ? (
                    <small className="text-danger ">
                      {errors.recepientBankAccountNo}
                    </small>
                  ) : null}
                </div>
              </Col>
              <Col xs={12}>
                <Field
                  as={BootstrapForm.Control}
                  name="recepientBankAccountNo"
                  type="text"
                  placeholder="Recepient Bank Account No"
                  className="w-100"
                  isValid={
                    !errors.recepientBankAccountNo &&
                    touched.recepientBankAccountNo
                  }
                  isInvalid={
                    errors.recepientBankAccountNo &&
                    touched.recepientBankAccountNo
                  }
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3 w-100">
            <Row>
              <Col xs={12}>
                <div className="d-flex justify-content-between align-items-center pb-2">
                  <label htmlFor="bankName" className="d-block">
                    Bank Name
                  </label>
                  {errors.bankName && touched.bankName ? (
                    <small className="text-danger ">{errors.bankName}</small>
                  ) : null}
                </div>
              </Col>
              <Col xs={12}>
                <Field
                  as={BootstrapForm.Control}
                  name="bankName"
                  type="text"
                  placeholder="Recepient Bank Name"
                  className="w-100"
                  isValid={!errors.bankName && touched.bankName}
                  isInvalid={errors.bankName && touched.bankName}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3 w-100">
            <Row>
              <Col xs={12}>
                <div className="d-flex justify-content-between align-items-center pb-2">
                  <label htmlFor="transactionId" className="d-block">
                    Transaction Id
                  </label>
                  {errors.transactionId && touched.transactionId ? (
                    <small className="text-danger ">
                      {errors.transactionId}
                    </small>
                  ) : null}
                </div>
              </Col>
              <Col xs={12}>
                <Field
                  as={BootstrapForm.Control}
                  name="transactionId"
                  type="text"
                  placeholder="Transaction Id"
                  className="w-100"
                  isValid={!errors.transactionId && touched.transactionId}
                  isInvalid={errors.transactionId && touched.transactionId}
                />
              </Col>
            </Row>
          </div>

          <div className=" mt-4">
            <span className="d-block pb-2">Select ricept image</span>
            <input
              name="image"
              onChange={onChangeHandeler}
              type="file"
              id="customFileLangHTML"
            />
          </div>

          <div className="text-center pt-4">
            <button
              className={`${styles.submit} btn btn-danger px-5 mt-3`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading" : "Submit"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default connect(null, { registerToEvent })(EventRegForm);
