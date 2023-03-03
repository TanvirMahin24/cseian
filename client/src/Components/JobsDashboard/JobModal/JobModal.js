import React from "react";
import { Table } from "react-bootstrap";
import Moment from "react-moment";

const JobModal = ({
  postTitle,
  location,
  deadline,
  companyName,
  durationType,
  placementType,
  postDate,
  postWonerName,
  postWonerId,
}) => {
  return (
    <div>
      <Table>
        <tbody>
          <tr>
            <td className="fw-bold">Job Title</td>
            <td>{postTitle}</td>
          </tr>
          <tr>
            <td className="fw-bold">Company</td>
            <td>{companyName}</td>
          </tr>
          <tr>
            <td className="fw-bold">Duration</td>
            <td>{durationType}</td>
          </tr>
          <tr>
            <td className="fw-bold">Placement</td>
            <td>{placementType}</td>
          </tr>
          <tr>
            <td className="fw-bold">Location</td>
            <td>{location}</td>
          </tr>
          <tr>
            <td className="fw-bold">Posted on</td>
            <td>
              <Moment format="MMM DD, YYYY">{postDate}</Moment>
            </td>
          </tr>
          <tr>
            <td className="fw-bold">Application deadline</td>
            <td>
              <Moment format="MMM DD, YYYY">{deadline}</Moment>
            </td>
          </tr>
          {postWonerName ? (
            <tr>
              <td className="fw-bold">Posted by</td>
              <td>
                {postWonerName} ({postWonerId})
              </td>
            </tr>
          ) : (
            <></>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default JobModal;
