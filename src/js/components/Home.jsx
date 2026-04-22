import React from "react";
import Card from "./Card";

const Home = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Mi Landing Page con React</h1>
            <div className="d-flex justify-content-center flex-wrap">
                <Card 
                    imgUrl="https://via.placeholder.com/500x325" 
                    title="Card Title 1" 
                    description="Esta es la descripción de mi primera tarjeta creada con props." 
                />
                <Card 
                    imgUrl="https://via.placeholder.com/500x325" 
                    title="Card Title 2" 
                    description="Aca pongo información relevante sobre este proyecto." 
                />
                <Card 
                    imgUrl="https://via.placeholder.com/500x325" 
                    title="Card Title 3" 
                    description="React hace que esto sea muy fácil de reutilizar." 
                />
            </div>
        </div>
    );
};

export default Home;