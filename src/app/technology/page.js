export default function TechnologyPage() {
  return (
    <main className="flex flex-col items-center justify-center p-10 bg-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Technology</h1>
      
      <p className="max-w-3xl text-center text-gray-700">
        SensorFlow’s technology is centered around a custom-built, low-cost smart parking sensor.
        Our prototype uses an <strong>ESP32 microcontroller</strong> paired with an <strong>HC-SR04 ultrasonic distance sensor</strong> and an <strong>infrared (IR) sensor</strong> to detect vehicle presence.
        Data is transmitted wirelessly via <strong>Bluetooth Low Energy (BLE)</strong>, allowing for real-time updates without expensive infrastructure.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-center">How It Works</h2>

      <p className="max-w-3xl text-center text-gray-700">
        When a car is detected in a parking spot, the sensor module sends a signal to the cloud.
        This data is then processed and visualized in a web dashboard, allowing for live occupancy tracking,
        predictive analytics, and user-friendly insights via desktop or mobile applications. Our sensor-first approach
        ensures low power usage, easy deployment, and privacy-preserving monitoring.
      </p>

    </main>
  );
}
