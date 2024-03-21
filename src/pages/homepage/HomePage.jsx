import React from "react";
import Abovenav from "./abovenav/abovenav";
import Sidebar from "./sidebar/sidebar";
import Content1 from "./content1/content1";
import './HomePage.css'


const HomePage = () => {
    return (
        <div className="container">
            <div className="sidebar"><Sidebar /></div>
            <div className="content">
                <Abovenav />
                <Content1 />
            </div>
        </div>
    )
}

export default HomePage;