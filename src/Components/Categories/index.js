import React, { forwardRef } from 'react';

import Fralda from '../../assets/fralda.webp'
import Remedio from '../../assets/remedio.webp'
import Essenciais from '../../assets/kits.webp'

const Categories = forwardRef((props, ref) => {


    return (
        //  className="grid grid-cols-1 md:grid-cols-3 gap-8"
        <>
            <section className="py-16" id='categories' ref={ref}>
                <div className="container mx-auto">
                    <h3 className="text-2xl font-bold mb-8 text-center">Categorias</h3>
                    <div id="categories-grid">
                        {[
                            { id: 1, image: Remedio, name: "Remédios", topic1: "Analgésico", topic2: "Antibiotico", topic3: "Anti-inflamatório", topic4: "Antialérgico" },
                            { id: 2, image: Fralda, name: "Baby", topic1: "Fraldas", topic2: "Pomadas", topic3: "Shampoo", topic4: "Perfumes" },
                            { id: 3, image: Essenciais, name: "Essenciais", topic1: "Protetor Solar", topic2: "Desodorante", topic3: "Sabonete", topic4: "Higiene" },

                        ].map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300" id='categories-card'>
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" id='img-categorias' />
                                <div className="p-4">
                                    <h4 className="font-bold mb-2" id='title-card'>{product.name}</h4>
                                    <div className="flex-col justify-between items-center" id='info-card'>
                                        <ul id='categories-list'>
                                            <li>- {product.topic1}</li>
                                            <li>- {product.topic2}</li>
                                            <li>- {product.topic3}</li>
                                            <li>- {product.topic4}</li>
                                        </ul>
                                        <button className="bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300" id='btn-categories'>
                                            Mostrar tudo &gt;
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

export default Categories


