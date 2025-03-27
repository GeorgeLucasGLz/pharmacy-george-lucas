import React, { forwardRef } from 'react';
import { ShoppingBasket } from "lucide-react";
import { useCart } from '../CartContext';

import Creme from '../../assets/creme.webp'
import Creatina from '../../assets/creatina.webp'
import Desodorante from '../../assets/kit-desodorante.webp'
import Shampoo from '../../assets/shampoo.webp'
import Vitaminas from '../../assets/vitaminas.webp'
import Dental from '../../assets/kit-dental.webp'


const Destaques = forwardRef((props, ref) => {
    const { addToCart } = useCart();

    const products = [
        { id: 1, image: Creatina, name: "Creatina", description: "Creatina 100% Pura 300g", price: 139.90 },
        { id: 2, image: Creme, name: "Creme Dove", description: "Creme para Tratamento 270g", price: 49.99 },
        { id: 3, image: Desodorante, name: "Kit Desodorante", description: "Descrição do modelo DEF", price: 21.99 },
        { id: 4, image: Shampoo, name: "Kit Pantene", description: "Shampoo + Condicionador Pantene 175ml", price: 27.90 },
        { id: 5, image: Vitaminas, name: "Multivitaminas", description: "Multivitaminas A-Z 60 Cápsulas | Nutrigenes", price: 49.90 },
        { id: 6, image: Dental, name: "Kit Colgate Viagem", description: "Kit Colgate Viagem Creme Dental, Escova Dental E Enxaguante", price: 53.74 },
    ];

    return (

        <>

            <section className="py-16" id='destaques' ref={ref}>
                <div className="container mx-auto">
                    <h3 className="text-2xl font-bold mb-8 text-center">Produtos em Destaque</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div key={product.id} id='destaque-card' className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                                <img src={product.image} alt={product.name} className="h-auto" id='destaque-img' />
                                <div className="p-4">
                                    <h4 className="font-bold mb-2">{product.name}</h4>
                                    <p className="text-gray-600 mb-4">{product.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-lg">R$ {product.price.toFixed(2)}</span>
                                        <button
                                            onClick={() => addToCart(product)}
                                            id="btn-destaques"
                                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 flex items-center gap-2"
                                        >
                                            Adicionar ao Carrinho <ShoppingBasket />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>

    )

})

export default Destaques