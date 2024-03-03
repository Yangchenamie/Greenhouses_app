import React from "react";
import NavBarAction from "../components/NavBarAction";
import SlotBox from "../components/SlotBox";
import { Switch } from "antd-mobile";

import './Task.less'

const Task = function Task(): JSX.Element {
  return (
    <div className="task-box">
      <NavBarAction title="任务日志" />
      <SlotBox>
        <div className="taskItem">
          <div className="item">
            <p className="taskName">打开补光灯</p>
            <div className="task-options">
              <p>所有大棚</p>
              <p>每天</p>
              <p>光照强度{`<`}10,000lux</p>
            </div>
          </div>
          <Switch
            defaultChecked
            style={{
              "--checked-color": "#00b578",
              "--height": "36px",
              "--width": "60px",
            }}
          />
        </div>
      </SlotBox>
      <SlotBox>
        <div className="taskItem">
          <div className="item">
            <p className="taskName">打开补光灯</p>
            <div className="task-options">
              <p>所有大棚</p>
              <p>每天</p>
              <p>光照强度{`<`}10,000lux</p>
            </div>
          </div>
          <Switch
            defaultChecked
            style={{
              "--checked-color": "#00b578",
              "--height": "36px",
              "--width": "60px",
            }}
          />
        </div>
      </SlotBox>
    </div>
  );
};

export default Task;
