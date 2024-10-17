"use client"

import Link from 'next/link'
import { Recycle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts'
import { Header } from './Header'

const barChartData = [
  { month: 'Jan', recycled: 30, donated: 20 },
  { month: 'Feb', recycled: 40, donated: 25 },
  { month: 'Mar', recycled: 45, donated: 30 },
  
  { month: 'Apr', recycled: 50, donated: 35 },
  { month: 'May', recycled: 55, donated: 40 },
  { month: 'Jun', recycled: 60, donated: 45 },
]

const pieChartData = [
  { name: 'Smartphones', value: 400 },
  { name: 'Laptops', value: 300 },
  { name: 'Tablets', value: 200 },
  { name: 'Desktops', value: 100 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export function ImpactTracker() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Your Recycling Impact</h1>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recycling Overview</CardTitle>
                  <CardDescription>Your monthly recycling and donation stats</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      recycled: {
                        label: "Recycled",
                        color: "hsl(var(--chart-1))",
                      },
                      donated: {
                        label: "Donated",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barChartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Legend />
                        <Bar dataKey="recycled" fill="var(--color-recycled)" />
                        <Bar dataKey="donated" fill="var(--color-donated)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Device Types Recycled</CardTitle>
                  <CardDescription>Breakdown of recycled device types</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {pieChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>Your Achievements</CardTitle>
                  <CardDescription>Badges earned through your recycling efforts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-2">
                        🌱
                      </div>
                      <span className="text-sm font-medium">Eco Starter</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-2">
                        🌿
                      </div>
                      <span className="text-sm font-medium">Green Guardian</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-2">
                        🌳
                      </div>
                      <span className="text-sm font-medium">Recycling Pro</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-2">
                        🌍
                      </div>
                      <span className="text-sm font-medium">Earth Champion</span>
                    </div>
                  </div>
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