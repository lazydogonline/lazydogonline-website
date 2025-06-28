"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Music, ExternalLink, ArrowLeft, Filter } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

// All 7 books
const books = [
  {
    id: 1,
    title: "If Only She Could Talk: The Tale of Tilly",
    subtitle: "A Musical Story",
    description:
      "A touching story about Tilly, a beautiful rescue cat, and the special bond between pets and their families. Perfect for teaching children about communication, understanding, and pet care.",
    price: "$12.99",
    image: "/images/tilly-cover.png",
    amazonUrl: "https://www.amazon.com/dp/B0FD9CTQSH",
    youtubeUrl: "https://youtube.com/watch?v=HPPO3s6uxT4",
    category: "Story Book",
    ages: "4-8",
    hasColoring: true,
    hasSong: true,
    featured: true,
  },
  {
    id: 2,
    title: "Aquatic Affirmations Coloring Book",
    subtitle: "An A to Z of Aquatic Affirmations",
    description:
      "Dive into positive thinking with this vibrant underwater adventure! Features 26 sea creatures from A to Z, each with uplifting affirmations to inspire calm, confidence, and creativity.",
    price: "$6.99",
    image: "/images/aquatic-affirmations-cover.png",
    amazonUrl: "https://www.amazon.com/dp/B0F9YNH9DB",
    youtubeUrl: "https://youtube.com/watch?v=Fn8DL6y347c",
    category: "Coloring Book",
    ages: "4+",
    hasColoring: true,
    hasSong: true,
    featured: true,
  },
  {
    id: 3,
    title: "Gnome Sweet Gnome Coloring Book",
    subtitle: "An A to Z of Magical Mindsets",
    description:
      "Enter a whimsical world of gnomes, mushroom houses, and magical thinking! This mindful affirmation coloring book features A to Z positive thoughts to nurture creativity and calm.",
    price: "$6.99",
    image: "/images/gnome-sweet-gnome-cover.png",
    amazonUrl: "https://www.amazon.com/dp/B0F9TVJ699",
    youtubeUrl: "https://youtube.com/watch?v=N6fdC6spBlg",
    category: "Coloring Book",
    ages: "4-8",
    hasColoring: true,
    hasSong: true,
    featured: true,
  },
  {
    id: 4,
    title: "Learn To Trace The Alphabet",
    subtitle: "Educational Tracing Book",
    description: "Help children develop fine motor skills and letter recognition with this engaging tracing book.",
    price: "$7.99",
    image: "/images/learn-to-trace-cover.png",
    amazonUrl: "https://www.amazon.com/dp/B0FDCTRACE",
    youtubeUrl: "https://youtube.com/watch?v=hXA5woWzEXw",
    category: "Educational Book",
    ages: "3-6",
    hasColoring: false,
    hasSong: true,
    featured: false,
  },
  {
    id: 5,
    title: "Millie Learns to Be Kind",
    subtitle: "A Rhyming Story About Sharing, Big Feelings, and Using Gentle Hands",
    description:
      "A heartwarming rhyming story that teaches children about sharing, managing big feelings, and using gentle hands. Follow Millie as she learns important lessons about kindness and emotional regulation.",
    price: "$12.99",
    image: "/images/millie-learns-to-be-kind-cover.png",
    amazonUrl: "https://www.amazon.com/dp/B0FD3B58JF",
    youtubeUrl: "https://youtube.com/watch?v=pXWUeH23zg0",
    category: "Story Book",
    ages: "4-8",
    hasColoring: false,
    hasSong: true,
    featured: false,
  },
  {
    id: 6,
    title: "Learn To Trace The Alphabet ABC",
    subtitle: "Advanced Tracing Practice",
    description: "Advanced alphabet tracing with uppercase and lowercase letters for developing writers.",
    price: "$9.99",
    image: "/images/learn-to-trace-alphabet-abc-cover.png",
    amazonUrl: "https://www.amazon.com/dp/B0FDABCTRACE",
    youtubeUrl: "https://youtube.com/watch?v=VsKzDraLMXc",
    category: "Educational Book",
    ages: "4-7",
    hasColoring: true,
    hasSong: true,
    featured: false,
  },
  {
    id: 7,
    title: "Thumper the Brave",
    subtitle: "A Porcupine's Journey",
    description:
      "A heartwarming tale of courage, kindness, and wildlife rescue. Follow Thumper the porcupine on an adventure that teaches children about bravery and helping others in need.",
    price: "$12.99",
    image: "/images/thumper-the-brave-cover.png",
    amazonUrl: "https://www.amazon.com/dp/B0FD9CDGD5",
    youtubeUrl: "https://youtube.com/watch?v=3L4-kArq5_4",
    category: "Story Book",
    ages: "4-8",
    hasColoring: false,
    hasSong: true,
    featured: false,
  },
]

export default function BooksPageClient() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", "Story Book", "Coloring Book", "Educational Book"]

  const filteredBooks = filter === "All" ? books : books.filter((book) => book.category === filter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 pt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="font-fredoka text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Book Collection</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover magical stories and creative coloring books featuring Cooper and friends. Each story book comes
            with its own original song available on YouTube!
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600 font-medium">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={
                  filter === category
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "border-orange-300 text-orange-600 hover:bg-orange-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredBooks.map((book) => (
            <Card
              key={book.id}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-2 border-orange-100"
            >
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <Image
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute top-2 right-2 flex flex-col gap-1">
                    <Badge className="bg-orange-500 text-white">{book.category}</Badge>
                    <Badge variant="outline" className="bg-white/90">
                      Ages {book.ages}
                    </Badge>
                    {book.featured && <Badge className="bg-green-500 text-white">Featured</Badge>}
                  </div>
                  {book.hasSong && (
                    <div className="absolute top-2 left-2">
                      <div className="bg-green-500 text-white rounded-full p-2">
                        <Music className="w-4 h-4" />
                      </div>
                    </div>
                  )}
                </div>

                <h3 className="font-fredoka text-xl font-bold text-gray-900 mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{book.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-orange-600">{book.price}</span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-3">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      BUY NOW ON AMAZON - {book.price}
                    </Button>
                  </a>

                  {book.hasSong && (
                    <a href={book.youtubeUrl} target="_blank" rel="noopener noreferrer" className="block">
                      <Button
                        variant="outline"
                        className="w-full border-green-500 text-green-600 hover:bg-green-50 bg-transparent"
                      >
                        <Music className="w-4 h-4 mr-2" />
                        Listen to Song
                      </Button>
                    </a>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {book.hasColoring && (
                    <Badge variant="secondary" className="text-xs">
                      Coloring Pages
                    </Badge>
                  )}
                  {book.hasSong && (
                    <Badge variant="secondary" className="text-xs">
                      Original Song
                    </Badge>
                  )}
                  <Badge variant="secondary" className="text-xs">
                    YouTube Video
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border-2 border-green-100">
            <h3 className="font-fredoka text-2xl font-bold text-gray-900 mb-4">Can't Decide? Start Here!</h3>
            <p className="text-gray-600 mb-6">
              New to Cooper's world? We recommend starting with "If Only She Could Talk: The Tale of Tilly" - it's our
              most popular book and includes a catchy song that kids love!
            </p>
            <a
              href="https://www.amazon.com/dp/B0FD9CTQSH"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mr-4"
            >
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full">
                <ExternalLink className="w-5 h-5 mr-2" />
                BUY TILLY'S BOOK NOW
              </Button>
            </a>
            <a
              href="https://youtube.com/@lazydogonline"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 text-lg rounded-full bg-transparent"
              >
                <Music className="w-5 h-5 mr-2" />
                Hear the Songs First
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
