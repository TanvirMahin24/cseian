import React, { useEffect } from "react";
import styles from "./ProfileModal.module.css";
import { Accordion, Modal } from "@mantine/core";
import { connect } from "react-redux";
import { closeModal } from "../../../Actions/Directory.action";

const ProfileModal = ({ open, closeModal, profile }) => {
  return (
    <Modal opened={open} zIndex={99999} onClose={() => closeModal()}>
      {profile ? (
        <>
          <div className="d-flex justify-content-center">
            <div className={styles.img_wrapper}>
              <img
                src={profile.memberPictureLink}
                className={`${styles.img}`}
                alt={profile.alumniName}
              />
            </div>
          </div>
          <span className="d-block text-center h4 pt-3">
            <b>
              {profile?.memberName} ({profile?.memberStudentId})
            </b>
          </span>
          <Accordion>
            <Accordion.Item value="contact">
              <Accordion.Control>Contact Infromation</Accordion.Control>
              <Accordion.Panel>
                <span className="d-block text-center py-1 ">
                  <b>Country: </b>
                  {profile?.memberCountry}
                </span>
                <span className="d-block text-center  py-1 ">
                  <b>Phone: </b>
                  {profile?.memberContact}
                </span>
                <span className="d-block text-center  py-1 ">
                  <b>Email: </b>
                  {profile?.memberEmail}
                </span>
                {profile?.memberLinkedin ? (
                  <span className="d-block text-center  py-1 ">
                    <b>Linkedin: </b>
                    {profile?.memberLinkedin}
                  </span>
                ) : (
                  <></>
                )}

                <span className="d-block text-center  py-1 ">
                  <b>Available Hours: </b>
                  {profile?.memberAvailableContactHour}
                </span>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          {profile?.memberCurrentJobs?.length > 0 ? (
            <>
              <h4 className="text-center d-block h4 pt-4">Current Jobs</h4>
              <Accordion>
                {profile?.memberCurrentJobs.map((job, i) => (
                  <Accordion.Item key={i} value={`${i}`}>
                    <Accordion.Control>
                      {job.alumniJobOrganization}
                    </Accordion.Control>
                    <Accordion.Panel>
                      <span className="d-block text-center">
                        <b>Organization : </b> {job.alumniJobOrganization}
                      </span>
                      {job.alumniJobOrganizationBrunch ? (
                        <span className="d-block text-center">
                          <b>Branch : </b> {job.alumniJobOrganizationBrunch}
                        </span>
                      ) : (
                        <></>
                      )}
                      {job.alumniJobTitle ? (
                        <span className="d-block text-center">
                          <b>Title : </b> {job.alumniJobTitle}
                        </span>
                      ) : (
                        <></>
                      )}
                      {job.alumniJobField ? (
                        <span className="d-block text-center">
                          <b>Field : </b> {job.alumniJobField}
                        </span>
                      ) : (
                        <></>
                      )}

                      <span className="d-block text-center">
                        <b>Organization : </b> {job.alumniJobOrganization}
                      </span>
                    </Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <>
          <span className="d-block">Loading...</span>
        </>
      )}
    </Modal>
  );
};
const mapStateToProps = (state) => ({
  open: state.directory.modal,
  profile: state.directory.profile,
});
export default connect(mapStateToProps, { closeModal })(ProfileModal);
