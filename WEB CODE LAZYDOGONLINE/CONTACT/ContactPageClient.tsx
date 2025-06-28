"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageCircle, ArrowLeft, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import Image from "next/image"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent! 🐕",
        description: "Thanks for reaching out! Cooper and the team will get back to you soon.",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsLoading(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 pt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="font-fredoka text-4xl md:text-6xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question about our books or songs? Want to share how Cooper's adventures have touched your family?
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white shadow-2xl border-0">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="font-fredoka text-2xl font-bold text-gray-900">Send Us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-400 focus:ring-orange-400"
                      disabled={isLoading}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-400 focus:ring-orange-400"
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-400 focus:ring-orange-400"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..."
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-400 focus:ring-orange-400 resize-none"
                    disabled={isLoading}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Cooper */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="bg-white shadow-lg border-2 border-orange-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-fredoka text-xl font-bold text-gray-900">Direct Contact</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Email Us Directly</h4>
                    <Button
                      variant="outline"
                      onClick={() => window.open("mailto:woof@lazydogonline.com")}
                      className="border-green-300 text-green-600 hover:bg-green-50"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      woof@lazydogonline.com
                    </Button>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                    <p className="text-gray-600 text-sm">
                      We typically respond within 24-48 hours. Cooper might be napping, but we'll get back to you as
                      soon as possible!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cooper's Corner */}
            <Card className="bg-gradient-to-br from-blue-100 to-purple-100 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Cooper the basset hound"
                    width={200}
                    height={200}
                    className="mx-auto rounded-full shadow-lg"
                  />
                </div>
                <h3 className="font-fredoka text-2xl font-bold text-gray-900 mb-4">A Message from Cooper</h3>
                <div className="bg-white/80 rounded-xl p-4 mb-4">
                  <p className="font-fredoka text-lg text-gray-800 italic">
                    "Woof! I love hearing from all my friends and their families. Whether you want to tell me about your
                    favorite book or share how our songs make you feel, I'm all ears (they're pretty big, so I hear
                    everything)!"
                  </p>
                </div>
                <p className="text-gray-700 text-sm">
                  Cooper reads every message that comes in and loves hearing about your adventures with his books and
                  songs!
                </p>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card className="bg-white shadow-lg border-2 border-blue-100">
              <CardContent className="p-8">
                <h3 className="font-fredoka text-xl font-bold text-gray-900 mb-4">Quick Questions?</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-gray-900">Where can I buy the books?</strong>
                    <p className="text-gray-600">
                      All our books are available on Amazon. Search for "Lazydogonline" or use the direct links on our
                      Books page.
                    </p>
                  </div>
                  <div>
                    <strong className="text-gray-900">How do I access the songs?</strong>
                    <p className="text-gray-600">
                      Each book contains a QR code that links directly to the song on our YouTube channel.
                    </p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Are more books coming?</strong>
                    <p className="text-gray-600">
                      Yes! Cooper has many more adventures planned. Subscribe to our newsletter to be the first to know!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
