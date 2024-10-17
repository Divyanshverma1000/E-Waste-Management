'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Recycle, Search, Filter, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "Refurbished Smartphone",
    price: "₹8,999",
    image: "/placeholder.svg?height=200&width=200",
    category: "Mobiles"
  },
  {
    id: 2,
    name: "Smart LED TV (43-inch)",
    price: "₹21,999",
    image: "/placeholder.svg?height=200&width=200",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Mixer Grinder",
    price: "₹2,499",
    image: "/placeholder.svg?height=200&width=200",
    category: "Home Appliances"
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    price: "₹1,999",
    image: "/placeholder.svg?height=200&width=200",
    category: "Audio"
  },
  {
    id: 5,
    name: "Laptop (Core i5)",
    price: "₹35,999",
    image: "/placeholder.svg?height=200&width=200",
    category: "Computers"
  },
  {
    id: 6,
    name: "Smart Watch",
    price: "₹3,499",
    image: "/placeholder.svg?height=200&width=200",
    category: "Wearables"
  },
  {
    id: 7,
    name: "Air Conditioner (1.5 Ton)",
    price: "₹28,999",
    image: "/placeholder.svg?height=200&width=200",
    category: "Home Appliances"
  },
  {
    id: 8,
    name: "Digital Camera",
    price: "₹15,999",
    image: "/placeholder.svg?height=200&width=200",
    category: "Electronics"
  }
]

export function Marketplace() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Recycle className="h-6 w-6 text-green-600" />
            <span className="font-bold text-green-600">EcoTech Bazaar</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
              Home
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/pickup">
              Pickup Services
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/donate">
              Donation Portal
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/marketplace">
              Marketplace
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/upcycling">
              Upcycling Ideas
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/impact">
              Impact Tracker
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
              Contact Us
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-green-600">EcoTech Bazaar</h1>
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <div className="flex items-center w-full md:w-auto">
                <Input className="w-full md:w-80" placeholder="Search for products..." />
                <Button variant="ghost" size="icon" className="ml-2">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
              <Button variant="outline" className="w-full md:w-auto">
                <Filter className="mr-2 h-4 w-4" /> Filter
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden border-2 border-green-200 hover:border-green-400 transition-colors duration-300">
                  <CardHeader className="p-0">
                    <div className="aspect-square relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg font-semibold mb-2">{product.name}</CardTitle>
                    <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                    <p className="text-2xl font-bold text-green-600">{product.price}</p>
                  </CardContent>
                  <CardFooter className="p-4">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                      <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-green-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-green-800">About Us</h3>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm hover:underline underline-offset-4 text-green-700" href="#">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline underline-offset-4 text-green-700" href="#">
                    Team
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline underline-offset-4 text-green-700" href="#">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-green-800">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm hover:underline underline-offset-4 text-green-700" href="#">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline underline-offset-4 text-green-700" href="#">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline underline-offset-4 text-green-700" href="#">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-green-800">Follow Us</h3>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm hover:underline underline-offset-4 text-green-700" href="#">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline underline-offset-4 text-green-700" href="#">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline underline-offset-4 text-green-700" href="#">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-green-800">Newsletter</h3>
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1 bg-white border-green-300"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-green-700">© 2024 EcoTech Bazaar. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}