"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'
import { Recycle, Search, Star, Phone, Globe, Clock, Navigation2, MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Header } from './Header'

const mapContainerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: 40.7128,
  lng: -74.0060
}

const repairShops = [
  {
    id: 1,
    name: "Tech Wizards Repair",
    distance: 0.5,
    address: "123 Main St, New York, NY 10001",
    rating: 4.5,
    phone: "+1 (555) 123-4567",
    website: "https://techwizards.com",
    hours: "9:00 AM - 6:00 PM",
    lat: 40.7120,
    lng: -74.0050
  },
  {
    id: 2,
    name: "Gadget Gurus",
    distance: 1.2,
    address: "456 Broadway, New York, NY 10002",
    rating: 4.2,
    phone: "+1 (555) 987-6543",
    website: "https://gadgetgurus.com",
    hours: "10:00 AM - 7:00 PM",
    lat: 40.7140,
    lng: -74.0070
  },
  {
    id: 3,
    name: "iFixit Pro",
    distance: 0.8,
    address: "789 5th Ave, New York, NY 10003",
    rating: 4.8,
    phone: "+1 (555) 246-8101",
    website: "https://ifixitpro.com",
    hours: "8:00 AM - 8:00 PM",
    lat: 40.7110,
    lng: -74.0040
  }
]

export function NearbyRepairShops() {
  const [searchTerm, setSearchTerm] = useState("")
  const [distanceFilter, setDistanceFilter] = useState("all")
  const [ratingFilter, setRatingFilter] = useState("all")
  const [filteredShops, setFilteredShops] = useState(repairShops)

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!
  })

  useEffect(() => {
    const filtered = repairShops.filter(shop => {
      const matchesSearch = shop.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesDistance = distanceFilter === "all" || shop.distance <= parseFloat(distanceFilter)
      const matchesRating = ratingFilter === "all" || shop.rating >= parseFloat(ratingFilter)
      return matchesSearch && matchesDistance && matchesRating
    })
    setFilteredShops(filtered)
  }, [searchTerm, distanceFilter, ratingFilter])

  if (loadError) return <div>Error loading maps</div>
  if (!isLoaded) return <div>Loading maps</div>

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Nearby Repair Shops</h1>
            <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
              <Card>
                <CardHeader>
                  <CardTitle>Map View</CardTitle>
                  <CardDescription>Find repair shops near you</CardDescription>
                </CardHeader>
                <CardContent>
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={13}
                    center={center}
                  >
                    {filteredShops.map((shop) => (
                      <MarkerF
                        key={shop.id}
                        position={{ lat: shop.lat, lng: shop.lng }}
                        title={shop.name}
                      />
                    ))}
                  </GoogleMap>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Search and Filter</CardTitle>
                  <CardDescription>Find the perfect repair shop for your needs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Search className="w-4 h-4 opacity-50" />
                    <Input
                      placeholder="Search repair shops..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Select onValueChange={setDistanceFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Distance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Distances</SelectItem>
                        <SelectItem value="0.5">Within 0.5 miles</SelectItem>
                        <SelectItem value="1">Within 1 mile</SelectItem>
                        <SelectItem value="5">Within 5 miles</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select onValueChange={setRatingFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="Rating" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Ratings</SelectItem>
                        <SelectItem value="3">3+ Stars</SelectItem>
                        <SelectItem value="4">4+ Stars</SelectItem>
                        <SelectItem value="4.5">4.5+ Stars</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 space-y-6">
              {filteredShops.map((shop) => (
                <Card key={shop.id}>
                  <CardHeader>
                    <CardTitle>{shop.name}</CardTitle>
                    <CardDescription>{shop.distance} miles away</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{shop.rating} / 5</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Navigation2 className="w-4 h-4" />
                        <span>{shop.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>{shop.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4" />
                        <a href={shop.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                          {shop.website}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{shop.hours}</span>
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button>
                          <Navigation2 className="w-4 h-4 mr-2" />
                          Get Directions
                        </Button>
                        <Button variant="outline">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Contact Shop
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">About Us</h3>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm hover:underline underline-offset-4" href="#">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline underline-offset-4" href="#">
                    Team
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline underline-offset-4" href="#">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm hover:underline underline-offset-4" href="#">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline underline-offset-4" href="#">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline underline-offset-4" href="#">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm hover:underline underline-offset-4" href="#">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline underline-offset-4" href="#">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline underline-offset-4" href="#">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-6 text-center text-sm">© 2024 EcoTech Recycle. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}