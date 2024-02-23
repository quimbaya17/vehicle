import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchVehicles } from '../components/api';

const HomePage = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchVehicles();
        setVehicles(data);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <h1>Lista de Vehículos</h1>
        <Link className="bg-blue-500 text-white px-4 py-2 rounded-lg" to="/vehicles">
          Ver Vehículos
        </Link>
        <div>
          {vehicles.length > 0 ? (
            <ul>
              {vehicles.map((vehicle) => (
                <li key={vehicle.id}>
                  <p>Marca: {vehicle.brand_vehicle}</p>
                  <p>Modelo: {vehicle.model_vehicle}</p>
                  <p>Placa: {vehicle.plate_vehicle}</p>
                  <hr />
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay vehículos disponibles.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
