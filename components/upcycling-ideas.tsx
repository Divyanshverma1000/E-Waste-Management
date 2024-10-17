'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Recycle, ThumbsUp, MessageSquare, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const upcyclingIdeas = [
  {
    id: 1,
    title: "Smartphone Plant Stand",
    description: "Turn your old smartphone into a stylish plant stand for small succulents.",
    image: "/placeholder.svg?height=200&width=200",
    category: "Smartphones",
    likes: 245,
    comments: 32,
  },
  {
    id: 2,
    title: "Laptop Desk Organizer",
    description: "Transform an old laptop into a sleek desk organizer with multiple compartments.",
    image: "/placeholder.svg?height=200&width=200",
    category: "Laptops",
    likes: 189,
    comments: 27,
  },
  {
    id: 3,
    title: "Keyboard Wall Clock",
    description: "Create a unique wall clock using keys from an old computer keyboard.",
    image: "/placeholder.svg?height=200&width=200",
    category: "Computer Accessories",
    likes: 312,
    comments: 45,
  },
  {
    id: 4,
    title: "CD Mosaic Mirror Frame",
    description: "Design a dazzling mirror frame using broken CDs or DVDs for a shimmering effect.",
    image: "/placeholder.svg?height=200&width=200",
    category: "CDs/DVDs",
    likes: 178,
    comments: 23,
  },
  {
    id: 5,
    title: "Circuit Board Jewelry",
    description: "Craft unique earrings, pendants, or bracelets from old circuit boards.",
    image: "/placeholder.svg?height=200&width=200",
    category: "Electronics",
    likes: 267,
    comments: 38,
  },
  {
    id: 6,
    title: "TV Remote Caddy",
    description: "Repurpose an old tablet or e-reader as a stylish remote control caddy.",
    image: "/placeholder.svg?height=200&width=200",
    category: "Tablets",
    likes: 156,
    comments: 19,
  },
]

export function UpcyclingIdeas() {
  const [ideas, setIdeas] = useState(upcyclingIdeas)
  const [newIdea, setNewIdea] = useState({ title: '', description: '', category: '' })
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSubmitIdea = (e: React.FormEvent) => {
    e.preventDefault()
    const id = ideas.length + 1
    const newIdeaWithDefaults = {
      ...newIdea,
      id,
      image: "/placeholder.svg?height=200&width=200",
      likes: 0,
      comments: 0,
    }
    setIdeas([...ideas, newIdeaWithDefaults])
    setNewIdea({ title: '', description: '', category: '' })
    setIsDialogOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Recycle className="h-6 w-6 text-green-600" />
            <span className="font-bold text-green-600">EcoTech Recycle</span>
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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-green-600">Upcycling Ideas</h1>
            <p className="text-xl text-center mb-12 text-gray-600">Transform your e-waste into creative and useful items. Get inspired or share your own ideas!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {ideas.map((idea) => (
                <Card key={idea.id} className="overflow-hidden border-2 border-green-200 hover:border-green-400 transition-colors duration-300">
                  <CardHeader className="p-0">
                    <div className="aspect-video relative">
                      <Image
                        src={idea.image}
                        alt={idea.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-xl font-semibold mb-2">{idea.title}</CardTitle>
                    <Badge variant="secondary" className="mb-2">{idea.category}</Badge>
                    <CardDescription className="text-gray-600">{idea.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm">
                        <ThumbsUp className="mr-2 h-4 w-4" />
                        {idea.likes}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        {idea.comments}
                      </Button>
                    </div>
                    <Button variant="outline" size="sm">View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-green-500 hover:bg-green-600 text-white">Share Your Upcycling Idea</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Share Your Upcycling Idea</DialogTitle>
                    <DialogDescription>
                      Got a creative idea for upcycling e-waste? Share it with the community!
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmitIdea} className="space-y-4">
                    <Input
                      placeholder="Idea Title"
                      value={newIdea.title}
                      onChange={(e) => setNewIdea({...newIdea, title: e.target.value})}
                      required
                    />
                    <Input
                      placeholder="Category (e.g., Smartphones, Laptops)"
                      value={newIdea.category}
                      onChange={(e) => setNewIdea({...newIdea, category: e.target.value})}
                      required
                    />
                    <Textarea
                      placeholder="Describe your upcycling idea..."
                      value={newIdea.description}
                      onChange={(e) => setNewIdea({...newIdea, description: e.target.value})}
                      required
                    />
                    <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
                      <Send className="mr-2 h-4 w-4" /> Submit Idea
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
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
          <div className="mt-6 text-center text-sm text-green-700">© 2024 EcoTech Recycle. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}