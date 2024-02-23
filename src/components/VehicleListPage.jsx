import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchVehicles, deleteVehicle } from '../components/api';

const VehicleListPage = () => {
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

  const handleDelete = async (id) => {
    try {
      await deleteVehicle(id);
      setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
    } catch (error) {
      console.error('Error deleting vehicle:', error);
    }
  };

  return (
    <div>
      <Link to="/vehicles/new" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Crear Vehículo
      </Link>
      <div className="grid grid-cols-3 gap-4">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-gray-200 p-4 rounded-lg">
            <h3>{vehicle.brand_vehicle}</h3>
            <p>{vehicle.model_vehicle}</p>
            <p>{vehicle.plate_vehicle}</p>
            <div className="flex justify-between mt-4">
              <Link to={`/vehicles/edit/${vehicle.id}`}>Editar</Link>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleDelete(vehicle.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleListPage;
