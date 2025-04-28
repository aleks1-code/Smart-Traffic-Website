export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center p-10 min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-6 text-center">SensorFlow</h1>
      <p className="max-w-2xl text-center text-gray-700">
        Real-Time Traffic and Parking Visibility through Smart Ground Sensors.
        Reliable, Privacy-First, and Designed for Modern Cities, Campuses, and Shopping Centres.
      </p>

      <a href="#learn-more" className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
        Learn More
      </a>

      {/* --- Learn More Section --- */}
      <section id="learn-more" className="mt-20 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">How SensorFlow Works</h2>
        
        <img 
          src="/sensor-prototype.png" 
          alt="Sensor Prototype" 
          className="mx-auto mb-6 rounded shadow-lg w-full max-w-md" 
        />

        <p className="text-gray-700 mb-4">
          Our smart magnetic and pressure sensors detect vehicles in real time, transmitting data securely via Bluetooth Low Energy (BLE) to a local gateway.
        </p>

        <p className="text-gray-700 mb-8">
          This provides cities, universities, and shopping centers with affordable, scalable, and privacy-first traffic and parking monitoring.
        </p>

        <span className="inline-block px-5 py-2 bg-green-600 text-white rounded-full text-sm">
          Pilot Testing Begins Q4 2025 🚀
        </span>
      </section>
    </main>
  );
}
