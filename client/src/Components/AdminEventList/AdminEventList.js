import { Text } from "@mantine/core";
import { useModals } from "@mantine/modals";
import React, { useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { getAdminEventList } from "../../Actions/DashboardActions";
import {
  approveEventAdmin,
  rejectEventAdmin,
} from "../../Actions/event.action";

const AdminEventList = ({
  data,
  getAdminEventList,
  approveEventAdmin,
  rejectEventAdmin,
}) => {
  useEffect(() => {
    if (!data) {
      getAdminEventList("", 0);
    }
  }, []);
  const modals = useModals();
  const rejectHandeler = (id) => {
    modals.openConfirmModal({
      title: "Please confirm your action",
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to <b>Reject</b> this event transaction?
        </Text>
      ),
      labels: { confirm: "Reject", cancel: "Cancel" },
      onConfirm: () => rejectEventAdmin(id),
    });
  };

  return (
    <div className="pt-3">
      {data && data.length > 0 ? (
        <Card className="shadow">
          <h3 className="text-center pt-3">Events</h3>
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
                {data.map((item, i) => (
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
                          onClick={() => approveEventAdmin(item.transactionId)}
                        >
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="danger"
                          className="ml-2"
                          onClick={() => rejectHandeler(item.transactionId)}
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
  data: state.event.admin_events,
});
export default connect(mapStateToProps, {
  getAdminEventList,
  approveEventAdmin,
  rejectEventAdmin,
})(AdminEventList);
