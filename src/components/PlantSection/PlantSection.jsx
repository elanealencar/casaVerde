import './PlantSection.css';

const PlantSection = () => {
    return (
        <section className="plant-section" id="como-fazer">
           <div className="plant-photo"></div>

           <div className="plant-content">
                <div className="plant-content-title">
                    <p>Como conseguir</p>
                    <h3>minha planta</h3>
                </div>
                <div className="plant-content">
                    <div className='plant-items'>
                        <div className="circle"></div>    
                        <p>Escolha suas plantas</p>
                    </div>
                    <div className="plant-items">
                        <div className="circle"></div>    
                        <p>Faça seu pedido</p>
                    </div>
                    <div className="plant-items">
                        <div className="circle"></div>    
                        <p>Aguarde na sua casa</p>
                    </div>
                </div>
           </div>
        </section>
    );
};

export default PlantSection;