export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-white">
      <h1 className="text-4xl font-bold mb-6 text-center">
        SensorFlow
      </h1>
      <p className="text-lg text-center max-w-xl mb-8 text-gray-700">
        Real-Time Traffic and Parking Visibility through Smart Ground Sensors. 
        Reliable, Privacy-First, and Designed for Modern Cities, Campuses, and Shopping Centres.
      </p>
      <a 
        href="#learn-more" 
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition"
      >
        Learn More
      </a>
    </main>
  );
}