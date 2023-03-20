import { Tabs } from "@mantine/core";
import React from "react";
import AdminEventList from "../../../Components/AdminEventList/AdminEventList";
import AdminMemberList from "../../../Components/AdminMemberList/AdminMemberList";
import AdminUserList from "../../../Components/AdminUserList/AdminUserList";
import UserList from "../../../Components/UserList/UserList";
import { DashboardPage } from "../../DashboardPage";
//import { NewsDashboard } from "../../../Components/NewsDashboard";

const Admin = () => {
  return (
    <DashboardPage>
      <div className="pb-5 pt-3">
        <Tabs color="teal" defaultValue="alumni">
          <Tabs.List>
            <Tabs.Tab value="alumni">Pending Alumni Transactions</Tabs.Tab>
            <Tabs.Tab value="event" color="blue">
              Pending Event Transactions
            </Tabs.Tab>
            <Tabs.Tab value="member" color="red">
              Pending Member Request
            </Tabs.Tab>
            <Tabs.Tab value="users" color="orange">
              Users
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="alumni" pt="xs">
            <AdminUserList />
          </Tabs.Panel>

          <Tabs.Panel value="event" pt="xs">
            <AdminEventList />
          </Tabs.Panel>
          <Tabs.Panel value="member" pt="xs">
            <AdminMemberList />
          </Tabs.Panel>
          <Tabs.Panel value="users" pt="xs">
            <UserList />
          </Tabs.Panel>
        </Tabs>
      </div>
    </DashboardPage>
  );
};

export default Admin;
