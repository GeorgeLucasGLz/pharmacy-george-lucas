import React from "react";
import Logo from '../../assets/logo.png'

function Footer() {

    return (
        <footer className="bg-white text-black py-8" id='footer'>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <img className="w-1/3" src={Logo} alt="logo"/>
                    <p className="py-4 text-blue-600 font-medium">Farmácia: sua saúde, nossa prioridade.</p>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-4 text-blue-600">Links Rápidos</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-500 transition duration-300">Categorias</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition duration-300">Destaques</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition duration-300">Ofertas</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition duration-300">Atendimento em Casa</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-4 text-blue-600">Contato</h4>
                    <p>Email: contato@farmacia.com</p>
                    <p>Telefone: (11) 1234-5678</p>
                </div>
                <div>
                    <h4 className="font-bold text-lg mb-4 text-blue-600">Redes Sociais</h4>
                    <div className="flex flex-col justify-center items-center">
                        <a href="#" className="hover:text-blue-500 transition duration-300">Facebook</a>
                        <a href="https://www.instagram.com/" target='_blank' className="hover:text-blue-500 transition duration-300">Instagram</a>
                        <a href="" target='_blank' className="hover:text-blue-500 transition duration-300">Linkedin</a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center">

                <p>&copy; 2025 Farmácia. Todos os direitos reservados.</p>

                <a className="hover:text-blue-500 transition duration-300" href='https://georgelucasglz.github.io/My-Porfolio-George-Lucas/' target='_blank'>
                    <p>® Desenvolvido por George Lucas.</p>
                </a>
            </div>
        </footer>

    )
}

export default Footer