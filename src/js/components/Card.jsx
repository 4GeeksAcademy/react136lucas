import React from 'react';

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
                {}
                <img 
                    src={imageUrl} 
                    className="card-img-top" 
                    alt={title} 
                    style={{ height: "200px", objectFit: "cover" }} 
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">{title}</h5>
                    <p className="card-text text-muted flex-grow-1">{description}</p>
                    {}
                    <div className="text-center mt-3">
                        <a href="#" className="btn btn-primary w-100">¡Mirá más!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;