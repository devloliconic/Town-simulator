import { UserOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar";
import React from "react";

import { Login, UserInfo } from "./styled";

export const UserPanel = () => {
  return (
    <UserInfo>
      <Avatar size="large" icon={<UserOutlined />} />
      <Login>UserLogin</Login>
    </UserInfo>
  );
};
