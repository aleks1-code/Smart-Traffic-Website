export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center p-10 bg-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      
      <p className="max-w-2xl text-center text-gray-700">
        Got questions or interested in partnering with us?
        Reach out to our team directly:
      </p>

      <ul className="text-center mt-6 text-gray-700 space-y-2">
        <li><strong>Aleksandar Miric</strong> – 0422 186 672</li>
        <li><strong>Jim Chi</strong> – 0481 126 808</li>
        <li>Email: <a href="mailto:info@sensorflow.com" className="text-blue-600 underline">info@sensorflow.com</a></li>
      </ul>

      <p className="text-center mt-6 text-gray-500">
        Our contact form is currently under development — stay tuned!
      </p>
    </main>
  );
}
