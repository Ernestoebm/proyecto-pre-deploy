import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};


const center = {
  lat: 13.67592,
  lng: -89.2911,
};

const GoogleMapsComponent = () => {
  return (
    <div className='flex flex-col h-full'>
      <header className="text-center py-4 bg-blue-500 text-white">
        <h1 className="text-2xl font-bold">Hospitales Cercanos</h1>
      </header>
      <main className="p-4">
        <LoadScript googleMapsApiKey="TU_CLAVE_DE_API">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </main>
    </div>
  );
};

export default GoogleMapsComponent;
