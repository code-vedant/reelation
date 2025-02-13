"use client"

import { useState } from "react";
import Link from "next/link";
import { Github } from "lucide-react";

export default function Home() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="min-h-screen w-screen h-screen text-text flex flex-col items-center justify-between p-2 px-5">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold text-gray-300">Reelation</h1>
        <nav className="flex gap-2 items-center">
          <Link href="/loign" className="hover:text-subtext">Login</Link>
          <Link href="/register" className="text-primary bg-text hover:bg-subtext px-3 py-2 rounded-md">Sign up</Link>
        </nav>
      </header>
      
      {/* Hero Section */}
      <main className="flex flex-col items-center text-center justify-center w-full h-full">
        <h2 className="text-4xl sm:text-6xl font-bold mb-4">Discover & Share Amazing Content</h2>
        <p className="text-lg text-subtext mb-6">Join the community and showcase your creativity with short, engaging posts.</p>
        <Link href="/register" className="bg-secondary text-text px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary hover:text-subtext transition">
          Get Started
        </Link>
      </main>
      
      {/* Footer */}
      <footer className="text-subtext bg-primary w-screen text-center text-sm h-20 py-1">
        <div className="flex justify-center gap-4 mb-2">
          <Link href="https://github.com/code-vedant/reelation" target="_blank" className="hover:text-text">
            <Github className=""/>
          </Link>
        </div>
        <div className="flex justify-center gap-4 mb-1">
          <button onClick={() => setShowPrivacy(true)} className="hover:text-text">Privacy Policy</button>
          <span>|</span>
          <button onClick={() => setShowTerms(true)} className="hover:text-text">Terms of Service</button>
        </div>
        &copy; 2025 Reelation. Project by Vedant Uekey. Guided from Chai aur code yt channel.
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacy && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-4">Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.</p>
            <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
            <p className="mb-4">We may collect personal information such as your name, email, and uploaded content.</p>
            <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
            <p className="mb-4">Your information is used to improve user experience, provide services, and ensure platform security.</p>
            <h2 className="text-2xl font-semibold mt-6">3. Contact Us</h2>
            <p>If you have any questions about this policy, contact us at support@reelation.com.</p>
            <div className="modal-action">
              <button onClick={() => setShowPrivacy(false)} className="btn">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Modal */}
      {showTerms && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
            <p className="mb-4">By using Reelation, you agree to the following terms and conditions.</p>
            <h2 className="text-2xl font-semibold mt-6">1. Use of Service</h2>
            <p className="mb-4">Users must comply with our community guidelines and refrain from prohibited activities.</p>
            <h2 className="text-2xl font-semibold mt-6">2. Content Ownership</h2>
            <p className="mb-4">Users retain ownership of their uploaded content but grant us a license to display it.</p>
            <h2 className="text-2xl font-semibold mt-6">3. Termination</h2>
            <p className="mb-4">We reserve the right to suspend or terminate accounts violating our terms.</p>
            <div className="modal-action">
              <button onClick={() => setShowTerms(false)} className="btn">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
