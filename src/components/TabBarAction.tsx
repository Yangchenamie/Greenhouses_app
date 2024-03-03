import React from "react";
import { TabBar, Image } from "antd-mobile";

import styled from "styled-components";

const TabBarBox = styled.div`
    .tar-bar{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
    }
    .adm-tab-bar-wrap{
        min-height: 90px;
        background: rgba(250, 250, 250, 1);
    }
    .adm-tab-bar-item-title{
        color: rgba(128, 128, 128, 1);
        font-size: 18px;
    }
    .adm-image{
        height: 30px;

    }
    .adm-tab-bar-item-icon{
      height: 36px;
    }
`;

const TabBarAction = function TabBarAction():JSX.Element {
  const tabs = [
    {
      key: "greenHouses",
      title: "大棚",
      icon: <Image src={require("../assets/images/GreenHouse-active.png")} />,
    },
    {
      key: "farm",
      title: "农场",
      icon: <Image src={require("../assets/images/farm.png")} />,
    },
    {
      key: "home",
      title: "我的",
      icon: <Image src={require("../assets/images/home.png")} />,
    },
  ];

  return (
    <TabBarBox>
      <div className="tar-bar">
        <TabBar>
          {tabs.map((item) => (
              <TabBar.Item key={item.key} title={item.title} icon={item.icon} />
          ))}
        </TabBar>
      </div>
    </TabBarBox>
  );
};

export default TabBarAction;
