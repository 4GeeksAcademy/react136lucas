import React, { useState, useEffect } from 'react';
import Card from './Card';

const infoAnimales = [
    {
        id: 1,
        nombre: "Carpi",
        descripcion: "El carpincho, el roedor más grande y buena onda del mundo. ¡Un capo!",
        imagen: "https://images.unsplash.com/photo-1631110756314-b526d1d0f509?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 2,
        nombre: "Yaguareté",
        descripcion: "El verdadero rey de la selva misionera. Un felino increíble y re groso.",
        imagen: "https://images.unsplash.com/photo-1590420485404-f86d22b8abf8?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 3,
        nombre: "Hornero",
        descripcion: "Nuestro ave nacional. Laburante como pocos, se arma su casa de barro, un fenómeno.",
        imagen: "https://images.unsplash.com/photo-1627663294326-857c062a4d33?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: 4,
        nombre: "Pingüino de Magallanes",
        descripcion: "Copan las costas del sur. Son re tiernos pero bancan el frío como nadie.",
        imagen: "https://images.unsplash.com/photo-1551993416-83168b556f84?q=80&w=400&auto=format&fit=crop"
    }
];

const Home = () => {
    const [animales, setAnimales] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const cargarDatos = setTimeout(() => {
            setAnimales(infoAnimales); 
            setCargando(false);        
        }, 1500); 

        return () => clearTimeout(cargarDatos);
    }, []); 

    return (
        <div className="container-fluid p-0">
            {}
            <nav className="navbar navbar-dark bg-dark p-3 mb-5">
                <span className="navbar-brand mb-0 h1">Fauna Argentina 🇦🇷</span>
            </nav>
            
            <div className="container">
                {}
                {cargando ? (
                    <div className="text-center my-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                        <p className="mt-3">Cargando los animales...</p>
                    </div>
                ) : (
                    <div className="row">
                        {animales.map((animal) => (
                            <Card 
                                key={animal.id} 
                                title={animal.nombre}
                                description={animal.descripcion}
                                imageUrl={animal.imagen}
                            />
                        ))}
                    </div>
                )}
            </div>
            
            {}
            <footer className="footer mt-auto py-3 bg-light text-center">
                <div className="container">
                    <span className="text-muted">Lucas</span>
                </div>
            </footer>
        </div>
    );
};

export default Home;