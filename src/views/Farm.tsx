import React from "react";
import TabBarAction from "../components/TabBarAction";

import sunLight from "../assets/images/sunLight.png";
import sun from "../assets/images/sun.png";
import "./Farm.less";
import SearchBarAction from "../components/SearchBarAction";
import NavigationBox from "../components/NavigationBox";

import green from "../assets/images/green.png";

const Farm = function Farm(): JSX.Element {
  return (
    <div className="FarmBox">
      <div className="farm-header">
        <div className="sunLight">
          <img src={sunLight} alt="" />
        </div>
        <div className="weather">
          <img src={sun} alt="" />
          <p className="weathyNum">23°</p>
          <p className="weathyText">晴</p>
        </div>
        <div className="conditionBox">
          <div className="conditionItem">
            <p>强</p>
            <p>光照强度</p>
          </div>
          <div className="conditionItem">
            <p>强</p>
            <p>光照强度</p>
          </div>
          <div className="conditionItem">
            <p>强</p>
            <p>光照强度</p>
          </div>
        </div>
        <SearchBarAction />
      </div>

      <div className="farm-middle">
        <div className="realtimeVedio">
          <NavigationBox title="实时视频" />
          <div className="realtimeVedioItem">
            <img src={green} alt="" />
          </div>
        </div>
        <div className="knowledgeBox">
          <NavigationBox title="农业知识" />
          <div className="text">
            <span className="dayKnowledge">每日知识</span>
            <span>
              光照强度高时可以下调补光灯的数量以节省电量光照强度高时可以下调补光灯的数量以节省电量光照强度高时可以下调补光灯的数量以节省电量
            </span>
          </div>
        </div>
        <div className="knowledgeBox consultationBox">
          <NavigationBox title="专家咨询" />
          <div className="text">
            为农场的找到可咨询的专家，线上或线下进行一对一指导，做到科学种植
          </div>
        </div>
      </div>
      <TabBarAction />
    </div>
  );
};

export default Farm;
