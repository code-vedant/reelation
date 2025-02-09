import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6 sm:p-12">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center max-w-6xl py-4">
        <h1 className="text-3xl font-bold text-gray-300">Reelation</h1>
        <nav className="flex gap-6">
          <Link href="#" className="hover:text-gray-400">Explore</Link>
          <Link href="#" className="hover:text-gray-400">Trending</Link>
          <Link href="#" className="hover:text-gray-400">Upload</Link>
        </nav>
      </header>
      
      {/* Hero Section */}
      <main className="flex flex-col items-center text-center max-w-3xl mt-12">
        <h2 className="text-4xl sm:text-6xl font-bold mb-4">Discover & Share Amazing Content</h2>
        <p className="text-lg text-gray-400 mb-6">Join the community and showcase your creativity with short, engaging posts.</p>
        <button className="bg-gray-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-600 transition">
          Get Started
        </button>
      </main>
      
      {/* Footer */}
      <footer className="mt-20 py-6 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Reelation. All rights reserved.
      </footer>
    </div>
  );
}
