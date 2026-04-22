import React from "react";

const Card = (props) => {
    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <img src={props.imgUrl} className="card-img-top" alt="imagen" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Ver más</a>
            </div>
        </div>
    );
};

export default Card;