import React from "react";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Join from "../Join/Join";
import Plans from "../Plans/Plans";
import Programs from "../Programs/Programs";
import Reasons from "../Reasons/Reasons";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Hero />
            <Programs />
            <Reasons />
            <Plans />
            <Testimonials />
            <Join />
            <Footer />
        </div>
    )
}
export default Home;