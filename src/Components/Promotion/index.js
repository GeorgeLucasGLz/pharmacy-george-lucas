import React, { forwardRef } from "react";
import { Check, ShoppingCart } from 'lucide-react';
import { useCart } from '../CartContext'

import Shampoo from '../../assets/cr7.webp'
import Allegra from '../../assets/allegra.webp'


const Promotion = forwardRef((props, ref) => {

    const { addToCart } = useCart();

    const promotionProducts = [
        { id: 1, name: "Clear Men", beforePrice: 40.90, price: 30.90, image: Shampoo, description: "Controle da Caspa", info2: "Limpeza Profunda", info3: "Fórmula Fortificante" },
        { id: 2, name: "Antialérgico Allegra", beforePrice: 84.71, price: 61.99, image: Allegra, description: "10 comprimidos", info2: "Duração Prolongada", info3: "Não Sedante" }

    ]
    return (
        // R$
        <>

            <section className="promotion-section" ref={ref}>

                {promotionProducts.map((promotion) => (

                    <div key={promotionProducts.id} className="card-promotion" >
                        <div className="sale-box">Oferta</div>
                        <img src={promotion.image}></img>
                        <div className="info-promotion">
                            <div className="top-info">
                                <h4>{promotion.name}</h4>
                                <div className="price-box">
                                    <span id="before-price">R$ {parseFloat(promotion.beforePrice).toFixed(2).replace('.', ",")}</span>
                                    <span id="after-price">R$ {parseFloat(promotion.price).toFixed(2).replace('.', ",")}</span>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <Check className="check-icon" /><p>{promotion.description}</p>
                                </li>
                                <li>
                                    <Check className="check-icon" /><p>{promotion.info2}</p>
                                </li>
                                <li>
                                    <Check className="check-icon" /><p>{promotion.info3}</p>
                                </li>
                            </ul>
                            <button onClick={() => addToCart(promotion)}>
                                <ShoppingCart /> Adicionar ao Carrinho
                            </button>
                        </div>
                    </div>
                ))}


            </section>

        </>

    )
})

export default Promotion