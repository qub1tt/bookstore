import React, {useState, useEffect} from "react";
import Abovenav from "../../components/abovenav/abovenav";
import Sidebar from "../../components/sidebar/sidebar";
import "./Category.css";
import CategorySection from "../../components/CategorySection/CategorySection";

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

    const toggleSidebar = () => {
    setIsOpen(!isOpen);
    };

    useEffect(() => {
    const handleResize = () => {
        setIsOpen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };
    }, []);
    return (
    <div className="contain">
        <div className="sidebar">
        <Sidebar isOpen={isOpen} toggle={toggleSidebar}/>
        </div>
        <div className="navbar">
        <Abovenav toggle={toggleSidebar} />
        </div>

        <div className="content">
            <CategorySection />
        </div>

    </div>
    );
};

export default HomePage;