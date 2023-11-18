import { useEffect, useState } from "react";
import Container from "../../Pages/Shared/Container/Container";
import Class from "./Class";


const PopularClasses = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/classes`)
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <Container>
            <div className="mt-20 mb-10">
                <h1 className="text-center text-4xl font-bold font-sans">Our Exclusive Classes</h1>
                
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {classes.slice(0,6).map((singleClass, index) => <Class key={index} singleClass={singleClass}></Class>)}
            </div>
        </Container>
    );
};

export default PopularClasses;