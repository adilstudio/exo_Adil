import { useEffect, useState } from 'react';

const Infos = () => {
  const [status, setStatus] = useState('');
  const [info, setInfo] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch API status
        const statusResponse = await fetch('/api/status');
        if (!statusResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const statusData = await statusResponse.json();
        setStatus(statusData.message);

        // Fetch API info
        const infoResponse = await fetch('/api/info');
        if (!infoResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const infoData = await infoResponse.json();
        setInfo(infoData.content);
      } catch (error) {
        console.error('Error fetching API data:', error);
        setStatus('Error');
        setInfo(null);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center mt-8 mb-4">API Status: {status}</h1>
      {info && (
        <div className="flex flex-col md:flex-row gap-4">
          <div className="bg-gray-100 p-4 rounded-md flex-1">
            <h2 className="text-lg font-semibold mb-2">API Info:</h2>
            <p><span className="font-semibold">Name:</span> {info.name}</p>
            <p><span className="font-semibold">Version:</span> {info.version}</p>
            <p><span className="font-semibold">Description:</span> {info.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Infos;
