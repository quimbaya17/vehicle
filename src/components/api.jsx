const API_URL = 'http://127.0.0.1:8000/api/vehicle/';

export const fetchVehicles = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    throw new Error('Error fetching vehicles');
  }
};

export const getVehicleById = async (id) => {
  try {
    const response = await fetch(`${API_URL}${id}/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching vehicle:', error);
    throw new Error('Error fetching vehicle');
  }
};

export const createVehicle = async (vehicleData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vehicleData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating vehicle:', error);
    throw new Error('Error creating vehicle');
  }
};

export const updateVehicle = async (vehicleId, vehicleData) => {
  try {
    const response = await fetch(`${API_URL}${vehicleId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vehicleData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating vehicle:', error);
    throw new Error('Error updating vehicle');
  }
};

export const deleteVehicle = async (vehicleId) => {
  try {
    await fetch(`${API_URL}${vehicleId}/`, {
      method: 'DELETE',
    });
    return true; // Se eliminó correctamente
  } catch (error) {
    console.error('Error deleting vehicle:', error);
    throw new Error('Error deleting vehicle');
  }
};
