"use client";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-blend-soft-light text-foreground overflow-x-hidden font-sans selection:bg-primary/20"
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Welcome to Quickly Web</h1>
        <p className="text-lg mb-8">Your one-stop solution for all your web development needs.</p>
        <Link href="/dashboard" className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition">
          Get Started
        </Link>
      </div>
    </main>
  );
}