import type { Metadata } from "next"
import Navigation from "@/components/Navigation"
import BooksPageClient from "./BooksPageClient"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Our Books - Lazydogonline Designs",
  description:
    "Explore our collection of children's books featuring Cooper the basset hound. Story books, coloring books, and educational content for kids ages 3-8.",
}

export default function BooksPage() {
  return (
    <main>
      <Navigation />
      <BooksPageClient />
      <Footer />
    </main>
  )
}
