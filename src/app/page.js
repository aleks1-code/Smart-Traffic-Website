"use client"; // important for interactivity in Next.js App Router

import { useState } from "react";

export default function HomePage() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center p-6 md:p-10 bg-white min-h-screen text-center">
      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6">SensorFlow</h1>
      
      {/* Subtitle */}
      <p className="max-w-3xl text-gray-700 mx-auto">
        Real-Time Traffic and Parking Visibility through Smart Ground Sensors. Reliable,
        Privacy-First, and Designed for Modern Cities, Campuses, and Shopping Centres.
      </p>

      {/* Learn More Button */}
      <button
        onClick={() => setShowDetails(true)}
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Learn More
      </button>

      {/* Hidden Section */}
      {showDetails && (
        <section className="mt-12 animate-fade-in">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8">How SensorFlow Works</h2>

          {/* Sensor Image */}
          <div className="flex justify-center mb-8">
            <img
              src="/sensor-prototype.png"
              alt="Sensor Prototype"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Description */}
          <div className="max-w-2xl text-gray-700 mx-auto space-y-4">
            <p>
              Our smart magnetic and pressure sensors detect vehicles in real time,
              transmitting data securely via Bluetooth Low Energy (BLE) to a local gateway.
            </p>
            <p>
              This provides cities, universities, and shopping centers with affordable,
              scalable, and privacy-first traffic and parking monitoring.
            </p>
          </div>

          {/* Pilot Testing Label */}
          <div className="mt-8">
            <span className="bg-green-500 text-white px-6 py-2 rounded-full text-sm md:text-base">
              🚀 Pilot Testing Begins Q4 2025
            </span>
          </div>
        </section>
      )}
    </main>
  );
}
