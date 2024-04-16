
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold text-center mt-8 mb-4">Welcome to this technical test</h1>
      <p className="text-center">This FRONT and BACKEND application is ment to be deployed in a distant server.</p>
      <p className="text-center">You can get the code in the github repo test2024 in adilstudio</p>
      <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-gray-100 p-4 rounded-md flex-1">
              <h2 className="text-lg font-semibold mb-2">BACKEND:</h2>
              <p><span className="font-semibold">Route Get /api/info:</span> <a href="api/info" target="_blank"><button className="secondary"></button></a></p>
              <p><span className="font-semibold">Route Get /api/status:</span> <a href="api/status" target="_blank"><button className="secondary"></button></a></p>
            <p><span className="font-semibold">Route Post /api/calculate:</span> <a href="api/calculate" target="_blank"><button className="disabled"></button></a></p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md flex-1">
            <h2 className="text-lg font-semibold mb-2">FRONTEND: </h2>
            <p><span className="font-semibold">Infos:</span> <Link href="/infos">package infos</Link> </p>
            <p><span className="font-semibold">Status:</span><Link href="/status">package status</Link> </p>
            <p><span className="font-semibold">Listes:</span><Link href="/infos">Tableaux</Link> </p>
            <p><span className="font-semibold">Vehicles:</span><Link href="/infos">Tableau Vehicle</Link> </p>
            </div>
          </div>
      </div>
    </main>
  );
}
