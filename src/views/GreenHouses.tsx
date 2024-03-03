import React from "react";
import { Image } from 'antd-mobile';

import TabBarAction from "../components/TabBarAction";

import navTaskSrc from '../assets/images/task.png'
import navDataSrc from '../assets/images/data.png'
import  navGreenSrc from "../assets/images/GreenHouse.png";
import navEquipmentSrc from "../assets/images/task.png";
import green from '../assets/images/green.png'

import "./GreenHouse.less";
import NavigationBox from "../components/NavigationBox";


const GreenHouses = function GreenHouses(): JSX.Element {
  return (
    <div className="greenHouse-box">
      <div className="navTar">
        <div className="navTar-item">
          <div>任务日志</div>
          <img src={navTaskSrc} alt=""/>
        </div>
        <div className="navTar-item" >
          <div>数据分析</div>
          <img src={navDataSrc} alt=""/>
        </div>
        <div className="navTar-item">
          <div>大棚管理</div>
          <img src={navGreenSrc} alt=""/>
        </div>
        <div className="navTar-item">
          <div>设备管理</div>
          <img src={navEquipmentSrc} alt=""/>
        </div>
      </div>
      <div className="monitorBox">
        <NavigationBox title="监控管理"/>
        <div className="monitorBoxItems">
            <Image src={green}/>
            <Image src={green}/>
            <Image src={green}/>
            <Image src={green}/>
        </div>
      </div>
      <div className="abnormalBox">
        <h2>异常管理</h2>
        <span>大棚有待处理异常，建议马上查看</span>
      </div>
      <TabBarAction />
    </div>
  );
};

export default GreenHouses;
