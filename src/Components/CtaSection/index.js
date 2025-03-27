import React, { forwardRef } from "react";

const CtaSection = forwardRef((props, ref) => {

    return (

        <>
            <section className="bg-blue-600 text-white py-16" id='cta-section' ref={ref}>
                <div className="container mx-auto text-center" id='cta-info'>
                    <h3 className="text-3xl font-bold mb-4">Pronto para cuidar da sua saúde?</h3>
                    <p className="text-xl mb-8">Agende seu exame online ou presencial!</p>
                    <button id='cta-btn' className="text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition duration-300 transform hover:scale-105">
                        Agendar Exame
                    </button>
                </div>
            </section>
        </>
    )

})

export default CtaSection