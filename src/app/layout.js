import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'; // ✅ Import Link correctly

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SensorFlow",
  description: "Real-time traffic and parking visibility through smart sensors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* Navbar */}
        <nav className="bg-blue-600 p-4">
          <div className="flex justify-center space-x-6">
            <Link href="/" className="text-white hover:underline">Home</Link>
            <Link href="/problem" className="text-white hover:underline">Problem</Link>
            <Link href="/technology" className="text-white hover:underline">Technology</Link>
            <Link href="/dashboard" className="text-white hover:underline">Dashboard</Link>
            <Link href="/about" className="text-white hover:underline">About</Link>
            <Link href="/contact" className="text-white hover:underline">Contact</Link>
          </div>
        </nav>

        {/* Render the page content here */}
        {children}
      </body>
    </html>
  );
}