import React, { useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { connect } from "react-redux";
import {
  approveAlumni,
  getAdminUserList,
  rejectAlumni,
} from "../../Actions/DashboardActions";

const AdminUserList = ({
  data,
  getAdminUserList,
  approveAlumni,
  rejectAlumni,
}) => {
  const [page, setPage] = useState(0);
  useEffect(() => {
    if (!data) {
      getAdminUserList("", 0);
    }
  }, []);

  return (
    <div className="pt-3">
      {data && data.pageContent.length > 0 ? (
        <Card className="shadow">
          <h3 className="text-center pt-3">Alumni Transactions</h3>
          <Card.Body>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Bank Name</th>
                  <th>Transaction Status</th>
                  <th>transaction Id</th>
                  <th>Acount No.</th>
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
                    <td>{item.transactionId}</td>
                    <td>{item.reciepentBankAccountNo}</td>
                    <td>
                      <div className="d-flex">
                        <Button
                          size="sm"
                          onClick={() => approveAlumni(item.transactionId)}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          className="ml-2"
                          onClick={() => rejectAlumni(item.transactionId)}
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
  getAdminUserList,
  approveAlumni,
  rejectAlumni,
})(AdminUserList);
