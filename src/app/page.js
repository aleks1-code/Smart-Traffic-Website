export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">SensorFlow</h1>
      <p className="max-w-3xl text-center text-gray-700">
        Real-Time Traffic and Parking Visibility through Smart Ground Sensors.
        Reliable, Privacy-First, and Designed for Modern Cities, Campuses, and
        Shopping Centres.
      </p>
      <a
        href="#learn-more"
        className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Learn More
      </a>
    </main>
  );
}
