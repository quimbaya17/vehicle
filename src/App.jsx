
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import VehicleListPage from './components/VehicleListPage';
import VehicleFormPage from './components/VehicleFormPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vehicles" element={<VehicleListPage />} />
        <Route path="/vehicles/new" element={<VehicleFormPage />} />
        <Route path="/vehicles/edit/:id" element={<VehicleFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
