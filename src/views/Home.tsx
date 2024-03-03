import React from "react";
import TabBarAction from "../components/TabBarAction";
import {RightOutline, ScanningOutline} from 'antd-mobile-icons'
import './Home.less'

import timg from '../assets/images/timg.jpg'

const Home = function Home():JSX.Element{
    return <div className="home-box">
        <div className="content">
         <ScanningOutline className="scanning"/>
         <div className="home-middle">
            <div className="personal">
                <img src={timg} alt="" />
                <p className="name">阿咩_</p>
            </div>
            <div className="dataBox">
                <div className="dataItem">
                    <p className="num">2023.11.11</p>
                    <p>注册时间</p>
                </div>
                <div className="dataItem">
                    <p className="num">23</p>
                    <p>大棚数量</p>
                </div>
                <div className="dataItem">
                    <p className="num">1</p>
                    <p>维修次数</p>
                </div>
            </div>
            <div className="settingBox">
                <ul>
                    <li>
                        <p>账号管理</p>
                        <RightOutline />
                    </li>
                    <li>
                        <p>用户管理</p>
                        <RightOutline />
                    </li>
                    <li>
                        <p>软件设置</p>
                        <RightOutline />
                    </li>
                    <li>
                        <p>关于我们</p>
                        <RightOutline />
                    </li>
                </ul>
            </div>
         </div>
        </div>
        <TabBarAction/>
    </div>
}

export default Home;