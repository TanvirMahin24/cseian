import React, { useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { connect } from "react-redux";
import {
  approveAlumni,
  approveMember,
  getAdminUserList,
  getPendingMember,
  rejectAlumni,
  rejectMember,
} from "../../Actions/DashboardActions";

const AdminMemberList = ({
  data,
  getPendingMember,
  approveMember,
  rejectMember,
}) => {
  useEffect(() => {
    if (!data) {
      getPendingMember();
    }
  }, []);

  return (
    <div className="pt-3">
      {data && data.pageContent.length > 0 ? (
        <Card className="shadow">
          <h3 className="text-center pt-3">Member Approval List</h3>
          <Card.Body>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.pageContent.map((item, i) => (
                  <tr key={i}>
                    <td>{item.studentId}</td>
                    <td>{item.studentName}</td>
                    <td>{item.bankName}</td>
                    <td>{item.transactionStatus}</td>
                    <td>{item.reciepentBankAccountNo}</td>
                    <td>
                      <div className="d-flex">
                        <Button
                          size="sm"
                          onClick={() => approveMember(item.transactionId)}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          className="ml-2"
                          onClick={() => rejectMember(item.transactionId)}
                        >
                          Reject
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      ) : (
        <></>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  data: state.auth.admin_users,
});
export default connect(mapStateToProps, {
  getPendingMember,
  approveMember,
  rejectMember,
})(AdminMemberList);
