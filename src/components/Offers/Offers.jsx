import './Offers.css';
import React from 'react';
import Card from '../Card/Card.jsx';
import produto01 from '../../assets/images/produto01.png';
import produto02 from '../../assets/images/produto02.png';
import produto03 from '../../assets/images/produto03.png';
import produto04 from '../../assets/images/produto04.png';
import produto05 from '../../assets/images/produto05.png';
import produto06 from '../../assets/images/produto06.png'; 

const cardsData = [
    { image: produto01, altText: 'Ajuga reptans', title: 'Ajuga reptans', value: 'R$ 20,00' },
    { image: produto02, altText: 'Cordyline fruticosa', title: 'Cordyline fruticosa', value: 'R$ 25,00' },
    { image: produto03, altText: 'Dracaena fragrans', title: 'Dracaena fragrans', value: 'R$ 30,00' },
    { image: produto04, altText: 'Ficus lyrata', title: 'Ficus lyrata', value: 'R$ 35,00' },
    { image: produto05, altText: 'Monstera deliciosa', title: 'Monstera deliciosa', value: 'R$ 40,00' },
    { image: produto06, altText: 'Sansevieria trifasciata', title: 'Sansevieria trifasciata', value: 'R$ 45,00' },
];

const Offers = () => {
    return (
        <section className="offers-section" id="ofertas">
            <div className="offers-title">Conheça nossas 
                <p>ofertas</p></div>
            <div className="cards-section">
                {cardsData.map((card, index) => (
                        <Card
                            key={index}
                            image={card.image}
                            altText={card.altText}
                            title={card.title}
                            value={card.value}
                        />
                ))}
            </div>
        </section>
    );
}

export default Offers;