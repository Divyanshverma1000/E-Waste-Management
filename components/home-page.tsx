'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Header } from './Header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Recycle, Gift, ShoppingBag, Lightbulb, BarChart2 } from 'lucide-react'

export function HomePageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
     <Header/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                src="/placeholder.svg?height=400&width=800"
                width={800}
                height={400}
                alt="E-waste recycling"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Recycle Your E-Waste
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Join us in creating a sustainable future. Recycle your electronic waste responsibly and make a positive impact on the environment.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Impact</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Devices Recycled</CardTitle>
                  <Recycle className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,234,567</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">CO2 Emissions Saved</CardTitle>
                  <BarChart2 className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5,678 tons</div>
                  <p className="text-xs text-muted-foreground">+15.2% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Devices Donated</CardTitle>
                  <Gift className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">98,765</div>
                  <p className="text-xs text-muted-foreground">+10.5% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcycling Projects</CardTitle>
                  <Lightbulb className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12,345</div>
                  <p className="text-xs text-muted-foreground">+8.3% from last month</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Platform Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Recycle className="h-6 w-6 mb-2 text-green-500" />
                  <CardTitle>Schedule Pickup</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Easily schedule a pickup for your e-waste. Our certified partners will collect and recycle responsibly.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Gift className="h-6 w-6 mb-2 text-green-500" />
                  <CardTitle>Donate Electronics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Give your working electronics a second life by donating them to schools, NGOs, or individuals in need.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ShoppingBag className="h-6 w-6 mb-2 text-green-500" />
                  <CardTitle>Buy/Sell Used Electronics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Explore our marketplace to buy or sell used electronics, extending their lifecycle and reducing waste.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lightbulb className="h-6 w-6 mb-2 text-green-500" />
                  <CardTitle>Explore Upcycling Ideas</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Discover creative ways to repurpose old electronics into useful or decorative items.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart2 className="h-6 w-6 mb-2 text-green-500" />
                  <CardTitle>Track Your Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Monitor your personal contribution to e-waste reduction and see your environmental impact grow over time.</CardDescription>
                </CardContent>
              </Card>
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
                <input
                  className="max-w-lg flex-1 px-3 py-2 border rounded-md text-sm"
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