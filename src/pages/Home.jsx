import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Substitle from "../components/Substitle";

    const Home = () => {
    return(
        <div>
            <Navbar/>
            <Announcement></Announcement>
            <Slider />
            <Categories />
            <Substitle />
            <Products />
        </div>
    )
};

export default Home;
