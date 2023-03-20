import { Text } from "@mantine/core";
import { useModals } from "@mantine/modals";
import React, { useEffect } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { connect } from "react-redux";
import {
  approveMember,
  getPendingMember,
  rejectMember,
} from "../../Actions/DashboardActions";
import { getProfile } from "../../Actions/Directory.action";

const AdminMemberList = ({
  data,
  getPendingMember,
  approveMember,
  rejectMember,
  getProfile,
}) => {
  useEffect(() => {
    if (!data) {
      getPendingMember();
    }
  }, []);
  const modals = useModals();
  const rejectHandeler = (id) => {
    modals.openConfirmModal({
      title: "Please confirm your action",
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to <b>Reject</b> this user?
        </Text>
      ),
      labels: { confirm: "Reject User", cancel: "Cancel" },
      onConfirm: () => rejectMember(id),
    });
  };

  return (
    <div className="pt-3">
      {data && data.length > 0 ? (
        <Card className="shadow">
          <h3 className="text-center pt-3">Member Approval List</h3>
          <Card.Body>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                  <tr key={i}>
                    <td>{item.StudentId}</td>
                    <td
                      className="link text-primary"
                      onClick={() => getProfile(item.StudentId)}
                    >
                      {item.studentName}
                    </td>
                    <td>{item.studentContactNo}</td>
                    <td>
                      <div className="d-flex">
                        <Button
                          size="sm"
                          onClick={() => approveMember(item.StudentId)}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          className="ml-2"
                          onClick={() => rejectHandeler(item.StudentId)}
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
  data: state.auth.member,
});
export default connect(mapStateToProps, {
  getPendingMember,
  approveMember,
  rejectMember,
  getProfile,
})(AdminMemberList);
