import React, { useContext, useState } from 'react';
import logo from '../Login/logo.png'
import { Link } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import Cookies from 'js-cookie';
import { UserContext } from '../../context/UserContext';
import toast from 'react-hot-toast';



function App() {
  const { setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const { healthPersonnelCode, email, password, formState, onInputChange, onResetForm } = useForm({
    healthPersonnelCode: '',
    email: '',
    password: '',
  })

  const onSearchSubmit = async (event) => {
    event.preventDefault()

    try {
      const resp = await fetch('http://localhost:3080/auth/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formState)
      });

      const data = await resp.json();

      if (data?.error) {
        setUser(null);
        toast.error(data?.error)
      } else {
        setUser(data?.user);
        Cookies.set('token', data?.token)
        toast.success(data?.message)
        onResetForm()
      }
    } catch (error) {
      // Handle error if needed
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    loading
      ? <p>...Loading</p>
      :
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src={logo}
            alt="Sample image" />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-black-500">Iniciar Sesion Personal de Salud</p>
          </div>
          <form onSubmit={onSearchSubmit}>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="password"
              name="healthPersonnelCode"
              required
              value={healthPersonnelCode}
              onInput={onInputChange}
              placeholder="Codigo (id)"
            />
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              type="email"
              name="email"
              required
              value={email}
              onInput={onInputChange}
              placeholder="Email Address"
            />

            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
              name="password"
              type="password"
              required
              value={password}
              onInput={onInputChange}
              placeholder="Password"
            />

            <div className="mt-4 flex justify-between font-semibold text-sm">
              <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <input className="mr-1" type="checkbox" />
                <span>Recuerdame</span>
              </label>
              <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
            </div>

            <div className="flex items-center justify-center text-center md:text-left ">
              <button className="mt-4 bg-yellow-400 hover:bg-yellow-400 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Entrar</button>
            </div>
          </form>
        </div>
      </section>
  );
}

export default App;