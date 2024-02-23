import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createVehicle, updateVehicle, getVehicleById } from  '../components/api';

const initialState = {
  image_vehicle: null,
  brand_vehicle: '',
  plate_vehicle: '',
  model_vehicle: '',
  color_vehicle: '',
  type_vehicle: '',
  isverified_vehicle: false,
  user_id_user: null,
};

const VehicleFormPage = () => {
  const [vehicle, setVehicle] = useState(initialState);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const data = await getVehicleById(id);
          setVehicle(data);
        } catch (error) {
          console.error('Error fetching vehicle:', error);
        }
      };
      fetchData();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateVehicle(id, vehicle);
      } else {
        await createVehicle(vehicle);
      }
      navigate('/vehicles');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Marca"
        value={vehicle.brand_vehicle}
        onChange={(e) => setVehicle({ ...vehicle, brand_vehicle: e.target.value })}
      />
      <input
        type="text"
        placeholder="Placa"
        value={vehicle.plate_vehicle}
        onChange={(e) => setVehicle({ ...vehicle, plate_vehicle: e.target.value })}
      />
      <input
        type="text"
        placeholder="Modelo"
        value={vehicle.model_vehicle}
        onChange={(e) => setVehicle({ ...vehicle, model_vehicle: e.target.value })}
      />
      <button>{id ? 'Actualizar' : 'Crear'} Vehículo</button>
    </form>
  );
};

export default VehicleFormPage;
