// PersonPage.jsx
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Cookies from 'js-cookie'
import { Fragment, useContext, useState } from 'react'



const PersonPage = () => {
  const personData = {
    id: 1,
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    specialization: 'Desarrollador Web',
    email: 'john.doe@example.com',
    profileImage: 'url_to_profile_image.jpg', // Reemplaza con la URL de tu imagen de perfil
  };

  const {
    user 
  } = useContext(UserContext) 
  console.log(user)

  const [loading, setLoading] = useState(false);
  const token = Cookies.get('token');

  const onLogout = async () => {
    try {
      const resp = await fetch('http://localhost:3080/auth/logout', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      const data = await resp.json();

      if (data?.error) {
        console.log(error)
      } else {
        setUser(null);
        Cookies.remove('token')
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    loading
    ? <p>...Loading</p>
    :
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="flex items-center mb-8">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4"
          />
          <h1 className="text-3xl">{user?.name}</h1>
        </div>
        <div className="mb-16">
          <p className="mb-8">
            <strong>ID:</strong> {user?.dui}
          </p>
          <p className="mb-8">
            <strong>Teléfono:</strong> {user?.phone}
          </p>
          <p className="mb-8">
            <strong>Especialización:</strong> {user?.isHealthPersonnel === true? "empleado" : "paciente"}
          </p>
          <p className="mb-8">
            <strong>Correo:</strong> {user?.email}
          </p>
        </div>
    
          
        <button  onClick={onLogout} className="bg-red-500 text-white px-6 py-3 rounded">Cerrar Sesión</button>

      </div>
    </div>
  );
};

export default PersonPage;
