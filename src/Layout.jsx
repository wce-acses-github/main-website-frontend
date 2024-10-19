import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "../src/index.css";
import Lenis from "lenis";
import { useEffect } from "react";

function Layout() {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis();

        // Listen for the scroll event and log the event data
        lenis.on("scroll", (e) => {
            console.log(e);
        });

        // Use requestAnimationFrame to continuously update the scroll
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    });
    return (
        <>
            <div className="layout">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    );
}

export default Layout;
