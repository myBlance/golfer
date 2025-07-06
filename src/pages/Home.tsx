import React from "react";
import Navbar from "../component/Navbar";
import HeroSlider from "../component/HeroSlider";
import OurFacilities from "../component/OurFacilities";
import About from "../component/About";
import OurCourses from "../component/OurCourses";
import StatsBar from "../component/StatsBar";
import WhyChooseUs from "../component/WhyChooseUs";
import EventsSection from "../component/EventsSection";
import OurFacilities2 from "../component/OurFacilities2";
import BestDrivers from "../component/BestDrivers";
import FAQSection from "../component/FAQSection";
import Footer from "../component/Footer";


const Home: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <HeroSlider/>
            <OurFacilities/>
            <About/>
            <OurCourses/>
            <StatsBar/>
            <WhyChooseUs/>
            <EventsSection/>
            <OurFacilities2/>
            <BestDrivers/>
            <FAQSection/>
            <Footer/>
        </div>
    );
};

export default Home;
