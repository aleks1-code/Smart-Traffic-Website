import Link from 'next/link';  // <-- ADD THIS import at the top

export default function TechnologyPage() {
  return (
    <main className="flex flex-col items-center justify-center p-10 bg-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Technology</h1>
      <p className="max-w-3xl text-center text-gray-700">
        SensorFlow uses ground-based magnetic and pressure sensors, connected via Bluetooth Low Energy (<Link href="#">BLE</Link>) to a master receiver.
      </p>
    </main>
  );
}
