import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar2/navbar2";
import Footer from "../../components/Footer/footer.jsx";


function App() {
  return (
    <div>
    <Navbar />
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white border rounded p-8 shadow-md max-w-md">
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-black-500">Ingresa clave del paciente</p>
        </div>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mb-4" type="text" placeholder="Clave del paciente" />
        <Link to="/ini2">
          <div className="flex items-center justify-center">
            <button className="mt-4 bg-yellow-400 hover:bg-yellow-400 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Entrar</button>
          </div>
        </Link>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default App;
