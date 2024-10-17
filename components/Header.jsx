// components/Header.js

"use client"

import Link from 'next/link';
import { Recycle } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Recycle className="h-6 w-6" />
          <span className="font-bold">EcoTech Recycle</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/home">Home</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/pickup">Pickup Services</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/donate">Donation Portal</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/marketplace">Marketplace</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/upcycling">Upcycling Ideas</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/impact">Impact Tracker</Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
