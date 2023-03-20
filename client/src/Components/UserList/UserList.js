import React, { useEffect } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { connect } from "react-redux";
import {
  approveAlumni,
  banUserAction,
  getUserListAll,
  rejectAlumni,
} from "../../Actions/DashboardActions";
import { useModals } from "@mantine/modals";
import { Text } from "@mantine/core";

const UserList = ({ data, getUserListAll, banUserAction }) => {
  const modals = useModals();
  useEffect(() => {
    if (!data) {
      getUserListAll();
    }
  }, []);

  const banHandeler = (id) => {
    modals.openConfirmModal({
      title: "Please confirm your action",
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to <b>{"Ban"}</b> this user?
        </Text>
      ),
      labels: { confirm: "Ban User", cancel: "Cancel" },
      onConfirm: () => banUserAction(id),
    });
  };

  return (
    <div className="pt-3">
      {data && data.pageContent.length > 0 ? (
        <Card className="shadow">
          <h3 className="text-center pt-3">Users</h3>
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
                          onClick={() => banHandeler(item.transactionId)}
                        >
                          BAN
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
  getUserListAll,
  banUserAction,
})(UserList);
