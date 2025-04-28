export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center p-10 min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="max-w-2xl text-center text-gray-700">
        Got questions? Reach out to us at <a href="mailto:info@sensorflow.com" className="text-blue-600 underline">info@sensorflow.com</a> or use the contact form (coming soon)!
      </p>
    </main>
  );
}