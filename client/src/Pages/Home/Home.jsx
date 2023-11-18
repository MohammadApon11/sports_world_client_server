import { useEffect, useState } from "react";
import Banner from "../../components/Home/Banner";
import PopularClasses from "../../components/Home/PopularClasses";
import PopularInstructor from "../../components/Home/PopularInstructor";
import World from "../../components/Home/World";
import Marque from "../../components/Home/Marquee";



const Home = () => {
    const [theme, setTheme] = useState("light")
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const handleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    return (
        <div className="dark:bg-black">
            <Marque handleTheme={handleTheme}></Marque>
            <Banner />
            <PopularClasses />
            <PopularInstructor />
            <World />
        </div>
    );
};

export default Home;