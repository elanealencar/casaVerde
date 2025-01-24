import React from 'react';
import './Card.css';
const Card = ({ image, altText, title, value}) => {
    return (
        <section className="card">
            <div className="card-image">
                <img src={image} alt={altText}/>
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-value">{value}</p>
                <div className="card-button-container">
                    <div className="card-button">Comprar</div>                       
                </div>
            </div>
        </section>
    );
};

export default Card;
