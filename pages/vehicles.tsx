'use client';
import { useEffect, useState } from 'react';
import GenericTable from './components/GenericTable';
import GenericTableSm from './components/GenericTableSm';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch('/api/vehicle/all',
          { next: { revalidate: 10 } });
        if (!response.ok) {
          throw new Error('Failed to fetch vehicles');
        }
        const data = await response.json();
        console.log(data.content);
        setVehicles(data.content);

      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <>
      <div className="sm:flex hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-center mt-8 mb-4">All Vehicles</h1>
          <GenericTable title="Vehicles" data={vehicles} itemsPerPage={12} />
        </div>
      </div>
      <div className="md:hidden lg:hidden xl:hidden 2xl:hidden">
        <div className="container mx-auto px-4">
          Vehicules
          {vehicles.map((vehicle, index) => (
            <GenericTableSm key={index} title="Tableau 1" data={vehicle} />))}
        </div>
      </div>
+
    </>

  );
};

export default Vehicles;
