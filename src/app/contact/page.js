export default function ContactPage() {
    return (
      <main className="flex flex-col items-center justify-center p-10 bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact</h1>
        <p className="max-w-3xl text-center text-gray-700">
          Interested in partnering, piloting, or learning more about SensorFlow?
          <br />
          Please email: <a href="mailto:your-email@example.com" className="text-blue-600 underline">your-email@example.com</a>
        </p>
      </main>
    );
  }
  