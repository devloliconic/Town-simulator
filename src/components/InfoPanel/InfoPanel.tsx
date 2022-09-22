import {
  MoneyCollectOutlined,
  SmileOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Panel, Resource } from "components/InfoPanel/styled";
import React from "react";

export const InfoPanel = () => {
  return (
    <Panel>
      <Resource>
        Ресурсы 0 <ThunderboltOutlined />
      </Resource>
      <Resource>
        Деньги 0 <MoneyCollectOutlined />
      </Resource>
      <Resource>
        Счастье 0 <SmileOutlined />
      </Resource>
    </Panel>
  );
};
